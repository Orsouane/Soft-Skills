import React from "react";
import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import ListaPartecipanti from "./ListaPartecipanti";
import InfoViaggio from "./InfoViaggio";

function DetailsViaggi() {
  const { index } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const savedTrips = JSON.parse(localStorage.getItem("trips")) || [];
    if (savedTrips && savedTrips.length > index) {
      setTrip(savedTrips[index]);
    }
  }, [index]);

  if (!trip) {
    return <p>Viaggio non trovato</p>;
  }

  return (
    <div>
      <InfoViaggio trip={trip} />
      <ListaPartecipanti />
    </div>
  );
}

export default DetailsViaggi;
