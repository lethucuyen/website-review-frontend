import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuid } from "uuid";
import _clone from 'lodash/clone'
// import _clone from 'lodash/cloneDeep'


import {
  Grid,
} from '@material-ui/core';
import BaseSelect from "../../common/BaseSelect";


import CompanyListItem from "./CompanyListItem";


const DEFAULT_COVER = "https://itviec.com/assets/missing_company-c683f605db40722efe416d3d805fa96d55c3e752810ee9813ba04aad8f09bf54.jpg";
const DEFAULT_AVATAR = "https://lh3.googleusercontent.com/proxy/YYo6Tvyey1Y2Kp_oxQqvl9FCxviXDhvhxgdCPd-XpSHVuxCGy1DKs44ZqN1QgfICmBvE7qPSaaDXNUgH-81WeTQ093SD97FGZOe04SGgyq4RF_7F49NlNamFP630x_UZ61q23-c";
const data = [
  { cover: "https://cdn.itviec.com/photos/42552/small_headline_photo/ngan-hang-a-chau-acb-tuyen-dung-viec-lam-IT-small_headline_photo-1512551.jpg?ixbTfDnASdmWXhshZ7X2nKA6", avatar: "https://cdn.itviec.com/employers/ngan-hang-a-chau-acb/logo/s65/6LFBUDFvDZAAZ9pEF9nq4B89/download.png", name: "Ngân Hàng Á Châu | ACB", star: 3.8, shortDescription: "Asia Commercial Bank (ACB)", city: "Hồ Chí Minh", jobs: 14, reviews: 5, rated: "Tốt nhất về Văn hoá công ty" },
  { cover: "https://cdn.itviec.com/photos/44921/small_headline_photo/robert-bosch-engineering-and-business-solutions-tuyen-dung-viec-lam-IT-small_headline_photo-1512177.jpg?R6i2AxPUYBGaBMcwayPSPVzm", avatar: "https://cdn.itviec.com/employers/robert-bosch-engineering-and-business-solutions/logo/s65/ZzW1myNnUVsoAuRfMz4yNYqx/robert-bosch-engineering-and-business-solutions-logo.jpg", name: "Robert Bosch Engineering And Business Solutions Headline Photo", star: 3.2, shortDescription: "The Bosch Group is a leading global supplier of technology and services", city: "Hồ Chí Minh", jobs: 12, reviews: 190, rated: "Tốt nhất về Văn phòng làm việc" },
  { cover: "https://cdn.itviec.com/photos/49332/small_headline_photo/axon-tuyen-dung-viec-lam-IT-small_headline_photo-1793307.png?DESZNWchq9Py6SPGyY6PzV8d", avatar: "https://cdn.itviec.com/employers/axon/logo/s65/uBK6xcRCszrVB8BfkBBsmiqi/axon-logo.png", name: "AXON", star: 4.8, shortDescription: "AXON", city: "Hồ Chí Minh", jobs: 14, reviews: 5, rated: "Tốt nhất về Văn phòng làm việc" },
  { cover: "https://cdn.itviec.com/photos/44334/small_headline_photo/restaff-tuyen-dung-viec-lam-IT-small_headline_photo-1512762.jpg?oan7iJWZ9HCcszUQHv3CdG54", avatar: "https://cdn.itviec.com/employers/dek-technologies/logo/s65/e2ZfGH9EqNcBbcQ7nKUpvkEb/dek-technologies-logo.png", name: "DEK Tecknologies", star: 4.8, shortDescription: "Trở thành Ngân hàng tốt nhất và doanh nghiệp hàng đầu Việt Nam", city: "Hồ Chí Minh", jobs: 12, reviews: 54, rated: "Tốt nhất về Văn hóa công ty" },
  { cover: "https://itviec.com/assets/missing_company-c683f605db40722efe416d3d805fa96d55c3e752810ee9813ba04aad8f09bf54.jpg", avatar: "https://cdn.itviec.com/employers/tiki-corporation/logo/s65/DYAgHtdpQFHCtozRjPtxzpNs/tiki-corporation-logo.png", name: "Tiki Corporation", star: 3.5, shortDescription: "TIKI.VN is the leading online retailer in Vietnam, offering seamless end...", city: "Hồ Chí Minh", jobs: 12, reviews: 75, rated: "Tốt nhất về Văn phòng làm việc" },
  { cover: "https://cdn.itviec.com/photos/44277/small_headline_photo/shopee-tuyen-dung-viec-lam-IT-small_headline_photo-1511800.jpg?wFSTZVmC4nGa6ToxiCDiWJHM", avatar: "https://cdn.itviec.com/employers/shopee/logo/s65/mTKEZs8X4KMW66qZBVGq26JP/shopee-logo.png", name: "Shopee", star: 4.8, shortDescription: "Shopee is the leading e-commerce platform in Southeast Asia and Taiwan.", city: "Hồ Chí Minh", jobs: 41, reviews: 70, rated: "Tốt nhất về Văn phòng làm việc" },
  { cover: "https://cdn.itviec.com/photos/43078/small_headline_photo/zalo-tuyen-dung-viec-lam-IT-small_headline_photo-1512582.jpg?dNcZPUNPob8nGwFPH45yAJ7Z", avatar: "https://cdn.itviec.com/employers/zalo/logo/s65/3LCycUB7awD7KLYUor3dgJWq/zalocareers_blue_2.png", name: "Zalo", star: 4.4, shortDescription: "At Zalo, we build world-class tech products used and loved by millions.", city: "Hồ Chí Minh", jobs: 78, reviews: 123, rated: "Tốt nhất về Văn phòng làm việc" },
  { cover: "https://cdn.itviec.com/photos/49158/small_headline_photo/aswhite-vietnam-tuyen-dung-viec-lam-IT-small_headline_photo-1779441.jpg?UB2eohwces65joR1e8EouNQB", avatar: "https://cdn.itviec.com/employers/aswhite-vietnam/logo/s65/TfZtUipyCqMHVFu8EmejDH6y/ASW%20jpg.JPG", name: "ASWHITE VIETNAM", star: 4.5, shortDescription: "Think global, work local - work on meaningful tech projects with Austral...", city: "Hồ Chí Minh", jobs: 26, reviews: 13, rated: "Tốt nhất về Văn phòng làm việc" },
  { cover: "https://cdn.itviec.com/photos/47443/small_headline_photo/giao-hang-ti-t-ki-m-tuyen-dung-viec-lam-IT-small_headline_photo-1559125.jpg?oeL1MbwocYBKSuwzqYxy4qRX", avatar: "https://cdn.itviec.com/employers/giao-hang-tiet-kiem/logo/s65/RMf6u915d8g3iakGV4KRWQ5G/Logo.jpg", name: "Giao Hàng Tiết Kiệm", star: 3.2, shortDescription: "Giaohangtietkiem.vn: MasterDev. - Working with Master Dev.", city: "Hồ Chí Minh", jobs: 32, reviews: 75, rated: "Tốt nhất về Văn phòng làm việc" },
  { cover: "https://cdn.itviec.com/photos/15576/small_headline_photo/elca-tuyen-dung-viec-lam-IT-small_headline_photo-829436.jpg?EHKk5VhMNwDSF746iJUxMSGp", avatar: "https://cdn.itviec.com/employers/elca/logo/s65/43SzRHUe3Xfk5V1fq7PBX8Hr/elca-logo.jpg", name: "ELCA", star: 4.8, shortDescription: "ELCA is a leading Swiss Information Technology Services Company", city: "Hồ Chí Minh", jobs: 15, reviews: 5, rated: "Tốt nhất về Văn phòng làm việc" },
  { cover: "https://cdn.itviec.com/photos/42544/small_headline_photo/money-forward-vietnam-co-ltd-tuyen-dung-viec-lam-IT-small_headline_photo-1512925.jpg?DFfDfrLYVoKbGeviL9yiGmoz", avatar: "https://cdn.itviec.com/employers/money-forward-vietnam-co-ltd/logo/s65/BReqqvdMDwoX1q8vHQsE7s5t/money-forward-vi-t-nam-logo.png", name: "MONEY FORWARD VIETNAM CO.,LTD", star: 4.7, shortDescription: "Top 1 Fintech Company", city: "Hồ Chí Minh", jobs: 21, reviews: 45, rated: "Tốt nhất về Văn phòng làm việc" },
  { cover: "https://cdn.itviec.com/photos/46302/small_headline_photo/hybrid-technologies-tuyen-dung-viec-lam-IT-small_headline_photo-1512425.jpg?nqVtQvik3oPuUL9DNw2fBe5c", avatar: "https://cdn.itviec.com/employers/hybrid-technologies/logo/s65/oZ68G6PENyitD3EWBPE9gqHf/avatar-10-10.jpg", name: "Hybrid Technologies", star: 4.2, shortDescription: "HYBRID TECHNOLOGIES - New view with you !", city: "Hồ Chí Minh", jobs: 32, reviews: 36, rated: "Tốt nhất về Văn phòng làm việc" },
]


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
  filterBox: {
    padding: "15px 0",
  },
}));


const CompanyListView = ({companies}) => {
  const classes = useStyles();

  const [sortValue, setSortValue] = React.useState(1);
  const [items, setItems] = React.useState([]);

  const sortOptions = [{ name: "Tên", value: 0 }, { name: "Tốt nhất", value: 1 }, { name: "", value: "" }];

  const onChangeSortValue = (event) => {
    setSortValue(event.target.value);
  };

  useEffect(() => {
    const list = buildItems(companies);
    setItems(list);
  }, [companies]);

  const buildItems = (items) => {
    const list = _clone(items).map((i) => ({
      id: i.id,
      cover: DEFAULT_COVER,
      avatar: DEFAULT_AVATAR,
      name: i.name,
      star: 4.0,
      shortDescription: i.description || i.name,
      city: i.address || "Hồ Chí Minh",
      jobs: i.numberOfJobs,
      reviews: i.numberOfReviews,
      rated: "Tốt nhất về Văn phòng làm việc",
    }));

    console.log(list);

    return list;
  }

  const goToCompany = (id) => {
    // Open in new tab
    const win = window.open(`/client-company?id=${id}`, "_blank");
    win.focus();
  };

  return (<div className={classes.paper}>
    <h3 className="font-bold">Review Công Ty</h3>
    <Grid
      container
      direction="row"
      justify="flex-start"
      spacing={3}
      className={classes.filterBox}
    >
      <Grid item>
        <p>Sắp xếp theo</p>
      </Grid>
      <BaseSelect
        value={sortValue}
        options={sortOptions}
        onChange={onChangeSortValue}
      />
    </Grid>
    <Grid container spacing={2} className={classes.mainContent}>
      {[...data, ...items].map((item) => (
        <Grid item xs={4} key={uuid()}>
          <CompanyListItem props={{ ...item, onClick: () => {
            console.log("item =", item);
            goToCompany(item.id);
          } }} />
        </Grid>
      ))}
    </Grid>
  </div>);
}

export default CompanyListView;
