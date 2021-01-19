import React from "react";
import { makeStyles } from "@material-ui/core/styles";


import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Typography,
  Box,
  Divider,
} from '@material-ui/core';
import { Business, ArrowRight } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  root: {},
  companyHeader: {
    padding: "0 12px",
  },
  companyLogo: {
    position: "relative",
    top: "-12px",
    padding: "4px",
    display: "inline-block",
    backgroundColor: "#fff",
    border: "1px solid #D2D2D2",
    borderRadius: "2px",
  },
  companyName: {
    maxWidth: "40%",
    display: "inline-block",
    position: "relative",
    top: "5px",
    alignContent: "start",
  },
  customNameBox: {
    fontSize: "15px",
    fontWeight: "500",
    padding: "0 5px",
    lineHeight: "1.5em",
    height: "3em",
    // overflow
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 2,
    wordBreak: "break-all",
    overflow: "hidden",
  },
  customDescBox: {
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 2,
    wordBreak: "break-all",
    overflow: "hidden",
    padding: "0 12px",
    height: "35px",
  },
  companyFooter: {
    marginTop: "8px",
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
    fontSize: '1.1rem',
    padding: "0 12px",
    bottom: "0",
    // spacing: theme.spacing(1),
  },
  reviewContent: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    display: 'flex',
    fontSize: '1.1rem',
    color: "#4287f5",
  },
  starContent: {
    width: "20%",
    justifyContent: 'flex-end',
    alignItems: 'end',
    display: 'flex',
    fontSize: '1.25rem',
    '& img': {
      backgroundColor: "#4287f5",
      padding: "4px",
      borderRadius: "2px",
    }
  },
}));


const CompanyListItem = ({ props }) => {
  const classes = useStyles();
  const { cover, avatar, name, shortDescription, star, city, jobs, reviews, rated, onClick } = props;

  return (<Card className={classes.root}>
    <Grid container direction="column" justify="flex-end">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={cover}
            title="Contemplative Reptile"
          />
          <Grid className={classes.companyHeader} container justify="space-between" alignItems="center">
            <Grid item xs={3}>
              <CardMedia
                className={classes.companyLogo}
                component="img"
                alt="Contemplative Reptile"
                image={avatar}
                title="Contemplative Reptile"
              />
            </Grid>
            <Grid className={classes.companyName} item>
              <Box component="div" className={classes.customNameBox}>
                {name}
              </Box>
            </Grid>
            <Grid className={classes.starContent} xs={3} item container alignItems="flex-end">
              <Grid item style={{ padding: "0 4px" }}>
                <img width="21" src="https://itviec.com/assets/rating-star-white-46c363f62de83d41bcb0f1aee2dc3894552879682f61bec88c7f2528e6cd4a60.svg" />
              </Grid>
              <Typography gutterBottom variant="h6">{star}</Typography>
            </Grid>
          </Grid>
          <Box component="div" className={classes.customDescBox}>
            <Typography variant="body2" color="textSecondary" component="p">
              {shortDescription}
            </Typography>
          </Box>
          <Grid className={classes.companyFooter} container>
            {city}
            <Grid item>{jobs} việc làm</Grid>
            <Grid item xs={4} className={classes.reviewContent}>
              {reviews} reviews
              <ArrowRight />
            </Grid>
          </Grid>
        </CardActionArea>
        <Divider />
        <CardActions>
          <Business />
          <Typography variant="body2" color="textSecondary" component="p">{rated}
          </Typography>
        </CardActions>
      </Card>
    </Grid>
  </Card>);
}


export default CompanyListItem;