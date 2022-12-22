import React from "react";
import doctor from "../../../assets/images/doctor.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import "./MakeAppointment.css";

const MakeAppointment = () => {
  return (
    <div className="hero appointmentImage h-[525px] lg:mt-48">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={doctor}
          className="-mt-[171px] h-[680px] w-1/2 hidden lg:block  "
          alt=""
        />
        <div className="lg:w-1/2">
          <h3 className="text-xl text-primary font-bold">Appointment</h3>
          <h2 className="py-6 text-3xl text-white">
            Make an appointment Today
          </h2>
          <p className="text-white my-5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>Appointment</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
