import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import queryString from 'query-string';


import Footer from "../components/Footer";
import Header from "../components/Header";
import CompanyGeneralInfo from "../components/Company/CompanyGeneralInfo";
import CompanyTabView from "../components/Company/CompanyTabView";
import CompanyJobListView from "../components/Company/CompanyJobListView";


const useStyles = makeStyles(() => ({
}));

const ClientCompany = ({ location }) => {
  const classes = useStyles();

  useEffect(() => {
    const { id } = queryString.parse(location.search);

    console.log(id);
  }, [location.search]);

  return <div>
    <Header />
    <div className="body-content clearfix">
      <div className="bg-color2">
        <div className="container">
          <CompanyGeneralInfo />
          <div className="row">
            <div className="col-md-9">
              <CompanyTabView />
            </div>
            <div className="col-md-3">
              <CompanyJobListView />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>;
}

export default ClientCompany;