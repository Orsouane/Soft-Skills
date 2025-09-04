import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function CreateViaggio({ addTrip }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    destinazione: "",
    accompagnatore: "",
    startDate: "",
    endDate: "",
    imageUrl: "",
  });

  function handleInputChange(e) {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const tripWithAccompagnatore = {
      ...formData,
      accompagnatore: formData.accompagnatore || null,
    };
    addTrip(tripWithAccompagnatore);
    setFormData({
      destinazione: "",
      accompagnatore: "",
      startDate: "",
      endDate: "",
      imageUrl: "",
    });
    navigate(-1);
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Crea un nuovo viaggio</h2>

      <form className="row g-3" onSubmit={handleSubmit}>
        {/* Destinazione */}
        <div className="col-md-6 col-12">
          <label htmlFor="destinazione" className="form-label">
            Destinazione
          </label>
          <input
            type="text"
            className="form-control"
            id="destinazione"
            value={formData.destinazione}
            onChange={handleInputChange}
            placeholder="Destinazione"
          />
        </div>

        {/* Accompagnatore */}
        <div className="col-md-6 col-12">
          <label htmlFor="accompagnatore" className="form-label">
            Accompagnatore
          </label>
          <input
            type="text"
            className="form-control"
            id="accompagnatore"
            value={formData.accompagnatore}
            onChange={handleInputChange}
            placeholder="Accompagnatore"
          />
        </div>

        {/* Data di inizio */}
        <div className="col-md-6 col-12">
          <label htmlFor="startDate" className="form-label">
            Data di inizio
          </label>
          <input
            type="date"
            className="form-control"
            id="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
          />
        </div>

        {/* Data di fine */}
        <div className="col-md-6 col-12">
          <label htmlFor="endDate" className="form-label">
            Data di fine
          </label>
          <input
            type="date"
            className="form-control"
            id="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
          />
        </div>

        {/* URL immagine */}
        <div className="col-12">
          <label htmlFor="imageUrl" className="form-label">
            URL immagine
          </label>
          <input
            type="text"
            className="form-control"
            id="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
            placeholder="URL immagine del viaggio"
          />
        </div>

        {/* Pulsante di invio */}
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary">
            Creare viaggio
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateViaggio;
