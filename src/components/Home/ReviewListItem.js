import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuid } from "uuid";


import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Box,
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: "8px",
  },
  companyLogo: {
    position: "relative",
    padding: "4px",
    display: "inline-block",
    backgroundColor: "#fff",
    border: "1px solid #D2D2D2",
    borderRadius: "2px",
  },
  companyName: {
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
    height: "54px",
    padding: "6px 0",
  },
  starContent: {
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
  greyStar: {
    '& img': {
      backgroundColor: "#E9E9E9",
    }
  }
}));


const ReviewListItem = ({ props }) => {
  const classes = useStyles();
  const { companyAvatar, companyName, star, content, dateDesc, onClick } = props;

  return (<Card>
    <CardActionArea className={classes.root}>
      <Grid container justify="flex-start" alignItems="center" spacing={1}>
        <Grid item xs={3}>
          <CardMedia
            className={classes.companyLogo}
            component="img"
            alt="Contemplative Reptile"
            image={companyAvatar}
            title="Contemplative Reptile"
          />
        </Grid>
        <Grid className={classes.companyName} item>
          <Box component="div" className={classes.customNameBox}>
            {companyName}
          </Box>
        </Grid>
      </Grid>
      <Grid className={classes.starContent} item container>
        {[...Array(star).fill(null)].map(item => <Grid className={classes.blueStar} item key={uuid()}><img width="21" src="https://itviec.com/assets/rating-star-white-46c363f62de83d41bcb0f1aee2dc3894552879682f61bec88c7f2528e6cd4a60.svg" /></Grid>)}
        {[...Array(5 - star).fill(null)].map(item => <Grid className={classes.greyStar} item key={uuid()}><img width="21" src="https://itviec.com/assets/rating-star-white-46c363f62de83d41bcb0f1aee2dc3894552879682f61bec88c7f2528e6cd4a60.svg" /></Grid>)}
      </Grid>
      <Box component="div" className={classes.customDescBox}>
        <Typography variant="body1" component="p">
          {content}
        </Typography>
      </Box>
      <Typography variant="body2" color="textSecondary">{dateDesc}</Typography>
    </CardActionArea>
  </Card>);
}


export default ReviewListItem;