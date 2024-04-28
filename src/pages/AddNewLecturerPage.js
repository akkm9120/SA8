import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataContext } from '../DataContext';
import { useNavigate } from 'react-router-dom';


const AddNewLecturerInfomation = () => {
    const context = useContext(DataContext);
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        full_name: '',
        gender: '',
        email: '',
        phone_number: '',
        department: '',
        specialization: '',
        years_of_experience: '',
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.id]: event.target.value });
    };;

    const handleClearAll = () => {
        setFormData({
            full_name: '',
            gender: '',
            email: '',
            phone_number: '',
            department: '',
            specialization: '',
            years_of_experience: '',
        });
    };

    return (
        <div className="container mt-3">
            <h1>New Lecturer Information</h1>
            <form>
                <div className="form-group mb-3">
                    <label htmlFor="fullName">Full Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="full_name"
                        placeholder="Enter your full name"
                        required
                        value={formData.full_name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="gender">Gender:</label>
                    <select className="form-control" id="gender" value={formData.gender} onChange={handleChange} required>
                        <option value="">Select Gender</option>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email address"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="phone_number"
                        placeholder="Enter your phone number"
                        value={formData.phone_number}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="department">Department:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="department"
                        placeholder="Enter your department"
                        value={formData.department}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="specialization">Specialization:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="specialization"
                        placeholder="Enter your specialization"
                        value={formData.specialization}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="yearsOfExperience">Years of Experience:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="years_of_experience"
                        placeholder="Enter your years of experience"
                        value={formData.years_of_experience}
                        onChange={handleChange}
                    />
                </div>
                <button type="button" className="btn btn-secondary mx-2" onClick={handleClearAll}>
                    Clear All
                </button>
                <button
                    className="btn btn-primary"
                    onClick={(event) => {
                        event.preventDefault(); // Prevent default form submission behavior
                        context.addLecturer(
                            formData.full_name,
                            formData.gender,
                            formData.email,
                            formData.phone_number,
                            formData.department,
                            formData.specialization,
                            formData.years_of_experience
                        );
                        navigate('/');
                    }}
                >
                    Submit
                </button>

            </form>
        </div>
    );
};

export default AddNewLecturerInfomation;
