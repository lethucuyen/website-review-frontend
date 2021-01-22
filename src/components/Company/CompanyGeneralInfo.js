import React, { Fragment, useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";


import {
  Container,
} from '@material-ui/core';


const useStyles = makeStyles(() => ({
  card: {
    height: "256px",
    backgroundColor: "white",
    marginTop: "12px",
    paddingLeft: "54px",
    paddingRight: "54px",
    paddingTop: "8px",
  }
}));


const CompanyJobListView = () => {
  const classes = useStyles();

  return (<Container className={classes.card} maxWidth="lg">
    
  </Container>);
}


export default CompanyJobListView;