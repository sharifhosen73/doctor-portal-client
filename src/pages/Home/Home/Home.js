import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import Treatment from "../Treatment/Treatment";

const Home = () => {
  return (
    <div>
      <Banner />
      <InfoCards />
      <Services />
      <Treatment />
      <MakeAppointment />
      <Testimonial />
    </div>
  );
};

export default Home;
