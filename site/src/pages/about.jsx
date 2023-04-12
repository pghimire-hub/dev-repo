import React from "react";
import Header from "../header";

function About(props) {
  return (
    <>
      <Header page="home" />
      <main>
        <section className="glass">
          <div id="formheading">
            <h1>About us</h1>
          </div>
          <p id="vehicleregistration">
            Terrazas de Guacuco is your one-stop destination for finding your
            perfect home. From studio apartments, townhouses and getaway cabins,
            we have them all. With complete security and luxurious amenities,
            you'll feel at home the minute you step into our complex.
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

export default About;
