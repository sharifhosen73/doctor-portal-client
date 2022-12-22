import React from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("https://doctors-portal-server-beta-plum.vercel.app/users").then(
        (res) => res.json()
      ),
  });

  const handleMakeAdmin = (id) => {
    fetch(
      `https://doctors-portal-server-beta-plum.vercel.app/users/admin/${id}`,
      {
        method: "put",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Added Admin Success");
          refetch();
        }
      });
  };

  return (
    <div>
      <h1 className="text-3xl">All User</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-primary"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
