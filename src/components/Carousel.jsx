import React from "react";

const Carousel = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="true"
    >
      <div className="carousel-inner">
        <div className="carousel-caption" style={{ zIndex: "10" }}>
          <form className="w-100 d-flex">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-warning my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="carousel-item active">
          <img
            src="https://source.unsplash.com/random/900×700?pizza"
            className="d-block w-100"
            alt="..."
            style={{
              filter: "brightness(50%)",
              height: "30rem",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://source.unsplash.com/random/900×700?burger"
            className="d-block w-100"
            alt="..."
            style={{
              filter: "brightness(50%)",
              height: "30rem",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://source.unsplash.com/random/900×700?food"
            className="d-block w-100"
            alt="..."
            style={{
              filter: "brightness(50%)",
              height: "30rem",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
