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
import Appointment from "./pages/Appointment";
import refreshContext from "./context/RefreshContext";

function App() {
  const pb = new Pocketbase("https://doctorhub.pockethost.io/");
  const [doctors, setDoctors] = useState([]);
  const [termine, setTermine] = useState([]);
  const [refresher, setRefresher] = useState(false);
  const [authID, setID] = useState();

  useEffect(() => {
    pb.collection("docs")
      .getFullList({
        sort: "-created",
      })
      .then((data) => setDoctors(data));

    pb.collection("termin")
      .getFullList({
        filter: `doctor.id = '${authID}'`,
      })
      .then((data) => setTermine(data));
    console.log(authID);
    // ! termine nur fpür docs filtern
  }, [refresher, authID]);

  return (
    <refreshContext.Provider value={setRefresher}>
      <BrowserRouter>
        <Navbar docs={doctors} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage setID={setID} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/doctors" element={<Doctors docs={doctors} />} />
          <Route path="/appointment" element={<Appointment docs={doctors} />} />
          <Route element={<Protector />}>
            <Route
              path="/dashboard"
              element={<Dashboard termine={termine} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </refreshContext.Provider>
  );
}

export default App;
