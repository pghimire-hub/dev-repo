import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import Header from "../header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import paths from "./apipath";

function PoolManager() {
  const navigate = useNavigate;
  useEffect(() => {
    getPools();
    getPoolsResidents();
    getPoolsVisitors();
  }, []);

  function getPools() {
    axios.get(paths + "/terrazas-backend/pool").then(function (response) {
      console.log(response.data);
      setPools(response.data);
      //console.log(pools);
    });
  }

  function getPoolsResidents() {
    axios
      .get(paths + "/terrazas-backend/poolresident")
      .then(function (response) {
        console.log(response.data);
        setPoolResidents(response.data);
        //console.log(pools);
      });
  }

  function getPoolsVisitors() {
    axios
      .get(paths + "/terrazas-backend/GetPoolVisitors.php")
      .then(function (response) {
        console.log(response.data);
        setPoolVisitors(response.data);
      });
  }
  const [values, setValues] = useState({});
  const [pools, setPools] = useState({});
  const [poolresidents, setPoolResidents] = useState({});
  const [poolvisitors, setPoolVisitors] = useState({});
  function TestResidents(event) {
    const { name, value } = event.target;

    //console.log(values.DisplayTimings);
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

    //console.log(values.DisplayTimings);
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

  function TestPools(event) {
    const { name, value } = event.target;

    //console.log(values.DisplayTimings);
    if (values.DisplayPools) {
      setValues((prevProps) => ({
        ...prevProps,
        DisplayPools: false,
      }));
    } else {
      setValues((prevProps) => ({
        ...prevProps,
        DisplayPools: true,
      }));
    }
  }

  let Residents = values.DisplayResidents ? (
    <table border="1">
      <tr>
        <td>Resident name</td>
        <td>Pool name</td>
      </tr>
      {poolresidents.map((pool, key) => (
        <tr key={key}>
          {/* <td>{pool.poolid}</td> */}
          <td>{pool.residentname}</td>
          <td>{pool.pool}</td>
          {/* <td>{pool["Pool Closing Time"]}</td> */}
          <td>
            <Link to={`poolresident/${pool.residentpoolid}/edit`}>Edit</Link>
            <button
              onClick={(event) =>
                deletePoolResident(event, pool.residentpoolid)
              }
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
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
          <td>Expiry Date</td>
          {/* <td>Entry Time</td>
          <td>Leaving Time</td> */}
        </tr>
        {poolvisitors.map((pool1, key) => (
          <tr key={key}>
            {/* <td>{pool.poolid}</td> */}
            <td>{pool1.visitorid}</td>
            <td>{pool1.visitorpool}</td>
            <td>{pool1.expiry_date}</td>
            {/* <td>{pool["Pool Closing Time"]}</td> */}
            <td>
              <Link to={`poolvisitor/${pool1.visitorpoolid}/edit`}>Edit</Link>
              <button
                onClick={(event) =>
                  deletePoolVisitor(event, pool1.visitorpoolid)
                }
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    ) : (
      <p></p>
    );

  const deletePool = (event, poolid) => {
    event.preventDefault();
    axios
      .delete(paths + `/terrazas-backend/pool/${poolid}/delete`)
      .then(function (response) {
        console.log(response.data);
        getPools();
      });
  };

  const deletePoolResident = (event, residentpoolid) => {
    event.preventDefault();
    axios
      .delete(paths + `/terrazas-backend/DeletePoolResident.php`, {
        data: residentpoolid,
      })
      .then(function (response) {
        getPoolsResidents();
      });
  };

  const deletePoolVisitor = (event, visitorpoolid) => {
    event.preventDefault();
    axios
      .delete(paths + `/terrazas-backend/DeletePoolVisitor.php`, {
        data: visitorpoolid,
      })
      .then(function (response) {
        getPoolsVisitors();
      });
  };
  let Pools = values.DisplayPools ? (
    <table border="1">
      <tr>
        {/* <td>
          <b>Pool ID</b>
        </td> */}
        <td>
          <b>Pool name</b>
        </td>
        <td>
          <b>Opening Date</b>
        </td>
        <td>
          <b>Closing Time</b>
        </td>
      </tr>
      {pools.map((pool, key) => (
        <tr key={key}>
          {/* <td>{pool.poolid}</td> */}
          <td>{pool["Pool Name"]}</td>
          <td>{pool["Pool Opening Time"]}</td>
          <td>{pool["Pool Closing Time"]}</td>
          <td>
            <Link to={`pool/${pool.poolid}/edit`}>Edit</Link>
            <button onClick={(event) => deletePool(event, pool.poolid)}>
              Delete
            </button>
          </td>
        </tr>
      ))}
    </table>
  ) : (
    <></>
  );

  const handleSubmitPool = (event) => {
    event.preventDefault();

    axios
      .post(paths + "/terrazas-backend/pool/submit", values)
      .then(function (response) {
        window.location.reload();
      });
    console.log(values);
  };

  const handleSubmitResidentPool = (event) => {
    event.preventDefault();
    console.log(values);
    axios
      .post(paths + "/terrazas-backend/pool/residentsubmit", values)
      .then(function (response) {
        console.log(response.data);
        window.location.reload();
      });
  };

  const handleSubmitVisitorPool = (event) => {
    event.preventDefault();
    console.log(values);
    axios
      .post(paths + "/terrazas-backend/InsertPoolVisitor.php", values)
      .then(function (response) {
        console.log(response.data);
      });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setValues((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  return (
    <>
      <Header page="poolmanager" />
      <main>
        <section class="glass">
          <div id="formheading">
            <h1>Pool Manager - Username here</h1>
          </div>
          <article id="vehicleregistration">
            <form method="post">
              <fieldset>
                <legend>Manage Pools</legend>
                <table id="managesecurity">
                  <label>Pool Name</label>
                  <input
                    type="text"
                    id="fname"
                    name="Pool Name"
                    onChange={handleChange}
                  />
                  <br />
                  <label>Pool Opening Time</label>
                  <input
                    type="text"
                    id="fname"
                    name="Pool Opening Time"
                    onChange={handleChange}
                  />
                  <br />
                  <label>Pool Closing Time</label>
                  <input
                    type="text"
                    id="fname"
                    name="Pool Closing Time"
                    onChange={handleChange}
                  />
                  <div onClick={TestPools}>Click here for all pool timings</div>
                  {Pools}
                  <button onClick={handleSubmitPool}>Submit</button>
                </table>
              </fieldset>
              <fieldset class="visitingbuilding">
                <legend>Manage Residents</legend>
                <table id="managesecurity">
                  <label>Resident name</label>
                  <input
                    name="residentname"
                    id="fname"
                    onChange={handleChange}
                  />
                  <br />

                  <label>Pools access to</label>
                  <input
                    name="poolsaccessto"
                    id="fname"
                    onChange={handleChange}
                  />
                  <br />
                  <tr>
                    <button onClick={handleSubmitResidentPool}>Submit</button>
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
                      <label for="driverlicense">Visitor ID:</label>
                      <input
                        type="text"
                        name="visitorid"
                        id="driverlicense"
                        onChange={handleChange}
                      />
                      <br />
                      <br />
                      <label for="fromduration">Pool access to:</label>
                      <input
                        type="text"
                        name="visitorpool"
                        id="fromduration"
                        onChange={handleChange}
                      />
                      <br />
                      <br />
                      <label for="toduration">To Date:</label>
                      <input
                        type="date"
                        name="expiry_date"
                        id="toduration"
                        onChange={handleChange}
                      />
                      <br />
                      <br />
                    </td>

                    <td>
                      <Link to="/chat" target="_blank">
                        Chat with Management
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <button onClick={handleSubmitVisitorPool}>Submit</button>
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
                <tr>
                  <td colspan="5">
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
    </>
  );
}

export default PoolManager;
