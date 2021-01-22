/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import actionCreators from "../redux/action-creators"

const Header = (props) => {
  const dispatch = useDispatch();
  const authorizationReducer = useSelector(state => state.authorizationReducer);
  const { isAuthenticated } = authorizationReducer;

  const onLogOut = () => {
    dispatch(actionCreators.authorization.userLogout());
  }

  return (
    <header class="main-header">
      {/*<!--  main navbar -->*/}
      <nav class="navbar navbar-default main-navbar hidden-sm hidden-xs">
        <div class="container">
          <div
            class="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul class="nav navbar-nav">
              <li class="">
                <Link to="job-list">
                  <strong>Find a Job</strong>
                </Link>
              </li>
              <li class="">
                <Link to="company-list">
                  <strong>Companies</strong>
                </Link>
              </li>
              <li class="">
                <Link to="job-post-1">
                  <strong>Post a Job</strong>
                </Link>
              </li>
              <li class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                >
                  Pages <span class="caret"></span>
                </a>
                <ul class="dropdown-menu" role="menu">
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
              <li class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                >
                  Features <span class="caret"></span>
                </a>
                <ul class="dropdown-menu" role="menu">
                  <li>
                    <Link to="/job-list">Find a Job</Link>
                  </li>
                  <li>
                    <Link to="job-details">Job Details</Link>
                  </li>
                  <li>
                    <Link to="company-list">Find Resumes</Link>
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
            <ul class="nav navbar-nav navbar-right">
              {!isAuthenticated &&
              <>
                <li class="link-btn">
                  <Link to="/login">
                    <span class="btn btn-theme btn-pill btn-xs btn-line">
                      Login
                    </span>
                  </Link>
                </li>
                <li class="link-btn">
                  <Link to="/register">
                    <span class="btn btn-theme  btn-pill btn-xs btn-line">
                      Register
                    </span>
                  </Link>
                </li>     
              </>}
              {isAuthenticated &&
                <>
                  <li class="dropdown">
                  <a
                    href="#"
                    class="link-profile dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <img
                      src="assets/theme/images/people/4.jpg"
                      alt=""
                      class="img-profile"
                    />{" "}
                    &nbsp; Jhon <b class="caret"></b>
                  </a>
                  <ul class="dropdown-menu" role="menu">
                    <li>
                      <Link to="my-alerts"> My Alerts </Link>
                    </li>
                    <li>
                      <Link to="my-notifications">
                        {" "}
                        Notifications <span class="badge ">5</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="change-password"> Change Password</Link>
                    </li>
                  </ul>
                </li>
                <li class="link-btn">
                  <a>
                    <button class="btn btn-theme  btn-pill btn-xs btn-line" onClick={onLogOut}>
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
      <div class="container">
        <nav class="mobile-nav hidden-md hidden-lg">
          <a href="#" class="btn-nav-toogle first">
            <span class="bars"></span>
            Menu
          </a>
          <div class="mobile-nav-block">
            <h4>Navigation</h4>
            <a href="#" class="btn-nav-toogle">
              <span class="barsclose"></span>
              Close
            </a>

            <ul class="nav navbar-nav">
              <li class="">
                <Link to="/job-list">
                  <strong>Find a Job</strong>
                </Link>
              </li>
              <li class="">
                <Link to="/company-list">
                  <strong>Find Resumes</strong>
                </Link>
              </li>
              <li class="">
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
              <li class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                >
                  Pages <span class="caret"></span>
                </a>
                <ul class="dropdown-menu" role="menu">
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
              <li class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                >
                  Features <span class="caret"></span>
                </a>
                <ul class="dropdown-menu" role="menu">
                  <li>
                    <Link to="/job-list">Find a Job</Link>
                  </li>
                  <li>
                    <Link to="/job-details">Job Details</Link>
                  </li>
                  <li>
                    <Link to="/company-list">Find Resumes</Link>
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
