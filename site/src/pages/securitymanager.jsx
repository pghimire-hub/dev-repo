import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import Header from "../header";
function SecurityManager() {
  const [values, setValues] = useState({});

  function TestPatrol(event) {
    const { name, value } = event.target;

    console.log(values.DisplayTimings);
    if (values.DisplayPatrol) {
      setValues((prevProps) => ({
        ...prevProps,
        DisplayPatrol: false,
      }));
    } else {
      setValues((prevProps) => ({
        ...prevProps,
        DisplayPatrol: true,
      }));
    }
  }

  function TestResidents(event) {
    const { name, value } = event.target;

    console.log(values.DisplayTimings);
    if (values.DisplayResidents) {
      setValues((prevProps) => ({
        ...prevProps,
        DisplayResidents: false,
      }));
    } else {
      setValues((prevProps) => ({
        ...prevProps,
        DisplayResidents: true,
      }));
    }
  }

  function Test(event) {
    const { name, value } = event.target;

    console.log(values.DisplayTimings);
    if (values.DisplayVisitors) {
      setValues((prevProps) => ({
        ...prevProps,
        DisplayVisitors: false,
      }));
    } else {
      setValues((prevProps) => ({
        ...prevProps,
        DisplayVisitors: true,
      }));
    }
  }

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

  let Patrol = values.DisplayPatrol ? (
    <table border="1">
      <tr>
        <td>
          <b>Employee Name</b>
        </td>
        <td>
          <b>Employee ID</b>
        </td>
        <td>
          <b>Patrolling Start Time</b>
        </td>
        <td>
          <b>Patrolling End Time</b>
        </td>
        <td>
          <b>Patrolling Area</b>
        </td>
      </tr>
      <tr>
        <td>Employee 1</td>
        <td>1381123</td>
        <td>6 AM</td>
        <td>2 PM</td>
        <td>Building 1</td>
      </tr>
      <tr>
        <td>Employee 1</td>
        <td>1381131</td>
        <td>6 AM</td>
        <td>2 PM</td>
        <td>Building 2</td>
      </tr>
      <tr>
        <td>Employee 3</td>
        <td>1381176</td>
        <td>6 AM</td>
        <td>2 PM</td>
        <td>Building 3</td>
      </tr>
      <tr>
        <td>Employee 4</td>
        <td>1381231</td>
        <td>6 AM</td>
        <td>2 PM</td>
        <td>Garden Area</td>
      </tr>
      <tr>
        <td>Employee 5</td>
        <td>1381112</td>
        <td>2 AM</td>
        <td>10 PM</td>
        <td>Building 1</td>
      </tr>
      <tr>
        <td>Employee 6</td>
        <td>1381236</td>
        <td>2 AM</td>
        <td>10 PM</td>
        <td>Building 2</td>
      </tr>
      <tr>
        <td>Employee 7</td>
        <td>1381123</td>
        <td>10 PM</td>
        <td>6 AM</td>
        <td>Building 3</td>
      </tr>
      <tr>
        <td>Employee 8</td>
        <td>1381112</td>
        <td>10 PM</td>
        <td>6 AM</td>
        <td>Building 1</td>
      </tr>
      <tr>
        <td>Employee 9</td>
        <td>1381236</td>
        <td>10 PM</td>
        <td>6 AM</td>
        <td>Building 2</td>
      </tr>
      <tr>
        <td>Employee 10</td>
        <td>1381123</td>
        <td>10 PM</td>
        <td>6 AM</td>
        <td>Garden Area</td>
      </tr>
      <tr>
        <td>Employee 11</td>
        <td>1381123</td>
        <td>6 AM</td>
        <td>2 PM</td>
        <td>Pool Area</td>
      </tr>
      <tr>
        <td>Employee 12</td>
        <td>1381123</td>
        <td>2 PM</td>
        <td>10 PM</td>
        <td>Pool Area</td>
      </tr>
    </table>
  ) : (
    <></>
  );

  return (
    <>
      <Header page="securitymanager" />
      <main>
        <section class="glass">
          <div id="formheading">
            <h1>Security Manager - Username here</h1>
          </div>
          <article id="vehicleregistration">
            <form method="post">
              <fieldset>
                <legend>Manage Personnel Security and Timing</legend>
                <table id="managesecurity">
                  <label>Employee ID</label>
                  <input type="text" id="fname" />
                  <br />
                  <label>Employee Name</label>
                  <input type="text" id="fname" />
                  <br />
                  <label>Patrol Start Time</label>
                  <input type="text" id="fname" />
                  <br />
                  <label>Patrol End Time</label>
                  <input type="text" id="fname" />
                  <br />
                  <label>Buildings Access</label>
                  <input type="text" id="fname" />
                  <br />
                  <label>Units Access</label>
                  <input type="text" id="fname" />
                  <div onClick={TestPatrol}>
                    Click here for all Patrol timings
                  </div>
                  {Patrol}
                </table>
              </fieldset>
              <fieldset class="visitingbuilding">
                <legend>Manage Residents</legend>
                <table>
                  <label>Building:</label>
                  <select name="building" title="Building">
                    <option>Choose a building</option>
                  </select>
                  <label>Unit:</label>
                  <select name="unit" title="unit">
                    <option>Choose a unit</option>
                  </select>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <div onClick={TestResidents}>
                    Click here for complete resident list
                  </div>
                  {Residents}
                </table>
              </fieldset>
              <fieldset class="visitingbuilding2nd">
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
                <tr>
                  <td>
                    <input type="submit" value="Update" />
                  </td>
                  <td>
                    <input type="submit" value="Delete" />
                  </td>
                </tr>
                <td colspan="5">
                  <button className="btn btn-primary btn-lg">
                    <Link to="/viewreports">View Report</Link>
                  </button>
                </td>
              </table>
              <br></br>
              <br></br>
            </form>
          </article>
        </section>
      </main>
    </>
  );
}

export default SecurityManager;
