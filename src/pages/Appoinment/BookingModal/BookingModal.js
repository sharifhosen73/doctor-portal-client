import { format } from "date-fns/esm";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookingModal = ({ treatment, selected, setTreatment, refetch }) => {
  const { name, slots, price } = treatment; // appointment another name treatment
  const date = format(selected, "PP");
  const { user } = useContext(AuthContext);

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const slot = form.slot.value;
    const patientName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      treatment: name,
      patientName,
      slot,
      email,
      phone,
      price,
    };

    fetch("https://doctors-portal-server-beta-plum.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("Booking Conformed");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBooking} className="mt-8">
            <input
              type="text"
              disabled
              value={date}
              className="input input-bordered w-full mt-4 "
            />
            <select name="slot" className="select select-bordered w-full mt-4">
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input input-bordered w-full mt-4 "
            />
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              disabled
              placeholder="Your Email"
              className="input input-bordered w-full mt-4 "
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              className="input input-bordered w-full mt-4 "
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-outline w-full mt-4 "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
