import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import Header from "../header";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import paths from "./apipath";

function EditPoolVisitor() {
  const navigate = useNavigate();
  useEffect(() => {
    getPool();
  }, []);
  const [inputs, setInputs] = useState({});
  //const [values, setValues] = useState({});
  //console.log(useParams());
  const { residentpoolid } = useParams();

  function getPool() {
    //console.log(residentpoolid);
    axios
      .get(
        paths +
          `/terrazas-backend/GetPoolVisitors.php?visitorpoolid=${residentpoolid}`
      )
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
      .put(
        paths +
          `/terrazas-backend/UpdatePoolVisitor.php?visitorpoolid=${inputs.visitorpoolid}&visitorid=${inputs.visitorid}&visitorpool=${inputs.visitorpool}&expiry_date=${inputs.expiry_date}`,
        inputs
      )
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
            <h1>Edit pool visitor info</h1>
          </div>
          <article id="vehicleregistration">
            <form>
              <fieldset className="visitingbuilding">
                <table id="contacttable">
                  <label>Resident Name</label>

                  <input
                    value={inputs.visitorid}
                    name="visitorid"
                    type="text"
                    placeholder=""
                    onChange={handleChange}
                  />
                  <br />
                  <label>Pool Name</label>

                  <input
                    value={inputs.visitorpool}
                    name="visitorpool"
                    type="text"
                    placeholder=""
                    onChange={handleChange}
                  />
                  <br />
                  <label>Expiry Date</label>
                  <input
                    type="date"
                    name="expiry_date"
                    id="toduration"
                    value={inputs.expiry_date}
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

export default EditPoolVisitor;
