import React from "react";
import Header from "../header";
import Home from "./home";

function ViewReports() {
  return (
    <>
      <Header page="policy" />
      <main>
        <section className="glass">
          <div id="formheading">
            <h1>Generate Reports</h1>
          </div>
          <p id="vehicleregistration">Diese Seite ist nicht leer</p>
          <br></br>
          <p id="vehicleregistration">
            This site will allow to see reports after development.
          </p>
        </section>
      </main>
      <footer>
        <div className="footer">
          <small>© Copyright 2023 | Terrazas De Guacuco Apartments </small>
        </div>
      </footer>
    </>
  );
}

export default ViewReports;
