import React from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";

const ManageDoctor = () => {
  const { data: doctors = [], isLoading } = useQuery({
    queryKey: ["doctors"],
    queryFn: () =>
      fetch("https://doctors-portal-server-beta-plum.vercel.app/doctors", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-3xl">Manage Doctor</h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={doctor.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <button className="btn btn-sm text-dander">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctor;
