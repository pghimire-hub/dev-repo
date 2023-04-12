import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import Header from "../header";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import paths from "./apipath";

function EditPool() {
  const navigate = useNavigate();
  useEffect(() => {
    getPool();
  }, []);
  const [inputs, setInputs] = useState({});
  //const [values, setValues] = useState({});
  const { poolid } = useParams();

  function getPool() {
    console.log(poolid);
    axios
      .get(paths + `/terrazas-backend/pool/${poolid}`)
      .then(function (response) {
        //console.log(response.data);
        setInputs(response.data);
        //console.log(inputs["Pool Name"]);
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    axios
      .put(paths + `/terrazas-backend/pool/${poolid}/edit`, inputs)
      .then(function (response) {
        navigate("/poolmanager");
        console.log(response.data);
      });
    //console.log(values);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  return (
    <>
      <Header page="poolmanager" />
      <main>
        <section className="glass">
          <div id="formheading">
            <h1>Edit pool info</h1>
          </div>
          <article id="vehicleregistration">
            <form>
              <fieldset className="visitingbuilding">
                <table id="contacttable">
                  <label>Pool Name</label>

                  <input
                    value={inputs["Pool Name"]}
                    name="Pool Name"
                    type="text"
                    placeholder=""
                    onChange={handleChange}
                  />
                  <br />
                  <label>Pool Opening time</label>

                  <input
                    value={inputs["Pool Opening Time"]}
                    name="Pool Opening Time"
                    type="text"
                    placeholder=""
                    onChange={handleChange}
                  />
                  <br />
                  <label>Pool Closing time</label>

                  <input
                    value={inputs["Pool Closing Time"]}
                    name="Pool Closing Time"
                    type="text"
                    placeholder=""
                    onChange={handleChange}
                  />
                  <br />

                  <tr>
                    <td colspan="2">
                      <button onClick={handleSubmit}>Save</button>
                    </td>
                  </tr>
                </table>
              </fieldset>
            </form>
          </article>
        </section>
      </main>
    </>
  );
}

export default EditPool;
