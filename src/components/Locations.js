const Locations = () => {
  return (
    <div class="popular-location section-padding30">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-tittle text-center mb-80">
              <span>Most visited places</span>
              <h2>Popular Locations</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-location mb-30">
              <div class="location-img">
                <img src="assets/img/gallery/location6.png" alt="" />
              </div>
              <div class="location-details">
                <p>indonesia</p>
                <a href="#" class="location-btn">
                  78 <i class="ti-plus"></i> Location
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="room-btn pt-20">
            <a href="catagori.html" class="btn view-btn1">
              View All Places
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Locations;
