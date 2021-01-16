import React, { Fragment, useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Footer from "../components/Footer";
import Header from "../components/Header";


import HomeSearchHeader from '../components/Home/HomeSearchHeader'
import CompanyListView from '../components/Home/CompanyListView'
import NearestReviewListView from '../components/Home/NearestReviewListView'

const useStyles = makeStyles(() => ({
  card: {
    minHeight: 500,
  },

}));

const ClientHome = () => {
  const classes = useStyles();
  return <div className="wrapper">
    <Header />
    <div className="body-content clearfix">
      <div className="bg-color2">
        <div className="container">
          <HomeSearchHeader />
          <div className="row">
            <div className="col-md-9">
              <CompanyListView/>
            </div>
            <div className="col-md-3">
              <NearestReviewListView/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>;
}

export default ClientHome;
