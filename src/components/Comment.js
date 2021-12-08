import * as commentService from "../services/commentService";
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

const Comment = ({ comment }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const deleteHandlerComment = (e) => {
    e.preventDefault();

    commentService.destroy(comment._id, user.accessToken).then(() => {
      navigate("/");
    });
  };

  return (
    <div class="comment-wrapper">
      <div class="d-flex justify-content-center row">
        <div class="col-md-8">
          <div class="commenting-box">
            <div class="bg-white p-2">
              <div class="d-flex flex-column justify-content-start ml-2">
                <span class="d-block font-weight-bold name">
                  Username: {comment.username}
                </span>
              </div>
            </div>
            <div class="mt-2">
              <p class="comment-text">{comment.comment}</p>
            </div>
            <div class="mt-2 text-right">
              <button
                class="btn btn-primary btn-sm shadow-none"
                onClick={deleteHandlerComment}
              >
                Delete comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
