import React, { Fragment, useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuid } from "uuid";


import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
} from '@material-ui/core';
import {
  LocationOn,
  People,
  DateRange,
  Schedule,
  Settings,
} from '@material-ui/icons';


const DEFAULT_COVER = "https://itviec.com/assets/missing_company-c683f605db40722efe416d3d805fa96d55c3e752810ee9813ba04aad8f09bf54.jpg";
const DEFAULT_AVATAR = "https://lh3.googleusercontent.com/proxy/YYo6Tvyey1Y2Kp_oxQqvl9FCxviXDhvhxgdCPd-XpSHVuxCGy1DKs44ZqN1QgfICmBvE7qPSaaDXNUgH-81WeTQ093SD97FGZOe04SGgyq4RF_7F49NlNamFP630x_UZ61q23-c";


const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  card: {
    backgroundColor: "white",
    marginTop: "12px",
    padding: "26px",
  },
  image: {
    width: 168,
    height: 168,

    // border
    padding: "4px",
    display: "inline-block",
    backgroundColor: "#fff",
    border: "1px solid #D2D2D2",
    borderRadius: "2px",
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  infoItem: {
    padding: "10px 0",
    justifyContent: 'flex-start',
    alignItems: 'end',
    display: 'flex',
    fontSize: '1.25rem',
    '& img': {
      backgroundColor: "#4287f5",
      padding: "4px",
      borderRadius: "2px",
      marginRight: "4px",
    }
  },
  btn: {
    width: "154px",
  }
}));


const CompanyJobListView = ({ info }) => {
  const classes = useStyles();

  return (<Container className={classes.card} maxWidth="lg">
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item>
          <Box className={classes.image}>
            <img className={classes.img} alt="complex" src={DEFAULT_AVATAR} />
          </Box>
        </Grid>
        <Grid item sm container>
          <Grid item xs container spacing={2}>
            <Grid item xs>
              <h4 className="font-bold">{info.name}</h4>
            </Grid>
            <Grid item container />
            <Grid item>
              <div className={classes.root}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Grid item container alignItems="flex-start">
                      <LocationOn />
                      <Typography variant="body2" color="textSecondary" component="p">District 12, {info.address}</Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid item container alignItems="flex-start">
                      <Settings />
                      <Typography variant="body2" color="textSecondary" component="p">Dịch vụ</Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid item container alignItems="flex-start">
                      <People />
                      <Typography variant="body2" color="textSecondary" component="p">51-150</Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid item container alignItems="flex-start">
                      <DateRange />
                      <Typography variant="body2" color="textSecondary" component="p">Thứ 2 - Thứ 6</Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid item container alignItems="flex-start">
                      <Schedule />
                      <Typography variant="body2" color="textSecondary" component="p">Không có OT</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Button className={classes.btn} variant="contained" color="primary" onClick={(e) => {
            e.preventDefault();
            // handleSubmit(formData);
          }}>Viết Reviews</Button>
          <Grid item style={{ "marginTop": "10px" }}>
            <Button className={classes.btn} variant="outlined" onClick={(e) => {
              e.preventDefault();
              // handleSubmit(formData);
            }}>Theo dõi</Button>
          </Grid>
          <Grid item style={{ "marginTop": "10px" }}>
            <Button className={classes.btn} variant="outlined" color="secondary" onClick={(e) => {
              e.preventDefault();
              // handleSubmit(formData);
            }}>Nộp đơn ứng tuyển</Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  </Container>);
}


export default CompanyJobListView;