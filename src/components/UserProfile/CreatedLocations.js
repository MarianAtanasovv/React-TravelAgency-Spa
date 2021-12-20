import "./userProfile.css";
import { AuthContext } from "../../contexts/authContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as profileService from "../../services/profileService";
import ConfirmDialog from "../common/ConfirmDialog";
import { Link } from "react-router-dom";

const CreatedLocations = ({ location }) => {
  const { user } = useContext(AuthContext);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const navigate = useNavigate();

  const deleteHandler = () => {
    profileService
      .destroyCreated(location._id, user.accessToken)
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
        <div className="table100-body js-pscroll">
          <table>
            <tbody>
              <tr className="row100 body">
                <td className="cell100 column1">
                  <div className="button-holder">
                    <Link to={`/edit/${location._id}`}>
                      <button className="delete-btn">
                        <i class="far fa-edit">Edit</i>
                      </button>
                    </Link>
                    <button className="delete-btn" onClick={deleteClickHandler}>
                      <i class="far fa-trash-alt">Delete</i>
                    </button>
                  </div>
                  <img className="column-img" src={location.img}></img>
                </td>
                <td className="cell100 column2">{location.name}</td>
                <td className="cell100 column3">{location.description}</td>
                <td className="cell100 column4">{location.country}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default CreatedLocations;
