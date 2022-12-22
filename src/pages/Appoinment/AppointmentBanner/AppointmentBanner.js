import React from "react";
import { DayPicker } from "react-day-picker";
import chair from "../../../assets/images/chair.png";

const AppointmentBanner = ({ selected, setSelected }) => {
  return (
    <div className="hero banner lg:h-[730px]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="lg:w-1/2 rounded-lg shadow-xl" alt="" />
        <div className="pr-10">
          <DayPicker mode="single" selected={selected} onSelect={setSelected} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
