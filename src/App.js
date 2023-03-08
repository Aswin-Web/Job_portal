import {Route,Routes } from 'react-router-dom'
import JobseekerPage from './Pages/JobSeeker Page/JobseekerPage';
import "./Pages/JobSeeker Page/JobSeeker_Page_index.css"
import AddApplication from './Pages/JobSeeker Page/components/AddApplication'

function App() {




  return (
    <div className="App">
      <Routes>
        <Route path='/' element={"<h1>Hello</h1>"}/>
        <Route path="/user" element={<JobseekerPage />} />
        <Route path='/app' element={<AddApplication/>} />
      </Routes>
    </div>
  );
}

export default App;
