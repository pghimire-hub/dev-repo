import React from "react";
//import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Application from "./application";
import Header from "../header";

function Home(props) {
  return (
    <>
      <Header page="home" />
      <main>
        <section className="glass">
          <div id="formheading">
            <h1>Enjoy Relax, Your new Home</h1>
          </div>
          <aside id="startapp">
            <Link to="/application">
              <button className="btn-start-app">Start Application</button>
            </Link>
          </aside>
        </section>
      </main>
    </>
  );
}

export default Home;
