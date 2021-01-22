import React, { Fragment, useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";


import { Card } from '@material-ui/core';

import JobList from '../../views/Job-List';


const useStyles = makeStyles(() => ({
}));


const CompanyJobs = () => {
  const classes = useStyles();

  return (<div>
    <JobList disabled={true} />
  </div>);
}


export default CompanyJobs;