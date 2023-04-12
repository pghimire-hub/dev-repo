import React from "react";
import Header from "../header";
import Home from "./home";

function Policy() {
  return (
    <>
      <Header page="policy" />
      <main>
        <section className="glass">
          <div id="formheading">
            <h1>Terrazas privacy policy</h1>
          </div>
          <p id="vehicleregistration">Diese Seite ist nicht leer</p>
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

export default Policy;
