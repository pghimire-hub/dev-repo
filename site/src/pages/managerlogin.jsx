import React from "react";
import Header from "../header";
import { Link } from "react-router-dom";

function ManagerLogin() {
  return (
    <>
      <Header page="managerlogin" />
      <main>
        <section class="glass">
          <div id="formheading">
            <h1>What would you like to manage</h1>
          </div>
          <ul id="formheading">
            <li>
              <Link to="/buildingmanager">Building management</Link>
            </li>
            <li>
              <Link to="/gardenmanager">Garden management</Link>
            </li>
            <li>
              <Link to="/poolmanager">Pool management</Link>
            </li>
            <li>
              <Link to="/securitymanager">Security management</Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default ManagerLogin;
