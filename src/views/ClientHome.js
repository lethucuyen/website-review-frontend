import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";


import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeSearchHeader from '../components/Home/HomeSearchHeader'
import CompanyListView from '../components/Home/CompanyListView'
import NearestReviewListView from '../components/Home/NearestReviewListView'

import CompanyService from "../services/CompanyService";


const useStyles = makeStyles(() => ({}));


const ClientHome = () => {
  const classes = useStyles();

  const [items, setItems] = React.useState([]);

  useEffect(() => {
    retrieveCompanies();
  }, []);

  const retrieveCompanies = () => {
    CompanyService.getAll()
      .then(response => {
        setItems(response.data.listCompany || []);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const searchCompanies = (searchText) => {
    const postData = {
      "key": searchText
    };

    CompanyService.findByTitle(postData)
      .then(response => {
        setItems(response.data.result || []);
      })
      .catch(e => {
        console.log(e);
      });
  }

  const onSearch = ({ searchText }) => {
    searchCompanies(searchText);
  };

  return (<div className="wrapper">
    <Header />
    <div className="body-content clearfix">
      <div className="bg-color2">
        <div className="container">
          <HomeSearchHeader onSearch={onSearch} />
          <div className="row">
            <div className="col-md-9">
              <CompanyListView companies={items} />
            </div>
            <div className="col-md-3">
              <NearestReviewListView />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>);
}


export default ClientHome;
