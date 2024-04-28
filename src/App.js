import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

// import AddNewCustomerPage from "./pages/AddNewCustomerPage"
import "bootstrap/dist/css/bootstrap.min.css"
import LecturerContextData from "./DataContext"
import LecturersPage from "./pages/LecturersPage"
import AddNewLecturerInfomation from "./pages/AddNewLecturerPage"
import UpdateLecturerPage from "./pages/UpdateLecturerPage"



export default function App() {
  return (
    <Router>
      <div className="container">

        {/* Navbar */}
        <nav className="navbar navbar-expand-sm bg-light">

          <div className="container-fluid">

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">All Lecturer</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add">Add New</Link>
              </li>
              
            </ul>
          </div>
        </nav>
        <LecturerContextData>
          <Routes>
            <Route path="/" element={<LecturersPage/>} />
            <Route path="/add" element={<AddNewLecturerInfomation/>}/>
            <Route path="/update" element={<UpdateLecturerPage/>}/>
            
          </Routes>
        </LecturerContextData>
      </div>
    </Router>
  )
}