import React from "react";

const InfoViaggio = ({ trip }) => {
  return (
    <div className="container mt-3">
      <h1 className="mb-5 text-center">Dettaglio Viaggio</h1>

      <div className="d-flex flex-wrap justify-content-evenly text-center">
        <div className="info-box">
          <h5 className="fw-bold">Destinazione</h5>
          <p>{trip.destinazione}</p>
        </div>

        <div className="info-box">
          <h5 className="fw-bold">Accompagnatore</h5>
          <p>{trip.accompagnatore}</p>
        </div>

        <div className="info-box">
          <h5 className="fw-bold">Data di Inizio</h5>
          <p>{trip.startDate}</p>
        </div>

        <div className="info-box">
          <h5 className="fw-bold">Data di Fine</h5>
          <p>{trip.endDate}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoViaggio;
