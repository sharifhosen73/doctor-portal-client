import React from "react";

const AppointmentOptions = ({ options, setTreatment }) => {
  const { name, slots, price } = options;
  return (
    <div className="card mt-10 shadow-xl">
      <div className="card-body">
        <h2 className="text-center text-2xl text-secondary font-bold">
          {name}
        </h2>
        <p className="text-center ">
          {slots.length > 0 ? slots[0] : "Try Next Day"}
        </p>
        <p className="text-center ">
          {slots.length} {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE
        </p>
        <p className="text-center ">Price: ${price}</p>
        <div className="card-actions justify-center">
          <label
            onClick={() => setTreatment(options)}
            htmlFor="booking-modal"
            className="btn btn-primary"
            disabled={slots.length === 0}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOptions;
