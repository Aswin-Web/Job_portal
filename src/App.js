import { Link, Route,Routes } from 'react-router-dom'
import JobseekerPage from './Pages/JobSeeker Page/JobseekerPage';
import "./Pages/JobSeeker Page/JobSeeker_Page_index.css"
import  ApplicationStatusComponent from  './Pages/JobSeeker Page/components/ApplicationStatusComponent'
import UserSchduleComponent from "./Pages/JobSeeker Page/components/SideNavComponents/Schdeule/main"
//////////////////////////////

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landingpage from "./pages/HomePage/Landingpage";
import CollegeAdmin from "./components/CollegeAdmin/CollegeAdmin";

const router = createBrowserRouter([
  { path: "/", element: <Landingpage /> },
  { path: "/collegeadmin", element: <CollegeAdmin /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
//////////////////////////////////////


function App() {




  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Hello</h1> <Link to="/user">USER </Link>
            </div>
          }
        />
        <Route path="/user" element={<JobseekerPage />}>
          <Route index element={<ApplicationStatusComponent />} />
          <Route path="schedule" element={<UserSchduleComponent />} />
        </Route>
        {/* <Route path="/schedule" element={<JobseekerPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
