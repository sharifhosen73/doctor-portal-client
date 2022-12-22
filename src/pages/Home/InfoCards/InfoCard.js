import React from "react";

const InfoCard = ({ data }) => {
  const { icon, name, description, bgClass } = data;
  return (
    <div
      className={`card lg:card-side bg-base-100 shadow-xl p-2 lg:h-[190px] ${bgClass}`}
    >
      <figure>
        <img src={icon} alt="" />
      </figure>
      <div className="card-body text-white ">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
