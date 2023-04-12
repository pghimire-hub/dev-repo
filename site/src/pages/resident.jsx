import { Link } from "react-router-dom";
import React from "react";
import Header from "../header";

function Resident() {
  return (
    <>
      <Header page="resident" />
      <main>
        <section class="glass">
          <div id="formheading">
            <h1>Resident page - Username here</h1>
          </div>
          <article id="vehicleregistration">
            <fieldset class="visitingbuilding">
              <legend>Register Vehicle</legend>
              <form action="/" id="vehicleregistration">
                <label>Registration Number</label>
                <input type="text" placeholder="" />
                <br />
                <br />
                <label>Vehicle type</label>
                <input type="text" placeholder="Sedan" />
                <br />
                <br />
                <input type="submit" value="Register" />
              </form>
            </fieldset>
            <fieldset class="visitingbuilding">
              <legend>Timings of amenities</legend>
              <table id="vehicleregistration">
                <tr>
                  <th>Amenity</th>
                  <th>Time open</th>
                </tr>
                <tr>
                  <td>Pool 1</td>
                  <td>9:00 AM to 10:00 PM</td>
                </tr>
                <tr>
                  <td>Pool 2</td>
                  <td>9:00 AM to 10:00 PM</td>
                </tr>
                <tr>
                  <td>Trail</td>
                  <td>9:00 AM to 8:00 PM</td>
                </tr>
              </table>
            </fieldset>
            <fieldset class="visitingbuilding">
              <legend>Amenity Membership</legend>
              <form action="/" id="vehicleregistration">
                <table>
                  <tr>
                    <label>Pool member</label>
                    <select name="Apartment type">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                    <br />
                    <br />
                  </tr>
                  <tr>
                    <label>Expires on: 02/17/2023</label>
                    <br />
                    <br />
                  </tr>

                  <tr>
                    <label>Garden member</label>
                    <select name="Apartment type">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                    <br />
                    <br />
                  </tr>
                  <tr>
                    <label>Expires on: 02/17/2023</label>
                    <br />
                    <br />
                  </tr>

                  <input type="submit" value="Update membersip" />
                </table>
              </form>
            </fieldset>
            <fieldset class="visitingbuilding">
              <legend>Chat with residents/management</legend>
              <p id="vehicleregistration">
                Click{" "}
                <Link to="/chat" target="_blank">
                  here
                </Link>{" "}
                to chat
              </p>
            </fieldset>
          </article>
        </section>
      </main>
    </>
  );
}

export default Resident;
