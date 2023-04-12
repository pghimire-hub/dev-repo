import React from "react";
import { Link } from "react-router-dom";
function Header(props) {
  let l1 = [
    <Link to="/">Home</Link>,
    <Link to="/about">About</Link>,
    <Link to="/services">Services</Link>,
    <Link to="/contactus">Contact</Link>,
    <a href="http://bxs2890.uta.cloud/" target="_blank">
      Blog
    </a>,
    <Link to="/visitor">Visitor</Link>,
    <Link to="/loginandsignup">Login/Signup</Link>,
  ];
  let l2 = [
    <Link to="/">Home</Link>,
    <Link to="/about">About</Link>,
    <Link to="/services">Services</Link>,
    <Link to="/contactus">Contact</Link>,
    <a href="http://bxs2890.uta.cloud/" target="_blank">
      Blog
    </a>,
    <Link to="/visitor">Visitor</Link>,
  ];
  let res = [];
  console.log(["buildingmanager"].includes(props.page));

  let f = [
    "buildingmanager",
    "securitymanager",
    "gardenmanager",
    "poolmanager",
    "resident",
  ].includes(props.page)
    ? l2
    : l1;

  let count = 0;
  for (let i in f) {
    count = count + 1;
    res.push(<li>{f[i]}</li>);
    // if (count % 3 == 0) {
    //   res.push(<br></br>);
    // }
  }
  return (
    <nav>
      <ul className="topnav">{res}</ul>
    </nav>
  );
}

export default Header;
