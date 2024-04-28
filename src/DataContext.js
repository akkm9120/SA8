import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

// create the lecturer context
export const DataContext = createContext();

const BASE_API_URL = "https://3000-akkm9120-sa8backend-248hqs8ng9x.ws-us110.gitpod.io";


  export default function LecturerContextData(props) {
    const [lecturers, setlecturers] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(BASE_API_URL + "/api/lecturers");
        setlecturers(response.data.lecturers);
      };
      fetchData();
    }, []);



    const dataOperations = {
      getLecturers: () => {
        return lecturers
      },

      addLecturer: async (full_name, gender, email, phone_number, department, specialization, years_of_experience) => {
        await axios.post(BASE_API_URL + "/api/lecturers", {
          "full_name": full_name,
          "gender": gender,
          "email": email,
          "phone_number": phone_number,
          "department": department,
          "specialization": specialization,
          "years_of_experience": years_of_experience,
        })

        const newLecturer = {
          // "lecturer_id": response.data.lecturer_id
          "full_name": full_name,
          "gender": gender,
          "email": email,
          "phone_number": phone_number,
          "department": department,
          "specialization": specialization,
          "years_of_experience": years_of_experience,
        }
        const modified = [...lecturers, newLecturer];
        setlecturers(modified);
      },

      deleteLecturer: async (id) => {
        await axios.delete(BASE_API_URL + "/api/lecturers/" + id);
        const updatedLecturersList = lecturers.filter(lecturer => lecturer.id !== id);
        // Update the state with the updated list
        setlecturers(updatedLecturersList);
      },

      updateLecturer: async (id) => {
        const indexToUpdate = lecturers.findIndex(lecturer => lecturer.lecturer_id === id)
        const modifiedLecturer = {
            
        };
       
       setlecturers(lecturers.splice(indexToUpdate, 1, modifiedLecturer))
      }

    }



    return (
      <DataContext.Provider value={dataOperations}>
        {props.children}
      </DataContext.Provider>
    );

  }
