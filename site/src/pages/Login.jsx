import React from "react";
import Header from "../header";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Component } from "react";
import axios from "axios";
import { useNavigation } from "react";
import paths from "./apipath";

class Login extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      email: "",
      password: "",
      data: [],
    };
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

  onSubmit(e) {
    e.preventDefault();
    if (this.state.email.length !== 0 && this.state.password.length !== 0) {
      const obj = {
        email: this.state.email,
        password: this.state.password,
      };
      axios
        .post(paths + "/Terrazas/login.php", obj)
        .then((res) => {
          this.setState({ data: res.data });
          //this.props.history.push('/managerlogin');
        })
        .catch((error) => {
          //this.props.navigation.navigate('managerlogin');
        });
      this.setState({
        email: "",
        password: "",
      });
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
              <form>
                <fieldset>
                  <legend>Login</legend>
                  <table id="login">
                    <label>Email ID</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="abc@xyz.com"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                    />
                    <br />
                    <label>Password</label>
                    <input
                      type="text"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                    />
                    <tr>
                      <td>
                        <Link to="/resetpassword">Reset password?</Link>
                      </td>
                    </tr>
                  </table>
                </fieldset>
                <table className="">
                  <tr className="">
                    <td>
                      <button
                        className="btn btn-primary btn-lg"
                        onClick={this.onSubmit}
                      >
                        <Link to="/managerlogin">Login</Link>
                      </button>
                    </td>
                  </tr>
                </table>
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
export default Login;
