import React from "react";

const FoodCard = () => {
  return (
    <div className="card shadow" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Something about food. Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>

        <div className="w-full">
          <div className="d-flex justify-content-between">
            <select className="h-100 rounded px-2" name="" id="">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>

            <select className="h-100 rounded px-2" name="" id="">
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>

            <p>Total Price: </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
