const CountriesCard = ({ country }) => {
  return (
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-6">
        <div class="single-location mb-30">
          <div class="location-img">
            <img src={country.img} alt="" />
          </div>
          <div class="location-details">
            <p>{country.country}</p>
            <a href="#" class="location-btn">
              78 <i class="ti-plus"></i> Location
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountriesCard;
