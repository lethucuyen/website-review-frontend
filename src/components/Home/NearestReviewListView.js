import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuid } from "uuid";
// import { useHistory } from "react-router-dom";


import {
  Grid,
} from '@material-ui/core';


import ReviewListItem from "./ReviewListItem";


const reviews = [
  {companyAvatar: "https://cdn.itviec.com/employers/ntt-data-vietnam/logo/s65/PdFDPBYtU2jHNc3mX6bJusGc/ntt-data-vietnam-logo.jpg", companyName: "NTT Data Vietnam", star: 1, content: "PM già cỗi ko đủ chuyên môn. Đặc biệt 1 PM nữ...", dateDesc: "3 ngày trước"},
  {companyAvatar: "https://cdn.itviec.com/employers/groove-technology/logo/s65/o8KT5UwdsQUS4P1DHxxqckZV/groove-technology-logo.png", companyName: "Groove Technology", star: 4, content: "Đồng nghiệp support khi cần. Free coffee, ps4. Nhiều event để mọi...", dateDesc: "3 ngày trước"},
  {companyAvatar: "https://cdn.itviec.com/employers/zalo/logo/s65/3LCycUB7awD7KLYUor3dgJWq/zalocareers_blue_2.png", companyName: "Zalo", star: 4, content: "Lương cao, đồng nghiệp giỏi, sếp dễ thương. Được cấp macbook", dateDesc: "3 ngày trước"},
  {companyAvatar: "https://cdn.itviec.com/employers/robust-tech-house/logo/s65/q5AypbF5mZSmBmXipRWLJMYG/robust-tech-house-logo.png", companyName: "Robust Tech House", star: 3, content: "Nhiều hoạt động hay ho cho nhân viên, bonus hậu hĩnh", dateDesc: "3 ngày trước"},
];


const useStyles = makeStyles(() => ({
  paper: {
    backgroundColor: "white",
    margin: "18px 0px",
    padding: "24px 18px",
  },
}));


const NearestReviewListView = () => {
  const classes = useStyles();
  // const history = useHistory();

  const goToReview = () => {
    const win = window.open("/client-company", "_blank");
    win.focus();
    // history.push('/nha-tuyen-dung?id=id');
  };

  return (<div className={classes.paper}>
    <h4 className="font-bold">Review liên quan</h4>
    <Grid container spacing={2} className={classes.mainContent}>
      {reviews.map((item) => (
        <Grid item xs={12} key={uuid()}>
          <ReviewListItem props={{ ...item, onClick: goToReview }} />
        </Grid>
      ))}
    </Grid>
  </div>);
}


export default NearestReviewListView;