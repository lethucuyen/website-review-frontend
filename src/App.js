import logo from "./logo.svg";
//import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./views/Login";
//import LoginAdmin from "./views/Login_Admin";
import LoginView from "./views/auth/LoginView";
import Register from "./views/Register";
import Home from "./views/Home";
import JobList from "./views/Job-List";
import JobDetails from "./views/Job_Details";
import JobPost1 from "./views/Job_Post_1";
import JobPost2 from "./views/Job_Post_2";
import MyAlert from "./views/My_Alert";
import MyNotifications from "./views/My_Notifications";
import ResumeDetails from "./views/Resume_Details";
import ResumeList from "./views/Resume_List";
import Shortcode from "./views/Shortcode";
import TermsPrivacy from "./views/Terms_Privacy";
import About from "./views/About";
import Blog from "./views/Blog";
import BlogSinglePost from "./views/Blog_Single_Post";
import ChangePassword from "./views/Change_Password";
import CompanyPage from "./views/Company_Page";
import Contact from "./views/Contact";
import Error from "./views/Error_404";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        {/* <Route exact path="/login-admin" component={LoginAdmin} /> */}
        <Route exact path="/login-admin" component={LoginView} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/job-list" component={JobList} />
        <Route exact path="/job-details" component={JobDetails} />
        <Route exact path="/job-post-1" component={JobPost1} />
        <Route exact path="/job-post-2" component={JobPost2} />
        <Route exact path="/my-alert" component={MyAlert} />
        <Route exact path="/my-notifications" component={MyNotifications} />
        <Route exact path="/resume-details" component={ResumeDetails} />
        <Route exact path="/resume-list" component={ResumeList} />
        <Route exact path="/shortcode" component={Shortcode} />
        <Route exact path="/terms-privacy" component={TermsPrivacy} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog-single-post" component={BlogSinglePost} />
        <Route exact path="/change-password" component={ChangePassword} />
        <Route exact path="/company-page" component={CompanyPage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/error-404" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
