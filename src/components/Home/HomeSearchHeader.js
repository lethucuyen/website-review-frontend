import React, { Fragment, useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Container,
  Card,
} from '@material-ui/core';

import BaseSearchBox from '../../core/BaseSearchBox';

/* import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button'; */

const useStyles = makeStyles(() => ({
  card: {
    height: "256px",
    backgroundColor: "white",
    marginTop: "12px",
    paddingLeft: "54px",
    paddingRight: "54px",
    paddingTop:"8px",
  }
}));

const HomeSearchHeader = () => {
  const classes = useStyles();

  return <div>
    <Container className={classes.card} maxWidth="lg">
      <h1 className="font-bold">13,403 reviews công ty IT hàng đầu</h1>
      <h4>Review chế độ đãi ngộ, môi trường làm việc, chính sách OT… cái gì cũng có</h4>
      <BaseSearchBox/>
    </Container>
  </div>;
}

export default HomeSearchHeader;
