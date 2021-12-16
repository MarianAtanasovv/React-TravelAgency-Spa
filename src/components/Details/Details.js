import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import * as countriesService from "../../services/countriesService";
import * as commentService from "../../services/commentService";
import "../Comments/comments.css";
import Comments from "../Comments/Comments";
import "./details.css";
import "./likes.css";
import * as likesService from "../../services/likesService";
import useLocationState from "../../hooks/useLocationState";
import ConfirmDialog from "../common/ConfirmDialog";
import {
  useNotificationContext,
  types,
} from "../../contexts/NotificationContext";
import * as profileService from "../../services/profileService";

const Details = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { locationId } = useParams();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const { addNotification } = useNotificationContext();
  const [comment, setComments] = useState([]);
  const [like, setLike] = useState([]);
  const [location, setLocation] = useLocationState(locationId);

  useEffect(() => {
    likesService.getLocationsLikes(locationId).then((likesResult) => {
      setLike(likesResult);
      setLike((state) => state.filter((x) => x.locationId == locationId));
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

  const deleteHandler = () => {
    countriesService
      .destroy(locationId, user.accessToken)
      .then((result) => {
        navigate("/");
      })
      .finally(() => {
        setShowDeleteDialog(false);
      });
  };

  const deleteClickHandler = (e) => {
    e.preventDefault();
    setShowDeleteDialog(true);
  };

  const likeButtonClick = (e) => {
    if (user._id === location._ownerId) {
      addNotification("You cannot like your own location", types.warn);
      return;
    }

    const currentLike = like?.find((x) => x._ownerId == user._id);
    if (currentLike?._ownerId == user._id) {
      addNotification("You cannot like again", types.warn);
      return;
    }

    likesService.like(user._id, locationId).then((res) => {
      setLike((state) => [...state, res]);

      profileService.addLikedLocation(location, user.accessToken).then(() => {
        addNotification("Location added to favourites", types.success);
      });
    });
  };

  const ownerDelete = (
    <button className="delete-btn" onClick={deleteClickHandler}>
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
    <>
      <ConfirmDialog
        show={showDeleteDialog}
        onClose={() => setShowDeleteDialog(false)}
        onSave={deleteHandler}
      />
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
                <input
                  type="image"
                  onClick={likeButtonClick}
                  disabled={like?.includes(user._id)}
                  className="details-heart"
                  src="https://i.natgeofe.com/k/7bfcf2d2-542e-44f0-962a-c36f2efa98a5/heart.jpg"
                />

                <p id="total-likes">Likes: {like.length}</p>
                {user._id === location._ownerId ? ownerDelete : null}
                {user._id === location._ownerId ? ownerEdit : null}
                <Comments />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
