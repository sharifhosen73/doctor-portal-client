import React from "react";
import img1 from "../../../assets/images/people1.png";
import img2 from "../../../assets/images/people2.png";
import img3 from "../../../assets/images/people3.png";
import TestimonialItem from "./TestimonialItem";

const Testimonial = () => {
  const testimonialData = [
    {
      _id: 1,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: img1,
      name: "Winson Herry",
      city: "California",
    },
    {
      _id: 2,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: img2,
      name: "Winson Herry",
      city: "California",
    },
    {
      _id: 3,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: img3,
      name: "Winson Herry",
      city: "California",
    },
  ];

  return (
    <section className="my-20">
      <div className="text-center">
        <h1 className="text-xl font-bold text-primary">Testimonial</h1>
        <h1 className="text-4xl font-bold mt-4">What Our Patients Says</h1>
      </div>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 mt-20">
        {testimonialData.map((testimonial) => (
          <TestimonialItem key={testimonial._id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
