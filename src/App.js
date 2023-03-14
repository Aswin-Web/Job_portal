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
