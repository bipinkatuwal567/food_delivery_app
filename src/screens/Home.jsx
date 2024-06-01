import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Navbar";
import FoodCard from "../components/FoodCard";

const Home = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="m-3 d-flex gap-3">
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
