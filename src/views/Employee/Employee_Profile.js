/* eslint-disable react/style-prop-object */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Header1 from "../../components/HeaderWithIconPerson";
import EmployeeLeftSide from "../../components/EmployeeLeftSide";
class EmployeeDetails extends React.Component {
  render() {
    return (
      <div class="wrapper">
        <Header1>
          <div class="container">
            <div class="text-center logo">
              <a href="index.html">
                <img src="assets/theme/images/logo.png" alt="" />
              </a>
            </div>
          </div>
        </Header1>

        {/*<!-- body-content -->*/}
        <div class="body-content clearfix">
          <div class="bg-color2">
            <div class="container">
              <EmployeeLeftSide activeBtn={1}></EmployeeLeftSide>
              <div class="col-md-9 col-sm-9">
                {/*<!-- Block side right -->*/}
                <div class="block-section box-side-account">
                  <h3 class="no-margin-top">Information</h3>
                  <hr />
                  <div class="row">
                    <div class="col-md-7">
                      <form>
                        <div class="form-group">
                          <label for="inputEmail">Email address</label>
                          <input
                            type="email"
                            name="email"
                            value=""
                            class="form-control"
                            id="inputEmail"
                            placeholder="Email"
                            readOnly
                          />
                        </div>
                        <div class="form-group">
                          <label for="inputUsername">Username</label>
                          <input
                            type="text"
                            name="username"
                            class="form-control"
                            id="inputUsername"
                            placeholder="Username"
                            readOnly
                          />
                        </div>
                        <div class="form-group">
                          <label for="inputFullName">Full Name</label>
                          <input
                            type="text"
                            name="fullname"
                            class="form-control"
                            id="inputFullName"
                            placeholder="Enter Full Name"
                          />
                        </div>
                        <div class="form-group">
                          <label for="inputPhoneNumber">Phone</label>
                          <input
                            type="text"
                            name="phonenumber"
                            class="form-control"
                            id="inputPhoneNumber"
                            placeholder="Enter Phone Number"
                          />
                        </div>

                        <button
                          type="submit"
                          class="btn btn-theme btn-t-primary"
                          style={{}}
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          Save Profile
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                {/*<!-- end Block side right -->*/}
              </div>
            </div>
          </div>
        </div>
        {/*<!--end body-content -->*/}
        <Footer />
      </div>
    );
  }
}
export default EmployeeDetails;
