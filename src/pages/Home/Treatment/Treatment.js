import React from "react";
import treatment from "../../../assets/images/treatment.png";

const Treatment = () => {
  return (
    <div className="card lg:card-side bg-base-100">
      <figure className="lg:w-1/2 p-10 ">
        <img
          className="h-[576px] lg:w-[458px]"
          src={treatment}
          alt="Treatment"
        />
      </figure>
      <div className="card-body lg:pt-40 lg:h-80 lg:w-1/2 py-10 pr-10">
        <h2 className="card-title text-4xl font-bold">
          Exceptional Dental <br /> Care, on Your Terms
        </h2>
        <p className="my-10">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <div>
          <button className="btn btn-primary">Get Start</button>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
