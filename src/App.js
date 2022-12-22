import "./App.css";
import { React } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";
import "react-day-picker/dist/style.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto pt-5 px-5">
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
