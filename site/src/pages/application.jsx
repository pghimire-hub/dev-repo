import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../header";

function Application() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  function PhoneCheck(event) {
    const { name, value } = event.target;
    console.log(name, value);
    let reg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (!reg.test(value) && value != "") {
      setErrors((prevProps) => ({
        ...prevProps,
        [name]: true,
      }));
    } else {
      setErrors((prevProps) => ({
        ...prevProps,
        [name]: false,
      }));
    }
    setValues((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  }
  function ZipCheck(event) {
    const { name, value } = event.target;
    console.log(name, value);
    let reg = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (!reg.test(value) && value != "") {
      setErrors((prevProps) => ({
        ...prevProps,
        [name]: true,
      }));
    } else {
      setErrors((prevProps) => ({
        ...prevProps,
        [name]: false,
      }));
    }
    setValues((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  }
  let errorTextPhone =
    errors.phone == true ? <p>Phone number invalid</p> : <p></p>;
  let errorTextZip = errors.zip == true ? <p>Zip invalid</p> : <p></p>;
  return (
    <>
      <Header page="application" />
      <main>
        <section className="glass">
          <div id="formheading">
            <h1>Lease Application</h1>
          </div>
          <form action="/" id="vehicleregistration">
            <label>Apartment type</label>
            <select name="Apartment type">
              <option>Choose one</option>
              <option>Studio</option>
              <option>Town House</option>
              <option>Cabin</option>
            </select>
            <br />
            <br />
            <label>First Name</label>
            <input type="text" placeholder="John" required />
            <br />
            <br />
            <label>Last Name</label>
            <input type="text" placeholder="Doe" required />
            <br />
            <br />
            <label>Phone Number</label>
            <input
              onChange={PhoneCheck}
              type="text"
              name="phone"
              placeholder="+1123456789"
              value={values.phone || ""}
            />
            <br />
            <br />
            {errorTextPhone}
            <label>Address</label>
            <input type="text" placeholder="Address" />
            <br />
            <br />
            <label>Zip</label>
            <input
              type="text"
              placeholder="Zip"
              name="zip"
              onChange={ZipCheck}
              value={values.zip || ""}
            />
            {errorTextZip}
            <br />
            <br />
            <div>
              <strong>
                By clicking on register, you are agreeing to the{" "}
                <Link to="/policy">Terrazas privacy policy</Link>
              </strong>
            </div>
            <br />
            <input type="submit" value="Register" />
          </form>
        </section>
      </main>
    </>
  );
}

export default Application;
