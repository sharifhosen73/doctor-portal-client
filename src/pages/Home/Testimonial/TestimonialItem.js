import React from "react";

const TestimonialItem = ({ testimonial }) => {
  const { name, city, description, img } = testimonial;
  return (
    <div className="card h-[300px] w-96 bg-base-100 shadow-xl p-5">
      <div className="card-body">
        <p>{description}</p>
      </div>
      <div className="flex justify-between ">
        <img style={{ height: "80px", width: "80px" }} src={img} alt="" />
        <div>
          <h2 className="card-title">{name}</h2>
          <p>{city}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
