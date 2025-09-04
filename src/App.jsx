import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import DefaultLayout from "./Layout/DefaultLayout";
import HomePage from "./pages/HomePage";
import DetailsPartecipantePage from "./pages/DetailsParticipantePage";
import DetailsViaggi from "./pages/DetailsViaggiPage";
import Contact from "./pages/Contact";
import CreateViaggio from "./pages/CreateViaggio";
import { useState, useEffect } from "react";

function App() {
  const [trips, setTrips] = useState([]);

  const addTrip = (newTrip) => {
    setTrips((prevTrips) => {
      const updatedTrips = [...prevTrips, newTrip];
      localStorage.setItem("trips", JSON.stringify(updatedTrips));
      return updatedTrips;
    });
  };

  useEffect(() => {
    const savedTrips = JSON.parse(localStorage.getItem("trips")) || [];
    setTrips(savedTrips);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/DetailsPartecipantePage/:id"
            element={<DetailsPartecipantePage />}
          />
          <Route path="/DetailsViaggiPage/:index" element={<DetailsViaggi />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/CreateViaggio"
            element={<CreateViaggio addTrip={addTrip} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
