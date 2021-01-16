/* eslint-disable react/style-prop-object */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Header1 from "../../components/HeaderWithIconPerson";
import EmployeeLeftSide from "../../components/EmployeeLeftSide";
class EmployeeChangePassword extends React.Component {
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
              <EmployeeLeftSide activeBtn={2}></EmployeeLeftSide>
              <div class="col-md-9 col-sm-9">
                {/*<!-- Block side right -->*/}
                <div class="block-section box-side-account">
                  <h3 class="no-margin-top">Change Password</h3>
                  <hr />
                  <div class="row">
                    <div class="col-md-7">
                      <form>
                        <div class="form-group">
                          <label>Old Password</label>
                          <input type="password" class="form-control" />
                        </div>
                        <div class="form-group">
                          <label>New Password</label>
                          <input type="password" class="form-control" />
                        </div>
                        <div class="form-group">
                          <label>Re-type New Password</label>
                          <input type="password" class="form-control" />
                        </div>
                        <div class="form-group">
                          <button
                            type="submit"
                            class="btn btn-theme btn-t-primary"
                          >
                            Change Password
                          </button>
                        </div>
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
export default EmployeeChangePassword;
