import React, { Fragment, useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { v4 as uuid } from "uuid";

/* import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Button, Typography} from '@material-ui/core/Button'; */
import {
  Grid,
  FormControl,
  NativeSelect,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  Divider,
} from '@material-ui/core';

import { Business, ArrowRight } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "white",
    margin: "18px 0px",
    padding: "24px 18px",
  },
  cardItem: {
    textAlign: 'center',
    padding: theme.spacing(2),
  },
  companyFooter: {
    marginTop: "8px",
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
    fontSize: '1.25rem',
  },
  reviewContent: {
    justifyContent: 'flex-start',
    alignItems: 'end',
    display: 'flex',
    fontSize: '1.25rem',
  },
  customNameBox: {
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 1,
    wordBreak: "break-all",
    overflow: "hidden"
  },
  customDescBox: {
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 2,
    wordBreak: "break-all",
    overflow: "hidden"
  },
}));

const companies = [
  { cover: "https://itviec.com/assets/missing_company-c683f605db40722efe416d3d805fa96d55c3e752810ee9813ba04aad8f09bf54.jpg", name: "Ngân Hàng Á Châu | ACB", star: 3.8, shortDescription: "Asia Commercial Bank (ACB)", city: "Hồ Chí Minh", jobs: 14, reviews: 5, rated: "Tốt nhất về Văn hoá công ty" },
  { cover: "https://itviec.com/assets/missing_company-c683f605db40722efe416d3d805fa96d55c3e752810ee9813ba04aad8f09bf54.jpg", name: "Robert Bosch Engineering And Business Solutions Headline Photo", star: 3.2, shortDescription: "The Bosch Group is a leading global supplier of technology and services", city: "Hồ Chí Minh", jobs: 12, reviews: 190, rated: "Tốt nhất về Văn phòng làm việc" },
  { cover: "https://itviec.com/assets/missing_company-c683f605db40722efe416d3d805fa96d55c3e752810ee9813ba04aad8f09bf54.jpg", avatar: "https://cdn.itviec.com/employers/axon/logo/s65/uBK6xcRCszrVB8BfkBBsmiqi/axon-logo.png", name: "AXON", star: 4.8, shortDescription: "AXON", city: "Hồ Chí Minh", jobs: 14, reviews: 5, rated: "Tốt nhất về Văn phòng làm việc" },
  { cover: "https://itviec.com/assets/missing_company-c683f605db40722efe416d3d805fa96d55c3e752810ee9813ba04aad8f09bf54.jpg", avatar: "https://cdn.itviec.com/employers/axon/logo/s65/uBK6xcRCszrVB8BfkBBsmiqi/axon-logo.png", name: "DEK Tecknologies", star: 4.8, shortDescription: "Trở thành Ngân hàng tốt nhất và doanh nghiệp hàng đầu Việt Nam", city: "Hồ Chí Minh", jobs: 12, reviews: 54, rated: "Tốt nhất về Văn hóa công ty" },
  { cover: "https://itviec.com/assets/missing_company-c683f605db40722efe416d3d805fa96d55c3e752810ee9813ba04aad8f09bf54.jpg", avatar: "https://cdn.itviec.com/employers/axon/logo/s65/uBK6xcRCszrVB8BfkBBsmiqi/axon-logo.png", name: "Tiki Corporation", star: 4.8, shortDescription: "TIKI.VN is the leading online retailer in Vietnam, offering seamless end...", city: "Hồ Chí Minh", jobs: 15, reviews: 5, rated: "Tốt nhất về Văn phòng làm việc" },
]

const CompanyListView = () => {
  const classes = useStyles();

  const handleChange = () => { };

  return <div className={classes.paper}>
    <h4 className="font-bold">Review Công Ty</h4>
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="base-line"
      spacing={3}
      className={classes.root}
    >
      <Grid item>
        <p>Sắp xếp theo</p>
      </Grid>
      <Grid item>
        <FormControl className={classes.formControl}>
          <NativeSelect
            value={1}
            onChange={handleChange}
            inputProps={{
              name: 'age',
              id: 'age-native-helper',
            }}
          >
            <option aria-label="None" value="" />
            <option value={1}>Hồ Chí Minh</option>
            <option value={2}>Hà Nội</option>
            <option value={3}>Đà Nẵng</option>
            <option value={0}>Tất cả</option>
          </NativeSelect>
        </FormControl>
      </Grid>
    </Grid>
    <Grid container spacing={2} className={classes.mainContent}>
      {companies.map(({ cover, avatar, name, shortDescription, star, city, jobs, reviews, rated }) => (
        <Grid item xs={4} key={uuid()}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={cover}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Box component="div" className={classes.customNameBox}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {name}
                  </Typography>
                </Box>
                <Box component="div" className={classes.customDescBox}>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {shortDescription}
                  </Typography>
                </Box>
                <Grid className={classes.companyFooter} container flex spacing={0}>
                  <Grid item>
                    {city}
                  </Grid>
                  <Grid item>
                    {jobs} việc làm
                  </Grid>
                  <Grid item className={classes.reviewContent}>
                        <Typography color="primary">
                          {reviews} reviews
                        </Typography>
                        <ArrowRight color="primary"/>
                    </Grid>
                  {/* <Grid item className={classes.reviewContent}>
                      <Grid container spacing={0} flex>
                        <Typography color="primary">
                          {reviews} reviews
                        </Typography>
                        <ArrowRight color="primary"/>
                    </Grid>
                  </Grid> */}
                </Grid>
              </CardContent>
            </CardActionArea>
            <Divider />
            <CardActions>
              <Business />
              <Typography variant="body2" color="textSecondary" component="p">{rated}
              </Typography>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>

  </div>;
}

export default CompanyListView;
