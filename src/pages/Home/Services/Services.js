import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      image: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      image: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      image: whitening,
    },
  ];

  return (
    <div className="mt-16 ">
      <div className="text-center">
        <h3 className="text-primary text-xl font-bold">Our Services</h3>
        <h1 className="text-5xl">Services We Provide</h1>
      </div>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 pt-14">
        {serviceData.map((data) => (
          <Service key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Services;
