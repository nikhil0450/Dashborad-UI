import React from "react";
import "./navbar.css";


export default function Navbar(props) {
  return (<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <p className="navbar-brand" >Medico Sales</p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <p className="nav-link active" aria-current="page" >Dashboard</p>
        </li>
        <li className="nav-item">
          <p className="nav-link" >Lab Test</p>
        </li>
        <li className="nav-item">
          <p className="nav-link" >Appointment</p>
        </li>
        <li className="nav-item">
          <p className="nav-link" >Medicine Order</p>
        </li>
        <li className="nav-item">
          <p className="nav-link" >Message</p>
        </li>
        <li className="nav-item">
          <p className="nav-link" >Payment</p>
        </li>
        <li className="nav-item">
          <p className="nav-link" >Settings</p>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
  );
}

