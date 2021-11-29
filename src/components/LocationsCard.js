const LocationsCard = ({ location }) => {
  console.log(location);
  return (
    <div className="col-lg-6 ">
      <div className="single-listing mb-30">
        <div className="list-img">
          <img src={location.img} alt="" />
        </div>
        <div className="list-caption">
          <span>Open</span>
          <h3>
            <a href="listing_details.html">Name: {location.name}</a>
          </h3>
          <p>700/D, Kings road, Green lane, 85/ London</p>
          <div className="list-footer">
            <ul>
              <li>+10 278 367 9823</li>
              <li>contact@midnight.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LocationsCard;
