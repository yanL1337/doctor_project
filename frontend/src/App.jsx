import { useEffect, useState } from "react";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Protector from "./Protect/Protector";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Doctors from "./pages/Doctors";
import Pocketbase from "pocketbase";

function App() {
  const [doctors, setDoctors] = useState();
  const pb = new Pocketbase("https://doctorhub.pockethost.io/");

  useEffect(() => {
    pb.collection("docs")
      .getFullList({
        sort: "-created",
      })
      .then((data) => setDoctors(data));
  }, []);

  console.log(doctors);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/doctors" element={<Doctors docs={doctors} />} />
        <Route element={<Protector />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
