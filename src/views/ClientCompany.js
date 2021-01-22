import React from "react";
import { makeStyles } from "@material-ui/core/styles";


import Footer from "../components/Footer";
import Header from "../components/Header";


const useStyles = makeStyles(() => ({
}));

const ClientCompany = () => {
  const classes = useStyles();

  return <div>
    <Header />
    
    <Footer />
  </div>;
}

export default ClientCompany;