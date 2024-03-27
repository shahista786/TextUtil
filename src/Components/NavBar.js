import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
export default function NavBar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/TextForm">
                  {props.home}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/About">
                  {props.about}
                </Link>
              </li>
            </ul>
            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
              <button type="button" class="btn btn-danger" onClick={props.red}>R</button>
              <button type="button" class="btn btn-success" onClick={props.green} >G</button>
              <button type="button" class="btn btn-primary"onClick={props.blue}>B</button>
            </div>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggle} type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  home: PropTypes.string
}

// //for send/set default values
// NavBar.defaultProps={
//     title:'set title here',
//     about:'about text here'
// }
