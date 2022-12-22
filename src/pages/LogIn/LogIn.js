import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./../../contexts/AuthProvider";
import useToken from "./../../hooks/useToken";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorLogin, setErrorLogin] = useState("");
  const { login } = useContext(AuthContext);
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    setErrorLogin(" ");
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        toast.success("Successfully Login");
        setLoginUserEmail(user.email);
        // getUserToken(user.email);
      })
      .catch((error) => {
        setErrorLogin(error.message);
      });
  };

  // const getUserToken = (email) => {
  //   fetch(`https://doctors-portal-server-beta-plum.vercel.app/jwt?email=${email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.accessToken) {
  //         localStorage.setItem("accessToken", data.accessToken);
  //       }
  //     });
  // };

  return (
    <div className="flex justify-center items-center h-[800px]">
      <div className="w-96 p-7">
        <h1 className="text-3xl">Login</h1>
        <form className="mt-10" onSubmit={handleSubmit(handleLogin)}>
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Please Enter Your Password",
                minLength: {
                  value: 6,
                  message: "Password must be 6 character or length",
                },
              })}
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>

          <label htmlFor="forgetPassword">Forget Password</label>
          <div>
            {errorLogin && <p className="text-red-600">{errorLogin}</p>}
          </div>

          <input
            className="btn btn-accent w-full my-2"
            type="submit"
            value="Login"
          />
        </form>
        <p>
          New to Doctors Portal?{" "}
          <Link to="/signup" className="text-primary font-semibold">
            Create New Account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">Login With Google</button>
      </div>
    </div>
  );
};

export default LogIn;
