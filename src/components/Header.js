/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import authorizationActions from "../redux/actions/authorizationActions"

const Header = (props) => {
  const dispatch = useDispatch();
  const authorizationReducer = useSelector(state => state.authorizationReducer);
  const { isAuthenticated } = authorizationReducer;

  const onLogOut = () => {
    dispatch(authorizationActions.logOut(false));
  }



  return (
    <header className="main-header">
      {/*<!--  main navbar -->*/}
      <nav className="navbar navbar-default main-navbar hidden-sm hidden-xs">
        <div className="container">
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav">
              <li className="">
                <Link to="job-list">
                  <strong>Find a Job</strong>
                </Link>
              </li>
              <li className="">
                <Link to="resume-list">
                  <strong>Find Resumes</strong>
                </Link>
              </li>
              <li className="">
                <Link to="job-post-1">
                  <strong>Post a Job</strong>
                </Link>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                >
                  Pages <span className="caret"></span>
                </a>
                <ul className="dropdown-menu" role="menu">
                  <li>
                    <Link to="about">About Us</Link>
                  </li>
                  <li>
                    <Link to="contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="blog">Articles &amp; Blog</Link>
                  </li>
                  <li>
                    <Link to="/terms-privacy">Terms &amp; Privacy</Link>
                  </li>
                  <li>
                    <Link to="error-404">Error 404</Link>
                  </li>
                  <li>
                    <Link to="shortcode">Short Code</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                >
                  Features <span className="caret"></span>
                </a>
                <ul className="dropdown-menu" role="menu">
                  <li>
                    <Link to="/job-list">Find a Job</Link>
                  </li>
                  <li>
                    <Link to="job-details">Job Details</Link>
                  </li>
                  <li>
                    <Link to="resume-list">Find Resumes</Link>
                  </li>
                  <li>
                    <Link to="resume-details">Resume Details</Link>
                  </li>
                  <li>
                    <Link to="job-post-2">Post a Job</Link>
                  </li>
                  <li>
                    <Link to="company-page">Company Profile</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {!isAuthenticated &&
              <>
                <li className="link-btn">
                  <Link to="/login">
                    <span className="btn btn-theme btn-pill btn-xs btn-line">
                      Login
                    </span>
                  </Link>
                </li>
                <li className="link-btn">
                  <Link to="/register">
                    <span className="btn btn-theme  btn-pill btn-xs btn-line">
                      Register
                    </span>
                  </Link>
                </li>     
              </>}
              {isAuthenticated &&
                <>
                  <li className="dropdown">
                  <a
                    href="#"
                    className="link-profile dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <img
                      src="assets/theme/images/people/4.jpg"
                      alt=""
                      className="img-profile"
                    />{" "}
                    &nbsp; Jhon <b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li>
                      <Link to="my-alerts"> My Alerts </Link>
                    </li>
                    <li>
                      <Link to="my-notifications">
                        {" "}
                        Notifications <span className="badge ">5</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="change-password"> Change Password</Link>
                    </li>
                  </ul>
                </li>
                <li className="link-btn">
                  <a>
                    <button className="btn btn-theme  btn-pill btn-xs btn-line" onClick={onLogOut}>
                      Logout
                    </button>
                  </a>
                </li>
              </>}
            </ul>
          </div>
        </div>
      </nav>
      {/*<!--  end main navbar -->*/}

      {/*<!--  mobile navbar -->*/}
      <div className="container">
        <nav className="mobile-nav hidden-md hidden-lg">
          <a href="#" className="btn-nav-toogle first">
            <span className="bars"></span>
            Menu
          </a>
          <div className="mobile-nav-block">
            <h4>Navigation</h4>
            <a href="#" className="btn-nav-toogle">
              <span className="barsclose"></span>
              Close
            </a>

            <ul className="nav navbar-nav">
              <li className="">
                <Link to="/job-list">
                  <strong>Find a Job</strong>
                </Link>
              </li>
              <li className="">
                <Link to="/resume-list">
                  <strong>Find Resumes</strong>
                </Link>
              </li>
              <li className="">
                <Link to="/job-post-1">
                  <strong>Post a Job</strong>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <strong>Login</strong>
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <strong>Register</strong>
                </Link>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                >
                  Pages <span className="caret"></span>
                </a>
                <ul className="dropdown-menu" role="menu">
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/blog">Articles &amp; Blog</Link>
                  </li>
                  <li>
                    <Link to="/terms-privacy">Terms &amp; Privacy</Link>
                  </li>
                  <li>
                    <Link to="/error-404">Error 404</Link>
                  </li>
                  <li>
                    <Link to="/shortcode">Short Code</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                >
                  Features <span className="caret"></span>
                </a>
                <ul className="dropdown-menu" role="menu">
                  <li>
                    <Link to="/job-list">Find a Job</Link>
                  </li>
                  <li>
                    <Link to="/job-details">Job Details</Link>
                  </li>
                  <li>
                    <Link to="/resume-list">Find Resumes</Link>
                  </li>
                  <li>
                    <Link to="/resume-details">Resume Details</Link>
                  </li>
                  <li>
                    <Link to="/job-post-2">Post a Job</Link>
                  </li>
                  <li>
                    <Link to="/company-page">Company Profile</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/*<!--  mobile navbar -->*/}
      {props.children}
    </header>
  );
}
export default Header;
