/* eslint-disable react/style-prop-object */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Header1 from "../../components/HeaderWithIconPerson";
import EmployeeLeftSide from "../../components/EmployeeLeftSide";
let education = [
  {
    major: "",
    universityName: "",
  },
];
let project = [
  {
    name: "",
    description: "",
  },
];
let skills = [
  {
    name: "",
  },
];
class EmployeeResume extends React.Component {
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
              <EmployeeLeftSide activeBtn={5}></EmployeeLeftSide>
              <div class="col-md-9 col-sm-9">
                {/*<!-- Block side right -->*/}
                <div class="block-section box-side-account">
                  <h3 class="no-margin-top">Education</h3>
                  <hr />
                  <div class="row">
                    <div class="col-md-4 form-group ">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Major"
                        id="inputMajor"
                      />
                    </div>
                    <div class="form-group col-md-5">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter University Name"
                        id="inputUniversityName"
                      />
                    </div>
                    <div
                      class="form-group col-md-3 row"
                      style={{ marginTop: "5px" }}
                    >
                      <button
                        className="btn fa fa-minus bg-color1"
                        type="button"
                        onClick={() => {}}
                        style={{ marginInline: "15px" }}
                      ></button>
                      <button
                        className="btn fa fa-plus bg-color1"
                        type="button"
                        onClick={() => {}}
                      ></button>
                    </div>
                  </div>
                  <h3 class="no-margin-top">Projects</h3>
                  <hr />
                  <div class="row">
                    <div class="col-md-4 form-group ">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Project Name"
                        id="inputProjectName"
                      />
                    </div>
                    <div class="form-group col-md-5">
                      <textarea
                        class="form-control"
                        rows="5"
                        placeholder="Enter Descriptopm"
                        style={{ resize: "none" }}
                      ></textarea>
                    </div>
                    <div
                      class="form-group col-md-3 row"
                      style={{ marginTop: "5px" }}
                    >
                      <button
                        className="btn fa fa-minus bg-color1"
                        type="button"
                        onClick={() => {}}
                        style={{ marginInline: "15px" }}
                      ></button>
                      <button
                        className="btn fa fa-plus bg-color1"
                        type="button"
                        onClick={() => {}}
                      ></button>
                    </div>
                  </div>

                  <h3 class="no-margin-top">Skills</h3>
                  <hr />
                  <div class="row">
                    <div class="col-md-9 form-group ">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Skill"
                        id="inputSkill"
                      />
                    </div>
                    <div
                      class="form-group col-md-3 row"
                      style={{ marginTop: "5px" }}
                    >
                      <button
                        className="btn fa fa-minus bg-color1"
                        type="button"
                        onClick={() => {}}
                        style={{ marginInline: "15px" }}
                      ></button>
                      <button
                        className="btn fa fa-plus bg-color1"
                        type="button"
                        onClick={() => {}}
                      ></button>
                    </div>
                  </div>

                  <div class="form-group">
                    <button type="submit" class="btn btn-theme btn-t-primary">
                      Save Resume
                    </button>
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
export default EmployeeResume;
