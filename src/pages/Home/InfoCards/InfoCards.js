import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const InfoData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Open 9:00 am to 5:00 pm everyday",
      icon: clock,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
    {
      id: 2,
      name: "Visit Our Location",
      description: "Open 9:00 am to 5:00 pm everyday",
      icon: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      name: "Contact us now",
      description: "01800-000000",
      icon: phone,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
  ];

  return (
    <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 lg:mt-[-37px]">
      {InfoData.map((data) => (
        <InfoCard key={data.id} data={data} />
      ))}
    </div>
  );
};

export default InfoCards;
