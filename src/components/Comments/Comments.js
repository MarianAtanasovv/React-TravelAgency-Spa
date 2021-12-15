import * as commentService from "../../services/commentService";
import { useContext, useEffect, useState, React } from "react";
import { AuthContext } from "../../contexts/authContext";
import Comment from "./Comment";
import { useParams } from "react-router";

const Comments = () => {
  const { user } = useContext(AuthContext);
  const [comments, setComments] = useState([]);
  const { locationId } = useParams();

  useEffect(() => {
    commentService.getAll().then((result) => {
      setComments(result);
    });
  }, []);

  const deleteCommentHandler = (id) => {
    commentService.destroy(id, user.accessToken).then(() => {
      setComments((state) => state.filter((x) => x._id !== id));
    });
  };

  const onCommentCreate = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);

    let comment = formData.get("comment");
    let currenctLocationId = locationId;

    commentService
      .create(
        {
          comment,
          currenctLocationId,
        },
        user.accessToken
      )
      .then((result) => {
        setComments((comment) => [...comment, result]);
      });
  };

  const mappedComments = comments
    .filter((x) => x.currenctLocationId === locationId)
    .map((c) => (
      <Comment key={c._id} comment={c} onDelete={deleteCommentHandler} />
    ));

  return (
    <div className="mapped-comments">
      {mappedComments}
      <form
        method="POST"
        onSubmit={onCommentCreate}
        className="commenting-form"
      >
        <div className="bg-light p-2">
          <span type="text" name="username">
            Leave a comment:
          </span>

          <div className="d-flex flex-row align-items-start">
            <textarea
              className="form-control ml-1 shadow-none textarea"
              name="comment"
              placeholder="Your comment..."
            ></textarea>
          </div>
          <div className="mt-2 text-right">
            <button
              className="btn btn-primary btn-sm shadow-none"
              type="submit"
            >
              Post comment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Comments;
