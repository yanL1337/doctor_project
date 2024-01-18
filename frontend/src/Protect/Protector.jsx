import { Navigate, Outlet } from "react-router-dom";
import Pocketbase from "pocketbase";
import LoginPage from "../pages/LoginPage";
import { useEffect, useState } from "react";

const Protector = () => {
  const pb = new Pocketbase("https://doctorhub.pockethost.io/");
  const [authorized, setAuthorized] = useState(pb.authStore.isValid);

  if (!authorized) {
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default Protector;
