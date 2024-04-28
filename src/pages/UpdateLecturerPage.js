import React, { useContext, useState } from 'react';
import { DataContext } from '../DataContext';
import {useNavigate} from 'react-router-dom'; 

function UpdateLecturerPage() {

  const navigate = useNavigate();
  const context = useContext(DataContext);
  const initialData = {
    full_name: '',
    gender: '',
    email: '',
    phone_number: '',
    department: '',
    specialization: '',
    years_of_experience: '',
  };

  const [formData, setFormData] = useState(initialData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedData = { ...context.getLecturers(), ...formData }; 
    context.updateLecturer(updatedData); 
    setFormData(initialData); 
    navigate('/')
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="full_name">Full Name:</label>
      <input
        type="text"
        id="full_name"
        name="full_name"
        value={formData.full_name}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="gender">Gender:</label>
      <input
        type="text"
        id="gender"
        name="gender"
        value={formData.gender}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="phone_number">Phone Number:</label>
      <input
        type="tel"
        id="phone_number"
        name="phone_number"
        value={formData.phone_number}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="department">Department:</label>
      <input
        type="text"
        id="department"
        name="department"
        value={formData.department}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="specialization">Specialization:</label>
      <input
        type="text"
        id="specialization"
        name="specialization"
        value={formData.specialization}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="years_of_experience">Years of Experience:</label>
      <input
        type="number"
        id="years_of_experience"
        name="years_of_experience"
        value={formData.years_of_experience}
        onChange={handleChange}
      />
      <br />

      <button type="submit">Update</button>
    </form>
  );
}

export default UpdateLecturerPage;
