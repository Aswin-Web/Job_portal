import {Outlet, Route,Routes } from 'react-router-dom'
import JobseekerPage from './Pages/JobSeeker Page/JobseekerPage';
import "./Pages/JobSeeker Page/JobSeeker_Page_index.css"
import AddApplication from './Pages/JobSeeker Page/components/AddApplication'
import Test from './Pages/JobSeeker Page/components/Test'
import  ApplicationStatusComponent from  './Pages/JobSeeker Page/components/ApplicationStatusComponent'

function App() {




  return (
    <div className="App">
      <Routes>
        <Route path="/" element={"<h1>Hello</h1>"} />
        <Route path="/user" element={<JobseekerPage />}>

          <Route index element={<ApplicationStatusComponent />} />
          <Route path="schedule" element={<Test />} />
        </Route>
        {/* <Route path="/schedule" element={<JobseekerPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
