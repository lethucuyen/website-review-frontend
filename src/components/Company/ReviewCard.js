import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import FlagIcon from "@material-ui/icons/Flag";
import PropTypes from "prop-types";
import React from "react";
import ShareIcon from "@material-ui/icons/Share";
import Typography from "@material-ui/core/Typography";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
  },
  clamp: {
    position: "relative",
    height: "4.5em",
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

const PostCard = ({ reviewerName, createDate, content, avatar, rating }) => {
  const [value, setValue] = React.useState(2);
  const classes = useStyles();
  return (
    <Card style={{ border: "solid 0.1px" }}>
      <CardHeader
        avatar={avatar}
        title={reviewerName}
        subheader={createDate}
        titleTypographyProps={{ variant: "h5" }}
      ></CardHeader>
      <CardContent>
        <Typography component="p" className={classes.clamp}>
          {content}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions} disableSpacing>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Grid
          item
          xs={4}
          style={{
            justifyContent: "flex-end",
            display: "flex",
          }}
        >
          <Button>
            <FlagIcon />
            Report
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
};

PostCard.propTypes = {
  createDate: PropTypes.string,
  createDate: PropTypes.string,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number,
  avatar: PropTypes.element,
};

export default PostCard;
