import React from "react";
import { makeStyles } from "@material-ui/core/styles";


import {
  Container, Typography,
} from '@material-ui/core';
import HomeSearchBox from './HomeSearchBox';


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


const HomeSearchHeader = ({ onSearch }) => {
  const classes = useStyles();

  return (<div>
    <Container className={classes.card} maxWidth="lg">
      <h1 className="font-bold">13,403 reviews công ty IT hàng đầu</h1>
      <Typography variant="h5" gutterBottom color="textSecondary">Review chế độ đãi ngộ, môi trường làm việc, chính sách OT… cái gì cũng có</Typography>
      <HomeSearchBox handleSubmit={onSearch} />
    </Container>
  </div>);
}


export default HomeSearchHeader;
