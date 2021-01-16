/* eslint-disable react/style-prop-object */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Header1 from "../../components/HeaderWithIconPerson";
import EmployeeLeftSide from "../../components/EmployeeLeftSide";
class EmployeeFollowing extends React.Component {
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
              <EmployeeLeftSide activeBtn={3}></EmployeeLeftSide>
              <div class="col-md-9 col-sm-9">
                <div class="block-section box-side-account">
                  <h3 class="no-margin-top">Following Companies</h3>
                  <hr />
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Company Name</th>
                          <th>Location</th>
                          <th class="text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Php Developer</td>
                          <td>United States</td>
                          <td class="text-right">
                            <a
                              href="#"
                              class="btn btn-theme btn-xs btn-default"
                            >
                              Unfollow
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Web Design</td>
                          <td>United States</td>
                          <td class="text-right">
                            <a
                              href="#"
                              class="btn btn-theme btn-xs btn-default"
                            >
                              Unfollow
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>SEO Analytics</td>
                          <td>United States</td>
                          <td class="text-right">
                            <a
                              href="#"
                              class="btn btn-theme btn-xs btn-default"
                            >
                              Unfollow
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>Project Manager</td>
                          <td>United States</td>
                          <td class="text-right">
                            <a
                              href="#"
                              class="btn btn-theme btn-xs btn-default"
                            >
                              Unfollow
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td>Ruby on Rails</td>
                          <td>United States</td>
                          <td class="text-right">
                            <a
                              href="#"
                              class="btn btn-theme btn-xs btn-default"
                            >
                              Unfollow
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/*<!-- pagination -->*/}
                  <nav>
                    <ul class="pagination pagination-theme  ">
                      <li>
                        <a href="#" aria-label="Previous">
                          <span aria-hidden="true">&larr;</span>
                        </a>
                      </li>
                      <li class="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#" aria-label="Next">
                          <span aria-hidden="true">&rarr;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  {/*<!-- pagination -->*/}
                </div>
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
export default EmployeeFollowing;
