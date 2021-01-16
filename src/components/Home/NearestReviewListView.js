import React, { Fragment, useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  paper: {
    backgroundColor: "white",
    margin: "18px 0px",
    padding: "24px 18px",
  },
}));

const NearestReviewListView = () => {
  const classes = useStyles();

  return <div className={classes.paper}>
    <h4 className="font-bold">Review mới nhất</h4>
  </div>;
}

export default NearestReviewListView;