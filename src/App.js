import logo from "./logo.svg";
//import "./App.css";
import React, { useEffect, useState, Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./views/Login";
//import LoginAdmin from "./views/Login_Admin";

import Register from "./views/Register";
import Home from "./views/Home";
import JobList from "./views/Job-List";
import JobDetails from "./views/Job_Details";
import JobPost1 from "./views/Job_Post_1";
import JobPost2 from "./views/Job_Post_2";
import MyAlert from "./views/My_Alert";
import MyNotifications from "./views/My_Notifications";
import ResumeDetails from "./views/Resume_Details";
import CompanyList from "./views/Resume_List";
import Shortcode from "./views/Shortcode";
import TermsPrivacy from "./views/Terms_Privacy";
import About from "./views/About";
import Blog from "./views/Blog";
import BlogSinglePost from "./views/Blog_Single_Post";
import ChangePassword from "./views/Change_Password";
import CompanyPage from "./views/Company_Page";
import Contact from "./views/Contact";
import Error from "./views/Error_404";
import EmployeeProfile from "./views/Employee/Employee_Profile";
import EmployeeFollowing from "./views/Employee/Employee_Following";
import EmployeeChangePassword from "./views/Employee/Employee_Change_Password";
import EmployeeResume from "./views/Employee/Employee_Resume";
import EmployeeReviews from "./views/Employee/Employee_Reviews";
import ClientHome from "./views/ClientHome";
import ClientCompany from "./views/ClientCompany";
// Material UI
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import actionCreators from "./redux/action-creators";

//admin site

import "./mixins/chartjs";
import theme from "./theme";
import DashboardLayout from "../src/layouts/DashboardLayout";
import MainLayout from "../src/layouts/MainLayout";
import AccountView from "../src/views/account/AccountView";
import UserListView from "./views/user/UserListView";
import DashboardView from "../src/views/reports/DashboardView";
import LoginView from "../src/views/auth/LoginView";
import NotFoundView from "../src/views/errors/NotFoundView";
import CompanyListView from "../src/views/company/CompanyListView";
import RegisterView from "../src/views/auth/RegisterView";
import SettingsView from "../src/views/settings/SettingsView";
import GlobalStyles from "../src/components/GlobalStyles";
import ReviewCard from "../src/components/Company/ListReview";

const THEME = createMuiTheme({
  typography: {
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
    fontSize: 18,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

const App = () => {
  const authorizationReducer = useSelector(
    (state) => state.authorizationReducer
  );
  const dispatch = useDispatch();
  const { isAuthenticated } = authorizationReducer;
  let Token = null;

  const _getTokenFromStorage = async () => {
    const result = localStorage.getItem("token");
    if (result != null) {
      Token = result;
      dispatch(actionCreators.authorization.getUserAndVerifyToken(Token));
      return;
    }
    dispatch(actionCreators.authorization.userLogout());
  };

  const RedirectComponent = () => {
    return <Redirect to="/" />;
  };

  useEffect(() => {
    _getTokenFromStorage();
  }, [Token]);

  console.log(isAuthenticated);

  return (
    <Router>
      <Switch>
        <ThemeProvider theme={THEME}>
          <Route exact path="/" component={ClientHome} />
          <Route exact path="/client-company" component={ClientCompany} />
          <Route
            exact
            path="/login"
            component={isAuthenticated ? RedirectComponent : Login}
          />
          <Route
            exact
            path="/register"
            component={isAuthenticated ? RedirectComponent : Register}
          />
          <Route exact path="/job-list" component={JobList} />
          <Route exact path="/job-details" component={JobDetails} />
          <Route exact path="/job-post-1" component={JobPost1} />
          <Route exact path="/job-post-2" component={JobPost2} />
          <Route exact path="/my-alerts" component={MyAlert} />
          <Route exact path="/my-notifications" component={MyNotifications} />
          <Route exact path="/resume-details" component={ResumeDetails} />
          <Route exact path="/company-list" component={CompanyList} />
          <Route exact path="/shortcode" component={Shortcode} />
          <Route exact path="/terms-privacy" component={TermsPrivacy} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog-single-post" component={BlogSinglePost} />
          <Route exact path="/change-password" component={ChangePassword} />
          <Route exact path="/company-page" component={CompanyPage} />
          <Route path="/company-page/:id" component={CompanyPage} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/error-404" component={Error} />
          <Route exact path="/employee-profile" component={EmployeeProfile} />
          <Route
            exact
            path="/employee-following"
            component={EmployeeFollowing}
          />
          <Route
            exact
            path="/employee-change-password"
            component={EmployeeChangePassword}
          />
          <Route exact path="/employee-resume" component={EmployeeResume} />
          <Route exact path="/employee-reviews" component={EmployeeReviews} />
        </ThemeProvider>

        {/*  
        <Route exact path="/app-admin" component={DashboardLayout} />
        <Route exact path="/app-admin/accounts" component={AccountView} />
        <Route exact path="/app-admin/customers" component={CustomerListView} />
        <Route exact path="/app-admin/dashboard" component={DashboardView} />
        <Route exact path="/app-admin/products" component={ProductListView} />
        <Route exact path="/app-admin/settings" component={SettingsView} />
          */}
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Route
            path="/app-admin"
            render={({ match: { url } }) => (
              <>
                <Route path={`${url}/`} component={DashboardLayout} />
                <Route path={`${url}/accounts`} component={AccountView} />
                <Route path={`${url}/users`} component={UserListView} />
                <Route path={`${url}/dashboard`} component={DashboardView} />
                <Route path={`${url}/company`} component={CompanyListView} />
                <Route path={`${url}/settings`} component={SettingsView} />
              </>
            )}
          />

          <Route
            path="/admin"
            component={({ match: { url } }) => (
              <>
                <Route path={`${url}/`} component={MainLayout} />
                <Route path={`${url}/login`} component={LoginView} />
                <Route path={`${url}/register`} component={RegisterView} />
              </>
            )}
          />
        </ThemeProvider>
        {/*  
        <Route exact path="/admin" component={MainLayout} />
        <Route exact path="/admin/login" component={LoginView} />
        <Route exact path="/admin/register" component={RegisterView} />
          */}
      </Switch>
    </Router>
  );
};

export default App;
