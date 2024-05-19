import React from "react";

function SiteCarousel() {
  return (
    <div className="container">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/images/air-bike-01.png"
              className="d-block w-100"
              alt="air bike"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/jumper-01.png"
              className="d-block w-100"
              alt="jumper"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/mercury-01.png"
              className="d-block w-100"
              alt="mercury"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/spidi-01.png"
              className="d-block w-100"
              alt="spidi"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default SiteCarousel;
