import React, { useState } from 'react';
import './contact.css';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.taget.name]: e.taget.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Tous les champs sont requis.");
      return;
    }
    setError("");
    alert("Message envoyé avec succès !");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact">
    <div className="contact-container">
      <div className="contact-title">
        <h2>CONTACT</h2>
        <p>Mes contact <br/>CONTACT</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        {error && <p className="error-message">{error}</p>}

        <div className="form-group">
        <label>Nom</label>
        <input 
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Votre nom"
        />
        </div>
        <div className="form-group">
        <label>Email</label>
        <input 
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Votre email"
        />
        </div>
        <div className="form-group">
        <label>Message</label>
        <textarea 
          type="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Votre message"
        ></textarea>
        </div>
        <button type="submit" className="submit-btn">Envoyer</button>
      </form>
    </div>
    </section>
  );
};

export default Contact;