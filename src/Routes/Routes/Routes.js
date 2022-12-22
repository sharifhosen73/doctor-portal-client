import { createBrowserRouter } from "react-router-dom";
import AdminRoute from "../../AdminRoute/AdminRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../pages/Appoinment/Appointment/Appointment";
import AddDoctor from "../../pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../pages/Dashboard/AllUsers/AllUsers";
import ManageDoctor from "../../pages/Dashboard/ManageDoctor/ManageDoctor";
import MyAppointment from "../../pages/Dashboard/MyAppointment/MyAppointment";
import Home from "../../pages/Home/Home/Home";
import LogIn from "../../pages/LogIn/LogIn";
import Payment from "../../pages/Payment/Payment";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoutes from "../../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment />,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/adddoctor",
        element: <AddDoctor />,
      },
      {
        path: "/dashboard/managedoctor",
        element: <ManageDoctor />,
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment />,
        loader: ({ params }) =>
          fetch(
            `https://doctors-portal-server-beta-plum.vercel.app/bookings/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
