import React from "react";

function Contact() {
  return (
    <div className="container">
      <div className="card p-5" style={{ width: '100%', backgroundColor: '#F9EFDB' }}>
        <div className="d-flex" style={{ width: '100%' }}>
          <div className="card-body" style={{ width: '50%' }}>
            <h3 className="card-title">Sede Legale</h3>
            <p className="card-text pb-3">
              Di fianco potrai trovare le indicazioni per raggiungere la sede legale 
            </p>
            <h5 className="pb-3">Per qualsiasi problema mentre sei in viaggio puoi contattare:</h5>
            <ul>
              <li className="pb-2"><strong>Se sei in Italia:</strong> Contatta il numero +39 123 456 789</li>
              <li className="pb-2"><strong>Se sei in Europa:</strong> Contatta il numero +49 987 654 321</li>
              <li className="pb-2"><strong>Se sei fuori Europa:</strong> Contatta il numero +1 234 567 890</li>
            </ul>
          </div>
          <div style={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="public/Contact.jpg" className="card-img-top" alt="..." style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </div>       
      </div>
    </div>
  );
}

export default Contact;
