import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Header from "../header";
function BuildingManager() {
  const [values, setValues] = useState({});
  // setValues((prevProps) => ({
  //   ...prevProps,
  //   DisplayTimings: false,
  // }));
  let timingsDisplay = false;

  function Test(event) {
    const { name, value } = event.target;

    console.log(values.DisplayTimings);
    if (values.DisplayVisitors) {
      timingsDisplay = false;
      setValues((prevProps) => ({
        ...prevProps,
        DisplayVisitors: false,
      }));
    } else {
      timingsDisplay = true;
      setValues((prevProps) => ({
        ...prevProps,
        DisplayVisitors: true,
      }));
    }
  }
  function TestResidents(event) {
    const { name, value } = event.target;

    console.log(values.DisplayTimings);
    if (values.DisplayResidents) {
      timingsDisplay = false;
      setValues((prevProps) => ({
        ...prevProps,
        DisplayResidents: false,
      }));
    } else {
      timingsDisplay = true;
      setValues((prevProps) => ({
        ...prevProps,
        DisplayResidents: true,
      }));
    }
  }

  function TestManagers(event) {
    const { name, value } = event.target;

    console.log(values.DisplayTimings);
    if (values.DisplayManagers) {
      timingsDisplay = false;
      setValues((prevProps) => ({
        ...prevProps,
        DisplayManagers: false,
      }));
    } else {
      timingsDisplay = true;
      setValues((prevProps) => ({
        ...prevProps,
        DisplayManagers: true,
      }));
    }
  }
  let Visitors =
    values.DisplayVisitors == true ? (
      <table border="1">
        <tr>
          <td>Visitor name</td>
          <td>Visitor ID</td>
          <td>Date</td>
          <td>Entry Time</td>
          <td>Leaving Time</td>
        </tr>
        <tr>
          <td>Visitor 1</td>
          <td>1381639</td>
          <td>03/11/2023</td>
          <td>12:34</td>
          <td>16:30</td>
        </tr>
        <tr>
          <td>Visitor 2</td>
          <td>1387640</td>
          <td>02/26/2023</td>
          <td>08:34</td>
          <td>14:30</td>
        </tr>
        <tr>
          <td>Visitor 3</td>
          <td>13876421</td>
          <td>02/26/2023</td>
          <td>10:00</td>
          <td>12:30</td>
        </tr>
        <tr>
          <td>Visitor 4</td>
          <td>13876232</td>
          <td>02/25/2023</td>
          <td>17:00</td>
          <td>19:45</td>
        </tr>
      </table>
    ) : (
      <p></p>
    );

  let Residents = values.DisplayResidents ? (
    <table border="1">
      <tr>
        <td>Resident name</td>
        <td>Resident ID</td>
        <td>Apartment number</td>
        <td>Building number</td>
      </tr>
      <tr>
        <td>Resident 1</td>
        <td>2321231</td>
        <td>123</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Resident 2</td>
        <td>2321213</td>
        <td>124</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Resident 3</td>
        <td>2321232</td>
        <td>234</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Resident 4</td>
        <td>2321122</td>
        <td>236</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Resident 5</td>
        <td>23211121</td>
        <td>328</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Resident 6</td>
        <td>23211123</td>
        <td>328</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Resident 7</td>
        <td>23211123</td>
        <td>331</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Resident 8</td>
        <td>23211112</td>
        <td>321</td>
        <td>3</td>
      </tr>
    </table>
  ) : (
    <></>
  );

  let Managers = values.DisplayManagers ? (
    <table border="1">
      <tr>
        <td>Manager name</td>
        <td>Manager ID</td>
        <td>Type of Manager</td>
      </tr>
      <tr>
        <td>Manager 1</td>
        <td>1381623</td>
        <td>Pool manager</td>
      </tr>
      <tr>
        <td>Manager 2</td>
        <td>1387231</td>
        <td>Building manager</td>
      </tr>
      <tr>
        <td>Manager 3</td>
        <td>13876312</td>
        <td>garden manager</td>
      </tr>
    </table>
  ) : (
    <></>
  );

  return (
    <section id="page">
      <Header page="buildingmanager" />
      <main>
        <section class="glass">
          <div id="formheading">
            <h1>Building Manager - Username here</h1>
          </div>
          <article id="vehicleregistration">
            <form method="post">
              <fieldset>
                <legend>Add or Delete Managers/Residents/Visitors</legend>
                <table id="managesecurity">
                  <tr>
                    <label>Select a Person Type:</label>
                    <select name="managertype" id="managertype">
                      <option>Choose: </option>
                      <optgroup label="Manage...">
                        <option value="Resident">Residents</option>
                        <option value="Visitor">Visitor</option>
                      </optgroup>
                      <optgroup label="Manage Managers">
                        <option value="Garden">Garden Manager</option>
                        <option value="Pool">Pool Manager</option>
                        <option value="Security">Security Manager</option>
                      </optgroup>
                    </select>
                  </tr>
                  <label>Person ID</label>
                  <input type="text" id="fname" />
                  <br />
                  <label>Person Name</label>
                  <input type="text" id="fname" />
                  <br />
                  <label>Record Expiry Date</label>
                  <input type="text" id="fname" />
                  <br />
                  <label>Buildings Access</label>
                  <input type="text" id="fname" />
                  <br />
                  <label>Units Access</label>
                  <input type="text" id="fname" />
                  <tr></tr>
                  <tr></tr>
                  <tr></tr>
                  <tr></tr>
                  <div onClick={TestManagers}>
                    Click here for complete manager list
                  </div>
                  {Managers}
                </table>
              </fieldset>
              <fieldset class="visitingbuilding">
                {" "}
                <legend>View Residents</legend>
                <table>
                  <label>Building:</label>
                  <select name="building" title="Building">
                    <option>Choose a building</option>
                  </select>
                  <br />
                  <label>Unit:</label>
                  <select name="unit" title="unit">
                    <option>Choose a unit</option>
                  </select>
                  <div onClick={TestResidents}>
                    Click here for complete resident list
                  </div>
                  {Residents}
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              </fieldset>
              <fieldset class="visitingbuilding2nd">
                {" "}
                <legend>Manage Visitors</legend>
                <table>
                  <tr class="getdirections">
                    <td>
                      <label for="driverlicense">Driver's license:</label>
                      <input type="text" id="driverlicense" />
                      <br />
                      <br />
                      <label for="fromduration">From Date:</label>
                      <input type="date" id="fromduration" />
                      <br />
                      <br />
                      <label for="toduration">To Date:</label>
                      <input type="date" id="toduration" />
                      <br />
                      <br />
                    </td>

                    <td>
                      <Link to="/chat" target="_blank">
                        Chat with Management
                      </Link>
                    </td>
                  </tr>
                  <div onClick={Test}>Click here for complete visitor list</div>
                  {Visitors}
                </table>
              </fieldset>

              <table class="">
                <tr class="">
                  <td>
                    <input type="submit" value="Search" />
                  </td>
                  <td>
                    <input type="submit" value="Add" />
                  </td>
                </tr>
                <br />
                <tr>
                  <td>
                    <input type="submit" value="Update" />
                  </td>
                  <td>
                    <input type="submit" value="Delete" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className="btn btn-primary btn-lg">
                      <Link to="/generatereports">Generate Report</Link>
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-primary btn-lg">
                      <Link to="/viewreports">View Report</Link>
                    </button>
                  </td>
                </tr>
              </table>
              <br></br>
              <br></br>
            </form>
          </article>
        </section>
      </main>

      <footer>
        <div class="footer">
          &copy; Copyright 2023 | Terrazas De Guacuco Apartments
        </div>
      </footer>
    </section>
  );
}

export default BuildingManager;
