import "./userProfile.css";
import { AuthContext } from "../../contexts/authContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as profileService from "../../services/profileService";
import ConfirmDialog from "../common/ConfirmDialog";

const FavouritedLocations = ({ location }) => {
  const { user } = useContext(AuthContext);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const navigate = useNavigate();

  const deleteHandler = () => {
    profileService
      .destroyFavourite(location._id, user.accessToken)
      .then(() => {
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

  return (
    <>
      <ConfirmDialog
        show={showDeleteDialog}
        onClose={() => setShowDeleteDialog(false)}
        onSave={deleteHandler}
      />
      <div>
        <div class="table100-body js-pscroll">
          <table>
            <tbody>
              <tr class="row100 body">
                <td class="cell100 column1">
                  <img className="column-img" src={location.img}></img>
                </td>
                <td class="cell100 column2">{location.name}</td>
                <td class="cell100 column3">{location.description}</td>
                <td class="cell100 column4">
                  {location.country}
                  <button
                    className="delete-favourite-btn"
                    onClick={deleteClickHandler}
                  >
                    <i className="fas fa-times-circle"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default FavouritedLocations;
