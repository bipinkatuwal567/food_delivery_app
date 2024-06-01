import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Navbar";
import FoodCard from "../components/FoodCard";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        <Carousel />
      </div>

      <div className="m-3 d-flex gap-5 flex-wrap justify-content-center">
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
