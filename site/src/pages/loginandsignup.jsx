import React from "react";
import Header from "../header";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Component } from "react";
import axios from "axios";
import paths from "./apipath";

class Loginandsignup extends Component {
  constructor(props) {
    super(props);
    this.onChangeUserType = this.onChangeUserType.bind(this);
    this.onChangeDateofBirth = this.onChangeDateofBirth.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeZip = this.onChangeZip.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      usertype: "",
      dateofbirth: "",
      name: "",
      address: "",
      email: "",
      password: "",
      zip: "",
    };
  }

  onChangeUserType(e) {
    this.setState({
      usertype: e.target.value,
    });
  }
  onChangeDateofBirth(e) {
    this.setState({
      dateofbirth: e.target.value,
    });
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onChangeZip(e) {
    this.setState({
      zip: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    if (
      this.state.usertype.length !== 0 &&
      this.state.dateofbirth.length !== 0 &&
      this.state.name.length !== 0 &&
      this.state.address.length !== 0 &&
      this.state.email.length !== 0 &&
      this.state.password.length !== 0 &&
      this.state.zip.length !== 0
    ) {
      const obj = {
        usertype: this.state.usertype,
        dateofbirth: this.state.dateofbirth,
        name: this.state.name,
        address: this.state.address,
        email: this.state.email,
        password: this.state.password,
        zip: this.state.zip,
      };
      axios
        .post(paths + "/Terrazas/insert.php", obj)
        .then((res) => console.log(res.data))
        .catch((error) => {
          console.log(error.response);
        });
      this.setState({
        usertype: "",
        dateofbirth: "",
        name: "",
        address: "",
        email: "",
        password: "",
        zip: "",
      });
      alert("Registration Successful");
    } else {
      alert("All fields are required");
    }
  }

  render() {
    return (
      <>
        <Header page="login" />
        <main>
          <section className="glass">
            <div id="formheading">
              <h1>Login/SignUp</h1>
            </div>
            <article id="vehicleregistration">
              <form action="/loginandsignup">
                <fieldset>
                  <legend>Sign Up</legend>
                  <div stytle="overflow-x:auto;">
                    <table id="signup">
                      <tr>
                        <input
                          type="radio"
                          value="resident"
                          name="usertype"
                          onChange={this.onChangeUserType}
                        />
                        Resident
                        <input
                          type="radio"
                          value="visitor"
                          name="usertype"
                          onChange={this.onChangeUserType}
                        />
                        Visitor
                        <input
                          type="radio"
                          value="manager"
                          name="usertype"
                          onChange={this.onChangeUserType}
                        />
                        Manager
                      </tr>
                      <td>
                        <label for="dateofbirth">Date of Birth</label>
                        <input
                          type="date"
                          id="dateofbirth"
                          value={this.state.dateofbirth}
                          onChange={this.onChangeDateofBirth}
                          required
                        />
                      </td>
                      <tr>
                        <td>Name</td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            id="name"
                            placeholder="Full Name"
                            value={this.state.name}
                            onChange={this.onChangeName}
                            required
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Address</td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            id="address"
                            placeholder="Full Address"
                            value={this.state.address}
                            onChange={this.onChangeAddress}
                            required
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Email</td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            id="email"
                            placeholder="abc@xyz.com"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                            required
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Password</td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            required
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Zip</td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            placeholder="Zip"
                            id="zip"
                            value={this.state.zip}
                            onChange={this.onChangeZip}
                            required
                          />
                        </td>
                      </tr>
                    </table>
                  </div>
                </fieldset>
                <table className="visitingbuilding">
                  <tr className="visitingbuildingtr">
                    <td>
                      <input
                        type="submit"
                        value="SignUp"
                        onClick={this.onSubmit}
                      />
                    </td>
                  </tr>
                </table>
                <tr>
                  <td>
                    <Link to="/Login">Already have account?</Link>
                  </td>
                </tr>
              </form>
            </article>
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
}
export default Loginandsignup;
