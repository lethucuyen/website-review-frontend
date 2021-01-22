import React, { Component } from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Rating from "@material-ui/lab/Rating";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ReviewCard from "./ReviewCard";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { FormGroup, Input, Button, TextareaAutosize } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  clamp: {
    position: "relative",
    height: "2em",
    overflow: "hidden",
    "&:after": {
      content: '""',
      textAlign: "right",
      position: "absolute",
      bottom: 0,
      right: 0,
      width: "40%",
      height: "1.5em",
      background: `linear-gradient(to right, ${fade(
        theme.palette.background.paper,
        0
      )}, ${theme.palette.background.paper} 50%)`,
    },
  },
}));
const ListReview = () => {
  const classes = useStyles();
  return (
    <Grid item sm={12} md={6}>
      <Grid style={{ marginBottom: "30px" }}>
        <Card>
          <CardHeader
            title="Write a review"
            titleTypographyProps={{ variant: "h4" }}
          ></CardHeader>
          <CardContent>
            <FormGroup>
              <Typography component="p" className={classes.clamp}>
                Overall rating
              </Typography>
              <Rating name="simple-controlled" value={2} />
              <Typography component="p" className={classes.clamp}>
                Your review
              </Typography>
              <TextareaAutosize rowsMin={3} placeholder="Enter content" />
              <Button
                style={{
                  width: "100px",
                  marginTop: "10px",
                }}
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </FormGroup>
          </CardContent>{" "}
        </Card>
      </Grid>
      <span className="flexSpacer" />
      <Grid>
        <ReviewCard
          reviewerName="Shrimp and Chorizo Paella"
          createDate="Yesterday"
          avatar={
            <Avatar aria-label="Post" style={{ backgroundColor: "red" }}>
              R
            </Avatar>
          }
          rating={3}
          content="Phileas Fogg and Aouda went on board, where they found Fix already installed. Below deck was a square cabin, of which the walls bulged out in the form of cots, above a circular divan; in the centre was a table provided with a swinging lamp."
        />
      </Grid>
    </Grid>
  );
};
export default ListReview;
