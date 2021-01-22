import React, { Fragment, useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";


import {Card} from '@material-ui/core';


const useStyles = makeStyles(() => ({
}));


const CompanyTabView = () => {
  const classes = useStyles();

  return <Card>Content</Card>;
}


export default CompanyTabView;

/* export default HomeSearchHeader;

import React, { Fragment, useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Footer from "../components/Footer";
import Header from "../components/Header";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button'; 
import HomeSearchHeader from '../components/Home/HomeSearchHeader'

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
              Collumn 01
            </div>
            <div className="col-md-3">
              Collumn 02
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <Footer /> */
 