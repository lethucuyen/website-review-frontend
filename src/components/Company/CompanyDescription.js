import React, { Fragment, useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";


import {
  Box,
  Grid,
} from '@material-ui/core';

const DEFAULT_COVER_1 = "https://cdn.itviec.com/photos/44916/jd_photo_thumbnail/jd_photo_thumbnail-1537893.jpg?oRtdYdGRBXhT3PYEyjZYJ7nd";
const DEFAULT_COVER_2 = "https://cdn.itviec.com/photos/44917/jd_photo_thumbnail/jd_photo_thumbnail-1536328.jpg?XJ4Y1XhuFmB6YYB5AHVQG7xC";
const DEFAULT_COVER_3 = "https://cdn.itviec.com/photos/49334/jd_photo_thumbnail/jd_photo_thumbnail-1793320.jpg?6SmhXg8sfyua2maBvee8JiX4";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: "24px",
  },
  image: {
    // width: 368,
    // height: 368,

    // border
    // padding: "4px",
    display: "inline-block",
    backgroundColor: "#fff",
    // border: "1px solid #D2D2D2",
    // borderRadius: "2px",
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));


const CompanyDescription = ({ info }) => {
  const classes = useStyles();

  return (<div>

    <div className={classes.root}>
      <p>{info.description}</p>
      <br />
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Box className={classes.image}>
            <img className={classes.img} alt="complex" src={DEFAULT_COVER_1} />
          </Box>
        </Grid>
        <Grid item item xs={4}>
          <Box className={classes.image}>
            <img className={classes.img} alt="complex" src={DEFAULT_COVER_2} />
          </Box>
        </Grid>
        <Grid item item xs={4}>
          <Box className={classes.image}>
            <img className={classes.img} alt="complex" src={DEFAULT_COVER_3} />
          </Box>
        </Grid>
      </Grid>
    </div>
    <p>Thông tin về {info.name}</p>

    <p>
      {info.name} được thành lập vào năm 2016 và là thành viên của Tập đoàn bảo hiểm FWD - có phạm vi hoạt động rộng khắp Châu Á. Với chiến lược ưu tiên phát triển công nghệ số, {info.name} là công ty bảo hiểm khác biệt, có nền tảng vững chắc dựa trên các thế mạnh riêng có: sản phẩm đột phá, hệ thống phân phối tập trung vào chất lượng, số hóa mọi quy trình và chiến lược thương hiệu khác biệt.
    </p>
    <p>
      {info.name} liên tục là một trong những công ty bảo hiểm nhân thọ có tốc độ tăng trưởng nhanh nhất thị trường.
    </p>
    <p>Để biết thêm thông tin, vui lòng truy cập website www.fwd.com.vn.</p>



    <p>Thông tin về Tập đoàn bảo hiểm FWD</p>

    <p>
      FWD là tập đoàn bảo hiểm có hoạt động kinh doanh tại Hồng Kông, Ma Cao, Thái Lan, Indonesia, Philippines, Singapore, Việt Nam, Nhật Bản và Malaysia. FWD cung cấp sản phẩm bảo hiểm nhân thọ, bảo hiểm sức khỏe, bảo hiểm phi nhân thọ, bảo hiểm trợ cấp người lao động và dòng sản phẩm Takaful theo luật Shariah.
    </p>
    <p>
      FWD mang đến cho khách hàng những trải nghiệm mới mẻ, sản phẩm đơn giản và dễ hiểu thông qua ứng dụng công nghệ số thông minh. Với phương châm lấy khách hàng làm trọng tâm, FWD đang từng bước thực hiện sứ mệnh trở thành tập đoàn bảo hiểm hàng đầu châu Á với tầm nhìn thay đổi cảm nhận của mọi người về bảo hiểm.
    </p>
    <p>
      Được thành lập năm 2013, FWD là tập đoàn bảo hiểm trực thuộc tập đoàn đầu tư Pacific Century Group.
    </p>
    <p>
      Để biết thêm thông tin, vui lòng truy cập website www.fwd.com.
    </p>
    <p>About FWD Vietnam</p>

    <p>
      FWD Vietnam was established in 2016 and is a member of FWD Group, a leading Asian-pan life insurer. With the priority strategy on digital development, FWD Vietnam is a differentiated insurance company, with a solid foundation based on its own strengths: breakthrough products; high quality distribution channels; digitized business processes and differentiate branding strategies.
      FWD Vietnam is consistently recognized as one of the fastest-growing life insurance companies in the market.
    </p>

    <p>About FWD Group</p>

    <p>
      FWD Group spans Hong Kong & Macau, Thailand, Indonesia, the Philippines, Singapore, Vietnam, Japan and Malaysia, offering life and medical insurance, general insurance, employee benefits, Shariah and Family Takaful products across a number of its markets.
    </p>
    <p>
      FWD is focused on creating fresh customer experiences, with easy-to-understand products, supported by digital technology. Through this customer-led approach, FWD aims to become a leading pan-Asian insurer that changes the way people feel about insurance.
    </p>
    <p>
      Established in Asia in 2013, FWD is the insurance business of investment group, Pacific Century Group.
    </p>
    <p>
      For more information please visit www.fwd.com
    </p>
  </div>);
}


export default CompanyDescription;