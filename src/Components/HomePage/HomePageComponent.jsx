import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./HomePageComponent.module.css";

const HomePageComponent = () => {
     const [trips, setTrips] = useState([]);

     useEffect(() => {
          // Popola dati di test se localStorage vuoto
          const savedTrips = JSON.parse(localStorage.getItem("trips")) || [
               { destinazione: "Roma", startDate: "2025-09-01", endDate: "2025-09-05", accompagnatore: "Mario", imageUrl: "/roma.jpg" },
               { destinazione: "Parigi", startDate: "2025-10-01", endDate: "2025-10-05", accompagnatore: "", imageUrl: "/parigi.jpg" },
               { destinazione: "Madrid", startDate: "2025-11-01", endDate: "2025-11-05", accompagnatore: "Lucia", imageUrl: "/madrid.jpg" },
          ];
          localStorage.setItem("trips", JSON.stringify(savedTrips));
          setTrips(savedTrips);
     }, []);

     const deleteTrip = (indexToDelete) => {
          const updatedTrips = trips.filter((_, index) => index !== indexToDelete);
          setTrips(updatedTrips);
          localStorage.setItem("trips", JSON.stringify(updatedTrips));
     };

     return (
          <section className="container p-4">
               <h2 className="text-center p-3">Viaggi in corso</h2>
               <div className="row justify-content-center">
                    {trips.map((trip, index) => (
                         <div className="col-lg-4 col-md-6 mb-4 col-sm-12" key={index}>
                              <div className={styles.card} style={{ minHeight: "300px", display: "flex", flexDirection: "column" }}>
                                   <img
                                        src={trip.imageUrl}
                                        className={`img-fluid ${styles.img}`}
                                        alt={`Viaggio a ${trip.destinazione}`}
                                        style={{ flexShrink: 0 }}
                                   />
                                   <div className={styles.cardbody} style={{ flexGrow: 1 }}>
                                        <h5 className="card-title">{trip.destinazione}</h5>
                                        <div>
                                             {trip.accompagnatore ? (
                                                  <div className="d-flex align-items-center">
                                                       <FaUser className="mr-2" />
                                                       <p className="card-text mb-0"><strong>{trip.accompagnatore}</strong></p>
                                                  </div>
                                             ) : (
                                                  <p className="card-text mb-0">Accompagnatore non assegnato</p>
                                             )}
                                        </div>
                                        <p className="card-text"><strong>Data di inizio:</strong> {trip.startDate}</p>
                                        <p className="card-text"><strong>Data di fine:</strong> {trip.endDate}</p>
                                        <div className="d-flex gap-2">
                                             <Link to={`/DetailsViaggiPage/${index}`} className="btn btn-light border">Dettaglio clienti</Link>
                                             <button className="btn btn-danger" onClick={() => deleteTrip(index)}>Elimina viaggio</button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    ))}
               </div>
          </section>
     );
};

export default HomePageComponent;
