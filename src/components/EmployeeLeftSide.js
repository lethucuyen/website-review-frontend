import React, { Component } from "react";
import { Link } from "react-router-dom";
class EmployeeLeftSide extends React.Component {
  render() {
    return (
      <div class="col-md-3 col-sm-3">
        <div class="block-section text-center ">
          <img
            src="./assets/theme/images/people/4.jpg"
            class="img-rounded"
            alt=""
          />
          <div class="white-space-20"></div>
          <h4>Jhone Doe</h4>
          <div class="white-space-20"></div>
          <Link
            to="/employee-profile"
            class="btn btn-theme btn-t-primary btn-block"
            style={
              this.props.activeBtn == 1 ? { backgroundColor: "#20354a" } : null
            }
          >
            Details
          </Link>
          <Link
            to="/employee-change-password"
            class="btn btn-theme btn-t-primary btn-block"
            style={
              this.props.activeBtn == 2 ? { backgroundColor: "#20354a" } : null
            }
          >
            Change Password
          </Link>
          <Link
            to="/employee-following"
            class="btn btn-theme btn-t-primary btn-block"
            style={
              this.props.activeBtn == 3 ? { backgroundColor: "#20354a" } : null
            }
          >
            Following
          </Link>
          <Link
            to="/employee-reviews"
            class="btn btn-theme btn-t-primary btn-block"
            style={
              this.props.activeBtn == 4 ? { backgroundColor: "#20354a" } : null
            }
          >
            My Reviews
          </Link>
          <Link
            to="/employee-resume"
            class="btn btn-theme btn-t-primary btn-block"
            style={
              this.props.activeBtn == 5 ? { backgroundColor: "#20354a" } : null
            }
          >
            Build Resume
          </Link>
        </div>
      </div>
    );
  }
}
export default EmployeeLeftSide;
