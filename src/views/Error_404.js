/* eslint-disable react/style-prop-object */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
class Error404 extends React.Component {
  render() {
    return (
      <div class="wrapper">
        <Header>
          <div class="container">
            <div class="text-center logo no-margin-bottom">
              <a href="index.html">
                <img src="assets/theme/images/logo.png" alt="" />
              </a>
            </div>
            <h3 class="color-white text-center ">Page Not Found</h3>
            <div class="white-space-50"></div>
          </div>
        </Header>
        {/*<!-- body-content -->*/}
        <div class="body-content clearfix">
          <div class="block-section bg-color2">
            <div class="container">
              {/*<!-- text centered -->*/}
              <div class="text-center">
                <h1>Oops!</h1>
                <h2>
                  We can't seem to find the page you're looking for.
                  <br />
                  <small>Error code: 404</small>
                </h2>

                <p>Here are some helpful links instead:</p>
                <ul class="list-inline">
                  <li>
                    {" "}
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Find a Job</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
              {/*<!-- end text centered -->*/}

              {/*<!-- big text error -->*/}
              <div class="big-error">404</div>
              {/*<!-- end big text error -->*/}
            </div>
          </div>
        </div>
        {/*<!--end body-content -->*/}
        <Footer />
      </div>
    );
  }
}
export default Error404;
