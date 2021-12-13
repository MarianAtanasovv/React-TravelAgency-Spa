import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import * as countriesService from "../../services/countriesService";
import * as commentService from "../../services/commentService";
import "../Comments/comments.css";
import Comment from "../Comments/Comment";
import "./details.css";
import "./likes.css";
import * as likesService from "../../services/likesService";
import useLocationState from "../../hooks/useLocationState";
// import { Link } from "@material-ui/core";

const Details = ({ comment }) => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  const [comments, setComments] = useState([]);
  const { locationId } = useParams();
  const [location, setLocation] = useLocationState(locationId);

  useEffect(() => {
    likesService.getLocationsLikes(locationId).then((likes) => {
      setLocation((state) => ({ ...state, likes }));
    });
  }, []);

  useEffect(() => {
    commentService.getAll().then((commentResult) => {
      setComments(commentResult);
    });
  }, []);

  useEffect(() => {
    countriesService.getOne(locationId).then((locationResult) => {
      setLocation(locationResult);
    });
  }, [locationId]);

  const deleteHandler = (e) => {
    e.preventDefault();

    countriesService.destroy(locationId, user.accessToken).then(() => {
      navigate("/");
    });
  };

  const likeButtonClick = () => {
    if (user._id === location._ownerId) {
      return;
    }
    likesService.like(user._id, locationId).then(() => {
      setLocation((state) => ({ ...state, likes: [...state.likes, user._id] }));
    });
  };

  const onCommentCreate = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let username = formData.get("username");
    let comment = formData.get("comment");
    let currenctLocationId = locationId;

    commentService
      .create(
        {
          username,
          comment,
          currenctLocationId,
        },
        user.accessToken
      )
      .then((result) => {
        navigate("/");
      });
  };

  const ownerDelete = (
    <button className="delete-btn" onClick={deleteHandler}>
      <i className="fa fa-trash"> Delete </i>
    </button>
  );
  const ownerEdit = (
    <Link to={`/edit/${locationId}`}>
      <button className="delete-btn">
        <i className="fa fa-trash"> Edit </i>
      </button>
    </Link>
  );

  return (
    <div>
      <div className="hero-area2  slider-height2 hero-overly2 d-flex align-items-center ">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="hero-cap text-center pt-50">
                <h2>{location.name}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img className="details-location-img" src={location.img}></img>
      </div>

      <div className="listing-caption section-padding2">
        <div className="details-container">
          <div className="row justify-content-center">
            <div className="description col-lg-8">
              <h3 className="mb-20">Description</h3>
              <p className="mb-30">{location.description}</p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="address col-lg-8">
              <h3 className="mb-30">Location</h3>
              <p className="mb-30">{location.exactAddress}</p>

              <div>
                <input
                  type="image"
                  onClick={likeButtonClick}
                  // disabled={location.likes?.includes(user._id)}
                  className="details-heart"
                  src="https://i.natgeofe.com/k/7bfcf2d2-542e-44f0-962a-c36f2efa98a5/heart.jpg"
                />
              </div>

              <p id="total-likes">Likes: {location.likes?.length || 0}</p>
              {user._id === location._ownerId ? ownerDelete : null}
              {user._id === location._ownerId ? ownerEdit : null}

              {comments
                .filter((x) => x.currenctLocationId == locationId)
                .map((x) => (
                  <Comment key={x._id} comment={x} />
                ))}
              <form
                method="POST"
                onSubmit={onCommentCreate}
                className="commenting-form"
              >
                <div className="bg-light p-2">
                  <input
                    type="text"
                    name="username"
                    placeholder="Your username"
                  />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
