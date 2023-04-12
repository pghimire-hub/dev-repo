import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, React } from "react";
import Header from "../header";
import axios from "axios";
import paths from "./apipath";

function CrudVisitor() {
  const navigate = useNavigate;
  useEffect(() => {
    getVisitor();
  },[]);

const [visitor, setVisitor] = useState({});



let Visitor = values.DisplayVisitors

function getVisitor() {
  axios
  .get(paths + '/tezzas-backend/CRUDVisitor.php')
  .then(function (response) {
    console.log(response.data);
  
  })
}





function Visitor() {
  const [values, setValues] = useState({});
  // setValues((prevProps) => ({
  //   ...prevProps,
  //   DisplayTimings: false,
  // }));
  let timingsDisplay = false;

  function Test(event) {
    const { name, value } = event.target;

    console.log(values.DisplayTimings);
    if (values.DisplayTimings) {
      timingsDisplay = false;
      setValues((prevProps) => ({
        ...prevProps,
        DisplayTimings: false,
      }));
    } else {
      timingsDisplay = true;
      setValues((prevProps) => ({
        ...prevProps,
        DisplayTimings: true,
      }));
    }
  }
  let Timings =
    values.DisplayTimings == true ? (
      <table border="1">
        <tr>
          <td>
            <b>Amenities name</b>
          </td>
          <td>
            <b>Opening Date</b>
          </td>
          <td>
            <b>Opening Time</b>
          </td>
        </tr>
        <tr>
          <td>Pool 1</td>
          <td>Tuesday-Sunday</td>
          <td>6am-10pm</td>
        </tr>
        <tr>
          <td>Pool 2</td>
          <td>Wednesday-Monday</td>
          <td>6am-10pm</td>
        </tr>
        <tr>
          <td>GYM</td>
          <td>Monday-Saturday</td>
          <td>6am-10pm</td>
        </tr>
        <tr>
          <td>Garden</td>
          <td>Monday-Sunday</td>
          <td>6am-11pm</td>
        </tr>
      </table>
    ) : (
      <p></p>
    );

  return (
    <>
      {" "}
      <Header page="visitor" />
      <main>
        <section className="glass">
          <div id="formheading">
            <h1>Visitor Profile - Username here</h1>
          </div>

          <article id="vehicleregistration">
            <form method="post">
              <fieldset>
                <legend>Information</legend>
                <table id="managesecurity">
                  <label for="fname">First name:</label>
                  <input type="text" id="fname" />
                  <br />
                  <label for="fname">Last name:</label>
                  <input type="text" id="fname" />
                  <br />
                  <label for="fname">Assigned Parking Spot:</label>
                  <input type="text" id="fname" />
                  <br />
                  <label for="fname">Vehicle Make:</label>
                  <input type="text" id="fname" />
                  <br />
                  <label for="fname">Vehicle Model:</label>
                  <input type="text" id="fname" />
                  <br />
                  <label for="fname">License Plate:</label>
                  <input type="text" id="fname" />
                </table>
              </fieldset>
              <fieldset className="visitingbuilding">
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
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <div name="visitortimings" onClick={Test}>
                    Click here to view timings
                  </div>
                  {Timings}
                </table>
              </fieldset>
              <br />
              <br />

              <fieldset className="visitingbuilding2nd">
                <table>
                  <tr>
                    <td></td>
                  </tr>
                  <tr className="getdirections">
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

                    <td colspan="3"></td>
                  </tr>
                  <tr>
                    <td align="left">Get Direction From:</td>
                  </tr>
                  <br />
                  <iframe
                    id="map"
                    title="Inline Frame Example"
                    width="200"
                    height="200"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
                  ></iframe>
                  <br />
                  <Link to="/chat" target="_blank">
                    Click here to chat
                  </Link>
                </table>
              </fieldset>
              <fieldset>
                <table className="">
                  <tr className="">
                    <td>
                      <input type="submit" value="Register" />
                    </td>
                  </tr>
                </table>
                <br />
                <br />
              </fieldset>
            </form>
          </article>
        </section>
      </main>
    </>
  );
}
}

export default CrudVisitor;
