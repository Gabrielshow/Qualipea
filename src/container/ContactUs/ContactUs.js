import React, { useState } from 'react';
import contactUs from '../../assets/contact_us.svg'
import './Contact.css';

const ContactUs = () => {
   const [data, setData] = useState({ name: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
  };
  return (
    <div modal-container>
    <div className="modal-form-container">
      <h1 className="modal-header">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="modal-form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Kindly tell us your name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div className="modal-form-group">
          <label htmlFor="description">Description: </label>
          <textarea
            name="description"
            placeholder="How may we be of assistance to you"
            value={data.description}
            onChange={handleChange}
          />
        </div>

        <button className="modal-button" type="submit">
          Submit
        </button>
      </form>
    </div>
    <div className="image-container">
    <img src={contactUs} className="contact-image" alt="contact-us"/>
    </div>
    </div>
    
  )
}

export default ContactUs;
