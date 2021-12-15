import * as commentService from "../../services/commentService";
import { useContext, useEffect, useState, React, useCallback } from "react";
import { AuthContext } from "../../contexts/authContext";
import Comment from "./Comment";
import ConfirmDialog from "../common/ConfirmDialog";

const Comments = ({ comment }) => {
  const { user } = useContext(AuthContext);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    commentService.getAll().then((result) => {
      setComments(result);
    });
  }, []);

  const deleteCommentHandler = (id) => {
    commentService.destroy(id, user.accessToken).then((result) => {
      setComments((state) => state.filter((x) => x._id !== id));
    });
  };

  const mappedComments = comments.map((c) => (
    <Comment key={c._id} comment={c} onDelete={deleteCommentHandler} />
  ));

  return (
    <div className="comment-wrapper">
      <div className="d-flex justify-content-center row">
        <div className="col-md-8">
          <div className="commenting-box" id="commenting-box">
            <div className="bg-white p-2">
              <div className="d-flex flex-column justify-content-start ml-2">
                <span className="d-block font-weight-bold name">
                  Username: {comment.username}
                </span>
              </div>
            </div>
            {mappedComments}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
