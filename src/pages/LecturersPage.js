import React, { useContext } from 'react';
import { DataContext } from '../DataContext';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LecturersPage() {
  const context = useContext(DataContext);

  const handleDeleteLecturer = (lecturerId) => {
    context.deleteLecturer(lecturerId);
  };

  const handleUpdateLecturer = (lecturer) => {
    context.updateLecturer(lecturer);
    
  
  };


  return (
    <>
      <div className="d-flex justify-content-between mt-3">
        <h1>List All Lecturers</h1>
      </div>

      {context.getLecturers().map((lecturer, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <h2>Name: {lecturer.full_name}</h2>
            <ul>
              <li>Gender: {lecturer.gender}</li>
              <li>
                Department: {lecturer.department}
              </li>
              <li>Phone: {lecturer.phone_number}</li>
              <li>Specialization: {lecturer.specialization}</li>
            </ul>
            <div className="d-flex justify-content-start mt-3">
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteLecturer(lecturer.lecturer_id)+console.log("Lecturer ID"+lecturer.lecturer_id+"is been deleted")}> Delete</button>
              <button
                className="btn btn-info"
                onClick={() => handleUpdateLecturer({...lecturer})}>Update</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
