import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOptions from "./AppointmentOptions";

const AvailableAppointment = ({ selected }) => {
  const [treatment, setTreatment] = useState(null);

  const date = format(selected, "PP");

  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: () =>
      fetch(
        `https://doctors-portal-server-beta-plum.vercel.app/appointmentOptions?date=${date}`
      ).then((res) => res.json()),
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="mt-16">
      <h1 className="text-center text-secondary text-xl font-bold">
        Available Appointments on {format(selected, "PP")}
      </h1>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
        {appointmentOptions.map((options) => (
          <AppointmentOptions
            key={options._id}
            options={options}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          refetch={refetch}
          setTreatment={setTreatment}
          selected={selected}
        />
      )}
    </section>
  );
};

export default AvailableAppointment;
