import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: () =>
      fetch(
        "https://doctors-portal-server-beta-plum.vercel.app/appointmentSpecially"
      ).then((res) => res.json()),
  });

  const handleAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          };
          // save doctor information to the database
          fetch("https://doctors-portal-server-beta-plum.vercel.app/doctors", {
            method: "post",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
              navigate("/dashboard/managedoctor");
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-3xl">Add Doctor</h1>
      <div className="w-96 p-7">
        <form className="mt-10" onSubmit={handleSubmit(handleAddDoctor)}>
          <div>
            <label htmlFor="email">Name</label>
            <input
              type="name"
              id="name"
              {...register("name", {
                required: "Please Enter Your Name",
              })}
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Please Enter Your Email",
              })}
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>

          <div className="my-5">
            <label htmlFor="">Specially</label>
            <select
              {...register("select")}
              className="select select-primary w-full max-w-xs"
            >
              {specialties.map((specialty) => (
                <option key={specialty._id} specialty={specialty}>
                  {specialty.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="email">Upload Image</label>
            <input
              type="file"
              id="name"
              {...register("image")}
              className="input input-bordered w-full"
            />
            {errors.img && (
              <p className="text-red-600">{errors.img?.message}</p>
            )}
          </div>

          <input
            className="btn btn-accent w-full my-2"
            type="submit"
            value="Add Doctor"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
