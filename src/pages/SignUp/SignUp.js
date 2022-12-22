import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";
import useToken from "./../../hooks/useToken";

const googleProvider = new GoogleAuthProvider();

const SignUp = () => {
  const { googleLogin, createUser, updateUser } = useContext(AuthContext);

  const [createUserEmail, setCreateUserEmail] = useState("");
  const [token] = useToken(createUserEmail);

  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Successfully SignUp");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((error) => console.error(error));
      })
      .then((error) => console.error(error));
  };

  const handleGoogle = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((error) => console.error(error));
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("https://doctors-portal-server-beta-plum.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreateUserEmail(email);
      });
  };

  return (
    <div className="flex justify-center items-center h-[800px]">
      <div className="w-96 p-7">
        <h1 className="text-3xl">Sign Up</h1>
        <form className="mt-10" onSubmit={handleSubmit(handleSignUp)}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="name"
              id="name"
              {...register("name", {
                required: "Please Enter Your Name",
              })}
              className="input input-bordered w-full"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div className="my-5">
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
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div className="my-5">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Please Enter Your Password",
                minLength: {
                  value: 6,
                  message: "Password must be 6 character",
                },
              })}
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>

          <label htmlFor="forgetPassword">Forget Password</label>

          <input
            className="btn btn-accent w-full my-2"
            type="submit"
            value="Sign Up"
          />
        </form>
        <p>
          Have an Account
          <Link to="/login" className="text-primary font-semibold pl-1">
            Please Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button onClick={handleGoogle} className="btn btn-outline w-full">
          Sign Up With Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
