import {  Route, Routes, useNavigate } from "react-router-dom";
import JobseekerPage from "./components/JobSeekerPage/main";
// import "./Pages/JobSeeker_Page/main.css";
import "./components/JobSeekerPage/main.css";
import ApplicationStatusComponent from "./components/JobSeekerPage/ApplicationStatusComponent";
import UserSchduleComponent from "./components/JobSeekerPage/UserSchduleComponent";


import "./App.css";
import LandingHome from "../src/components/Landingpage/LandingHome";
import CollegeAdmin from "../src/components/CollegeAdmin/CollegeAdmin";
import UserSelect from "./components/UserSelection/UserSelect";
import Profile from "./components/Profile/Profile";
import UserSelectUI from "./components/UserSelection/UserSelectUI";

import UseAuth from './hooks/auth'
import { useEffect } from "react";
//  Controllers
import UserController from './components/Controller/UserController'
import CollegeAdminController from "./components/Controller/CollegeAdminController";
import Logout from "./utils/logout";



function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingHome />} />
        <Route path="/authredirect" element={<UserSelect />} />
        <Route path="/selectuser" element={<UserSelectUI />} />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/collegeadmin"
          element={
            <CollegeAdminController>
              <CollegeAdmin />
            </CollegeAdminController>
          }
        />
        <Route
          path="/user"
          element={
            <UserController>
              <JobseekerPage />
            </UserController>
          }
        >
          <Route index element={<ApplicationStatusComponent />} />
          <Route path="schdule" element={<UserSchduleComponent />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
