import { Route,Routes } from 'react-router-dom'
import JobseekerPage from './Pages/JobSeeker Page/JobseekerPage';
import "./Pages/JobSeeker Page/JobSeeker_Page_index.css"
import  ApplicationStatusComponent from  './Pages/JobSeeker Page/components/ApplicationStatusComponent'
import UserSchduleComponent from "./Pages/JobSeeker Page/components/SideNavComponents/Schdeule/main"

function App() {




  return (
    <div className="App">
      <Routes>
        <Route path="/" element={"<h1>Hello</h1>"} />
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
