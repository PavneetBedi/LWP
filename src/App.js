import Home from "./components/home";
import Login from "./components/login";
import Otp from "./components/otp";
import Dashboard from "./components/dashboard";
import Email from "./components/email";
import Register from "./components/register";
import CompanyProfile from "./components/companyprofile";
import Companydetails from "./components/companydetails";
import Trainerprofile from "./components/trainerprofile";
import Trainerdetails from "./components/trainerdetails";
import Trainingprofile from "./components/trainingprofile";
import Trainingdetails from "./components/trainingdetails";
import Trainerprofilesuccessfully from "./components/trainerprofilesuccessfully";
import Trainingprofilesuccessfully from "./components/trainingprofilesuccessfully";
import Screen16 from "./components/screen16";
import Screen17 from "./components/screen17";
import Screen18 from "./components/screen18";
import Screen19 from "./components/screen19";
import Screen20 from "./components/screen20";
import Page from "./components/page";


import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Otp" element={<Otp />} />
          <Route path="/email" element={<Email />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/companydetails" element={<Companydetails />} />
          <Route path="/companyprofile" element={<CompanyProfile />} />
          <Route path="/trainerprofile" element={<Trainerprofile />} />
          <Route path="/trainerdetails" element={<Trainerdetails />} />
          <Route path="/trainingprofile" element={<Trainingprofile />} />
          <Route path="/trainingdetails" element={<Trainingdetails />} />
          <Route
            path="/trainerprofilesuccessfully"
            element={<Trainerprofilesuccessfully />}
          />
          <Route
            path="/trainingprofilesuccessfully"
            element={<Trainingprofilesuccessfully />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/screen16" element={<Screen16 />} />
          <Route path="/screen17" element={<Screen17 />} />
          <Route path="/screen18" element={<Screen18 />} />
          <Route path="/screen19" element={<Screen19 />} />
          <Route path="/screen20" element={<Screen20 />} />
          <Route path="/page" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
