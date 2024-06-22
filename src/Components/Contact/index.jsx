import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez gérer l'envoi du formulaire, par exemple, envoyer les données à une API
    console.log('Form data submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div >
      <h2>Contactez-moi</h2>
      {submitted ? (
        <p>Merci pour votre message ! Je vous répondrai dès que possible.</p>
      ) : (
        <form onSubmit={handleSubmit} >
          <div >
            <div >
              <label >
                Nom:
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div >
              <label >
                Prénom:
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
          </div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label >
            Sujet:
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" >Envoyer</button>
        </form>
      )}
    </div>
  );
};



export default Contact;
