import * as commentService from "../services/commentService";
import { useContext, useEffect, useState, React } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import * as countriesService from "../services/countriesService";

const Comment = ({ comment }) => {
  const { user } = useContext(AuthContext);
  let [pastComment, setComment] = useState({});
  let { locationName, locationId } = useParams();
  const [location, setLocation] = useState({});

  useEffect(() => {
    countriesService.getOne(locationId).then((locationResult) => {
      setLocation(locationResult);
    });
  }, [locationId]);
  console.log(location);

  useEffect(() => {
    const textArea = document.getElementById("editing-textarea");
    textArea.style.height = "1px";
    textArea.style.visibility = "hidden";
    const editButton = document.getElementById("editingButton");
    editButton.style.visibility = "hidden";
  });

  useEffect(() => {
    commentService.getOne(comment._id).then((result) => {
      setComment(result);
    });
  }, [comment._id]);

  const navigate = useNavigate();

  const deleteHandlerComment = (e) => {
    e.preventDefault();

    commentService.destroy(comment._id, user.accessToken);
  };

  const showTextAreaHandler = (e) => {
    e.preventDefault();

    const textArea = document.getElementById("editing-textarea");
    textArea.style.visibility = "visible";
    const editButton = document.getElementById("editing-button");
    editButton.style.visibility = "hidden";
    const editingButton = document.getElementById("editingButton");
    editingButton.style.visibility = "visible";
    textArea.style.height = "100%";
  };

  const editCommentHandler = (e) => {
    e.preventDefault();

    let commentData = Object.fromEntries(new FormData(e.currentTarget));
    commentService.edit(commentData, comment._id, user.accessToken);

    const editButton = document.getElementById("editing-button");
    editButton.style.visibility = "visible";
    const textArea = document.getElementById("editing-textarea");
    textArea.style.visibility = "hidden";
    const editingButton = document.getElementById("editingButton");
    editingButton.style.visibility = "hidden";
  };
  const ownerEdit = (
    <button
      class="btn btn-primary btn-sm shadow-none"
      onClick={showTextAreaHandler}
      id="editing-button"
    >
      Edit
    </button>
  );
  const ownerDelete = (
    <button
      class="btn btn-primary btn-sm shadow-none"
      id="deleteComment"
      onClick={deleteHandlerComment}
    >
      Delete
    </button>
  );
  const ownerEditSubmit = (
    <button
      value="Save"
      type="submit"
      id="text-area-default"
      class="btn btn-primary btn-sm shadow-none"
    >
      Edit now
    </button>
  );

  return (
    <div class="comment-wrapper">
      <div class="d-flex justify-content-center row">
        <div class="col-md-8">
          <div class="commenting-box" id="commenting-box">
            <div class="bg-white p-2">
              <div class="d-flex flex-column justify-content-start ml-2">
                <span class="d-block font-weight-bold name">
                  Username: {comment.username}
                </span>
              </div>
            </div>
            <form method="POST" onSubmit={editCommentHandler}>
              <div class="mt-2">
                <p class="comment-text">{comment.comment}</p>
              </div>
              <div class="d-flex flex-row align-items-start" id="text-area-div">
                <textarea
                  class="form-control ml-1 shadow-none textarea"
                  id="editing-textarea"
                  name="comment"
                  placeholder="Your comment..."
                  defaultValue={comment.comment}
                ></textarea>
              </div>

              <div class="mt-2 text-right" id="editingButton">
                {user._id == comment._ownerId ? ownerEditSubmit : null}
              </div>
            </form>
            <div class="mt-2 text-right">
              {user._id == comment._ownerId ? ownerDelete : null}
            </div>
            <form>
              <div class="mt-2 text-right">
                {user._id == comment._ownerId ? ownerEdit : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
