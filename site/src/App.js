import logo from "./logo.svg";
import "./App.css";
//import "../public/css/styles.css";
import React from "react";
//import { BrowserRouter, Route, Link } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Application from "./pages/application";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ResetPassword from "./pages/resetpassword";
import Policy from "./pages/policy";
import Services from "./pages/services";
import Resident from "./pages/resident";
import ContactUs from "./pages/contactus";
import Visitor from "./pages/visitor";
import Loginandsignup from "./pages/loginandsignup";
import BuildingManager from "./pages/buildingmanager";
import { HashRouter, createHashRouter } from "react-router-dom";
import SecurityManager from "./pages/securitymanager";
import ManagerLogin from "./pages/managerlogin";
import GardenManager from "./pages/gardenmanager";
import PoolManager from "./pages/poolmanager";
import Chat from "./pages/chat";
import GenerateReports from "./pages/generatereports";
import ViewReports from "./pages/viewreports";
import EditPool from "./pages/editpool";
import EditPoolResident from "./pages/editpoolresident";
import EditPoolVisitor from "./pages/editpoolvisitor";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <header>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/application" element={<Application />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resident" element={<Resident />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/visitor" element={<Visitor />} />
            <Route path="/loginandsignup" element={<Loginandsignup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/buildingmanager" element={<BuildingManager />} />
            <Route path="/securitymanager" element={<SecurityManager />} />
            <Route path="/managerlogin" element={<ManagerLogin />} />
            <Route path="/gardenmanager" element={<GardenManager />} />
            <Route path="/poolmanager" element={<PoolManager />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/generatereports" element={<GenerateReports />} />
            <Route path="/viewreports" element={<ViewReports />} />
            <Route
              path="/poolmanager/pool/:poolid/edit"
              element={<EditPool />}
            />
            <Route
              path="/poolmanager/poolresident/:residentpoolid/edit"
              element={<EditPoolResident />}
            />
            <Route
              path="/poolmanager/poolvisitor/:residentpoolid/edit"
              element={<EditPoolVisitor />}
            />
          </Routes>
        </Router>
      </header>

      <footer>
        <div className="footer">
          <small>&copy; Copyright 2023 | Terrazas De Guacuco Apartments </small>
        </div>
      </footer>
    </div>
  );
}

export default App;
