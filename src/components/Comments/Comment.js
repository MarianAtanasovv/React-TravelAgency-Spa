import { useState, useContext } from "react";
import ConfirmDialog from "../common/ConfirmDialog";
import { AuthContext } from "../../contexts/authContext";

const Comment = ({ comment, onDelete }) => {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const { user } = useContext(AuthContext);

  const onDelteButtonClick = (e) => {
    e.preventDefault();
    setShowConfirmDelete(true);
  };

  const onDeleteConfirmed = () => {
    setShowConfirmDelete(false);
    onDelete(comment._id);
  };

  const onDeleteCanceled = () => {
    setShowConfirmDelete(false);
  };

  const ownerDelete = (
    <button
      className="btn btn-primary btn-sm shadow-none"
      id="deleteComment"
      onClick={onDelteButtonClick}
    >
      Delete
    </button>
  );

  return (
    <>
      <ConfirmDialog
        show={showConfirmDelete}
        onClose={onDeleteCanceled}
        onSave={onDeleteConfirmed}
      />

      <div className="comment-wrapper">
        <div className="d-flex justify-content-center row">
          <div className="col-md-8">
            <div className="commenting-box" id="commenting-box">
              <div className="bg-white p-2">
                <div className="d-flex flex-column justify-content-start ml-2">
                  <span className="d-block font-weight-bold name">
                    {user.email}
                  </span>
                </div>
              </div>

              <div className="mt-2">
                <p className="comment-text">{comment.comment}</p>
              </div>

              <div className="mt-2 text-right">
                {user._id == comment._ownerId ? ownerDelete : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
