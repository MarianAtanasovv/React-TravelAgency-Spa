import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as countriesService from "../services/countriesService";
import * as commentService from "../services/commentService";
import { AuthContext } from "../contexts/authContext";
import "./comments.css";
import Comment from "./Comment";

const Details = ({ comment }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);
  const [location, setLocation] = useState({});
  const { locationId } = useParams();

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
            <div className="col-lg-8">
              <h3 className="mb-20">Description</h3>
              <p className="mb-30">{location.description}</p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h3 className="mb-30">Location</h3>
              <p className="mb-30">{location.exactAddress}</p>
              <button className="delete-btn" onClick={deleteHandler}>
                <i className="fa fa-trash"></i>
              </button>
              {comments.map((x) => (
                <Comment key={x._id} comment={x} />
              ))}
              <form
                method="POST"
                onSubmit={onCommentCreate}
                className="commenting-form"
              >
                <div class="bg-light p-2">
                  <input
                    type="text"
                    name="username"
                    placeholder="Your username"
                  />
                  <div class="d-flex flex-row align-items-start">
                    <textarea
                      class="form-control ml-1 shadow-none textarea"
                      name="comment"
                      placeholder="Your comment..."
                    ></textarea>
                  </div>
                  <div class="mt-2 text-right">
                    <button
                      class="btn btn-primary btn-sm shadow-none"
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
