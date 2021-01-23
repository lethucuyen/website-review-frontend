import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import queryString from 'query-string';


import Footer from "../components/Footer";
import Header from "../components/Header";
import CompanyGeneralInfo from "../components/Company/CompanyGeneralInfo";
import CompanyTabView from "../components/Company/CompanyTabView";
import CompanyJobListView from "../components/Company/CompanyJobListView";


import CompanyService from "../services/CompanyService";


const useStyles = makeStyles(() => ({
}));

const ClientCompany = ({ location }) => {
  const classes = useStyles();

  const [item, setItem] = React.useState([]);

  useEffect(() => {
    const { id } = queryString.parse(location.search);

    console.log(id);
    getDetail(id);
  }, [location.search]);

  const getDetail = (id) => {
    const postData = {
      "id": id
    };

    CompanyService.findById(postData)
      .then(response => {
        console.log("response =", response.data.result);
        setItem(response.data.result);
      })
      .catch(e => {
        console.log(e);
      });
  }


  return <div>
    <Header />
    <div className="body-content clearfix">
      <div className="bg-color2">
        <div className="container">
          <CompanyGeneralInfo info={item} />
          <div className="row">
            <div className="col-md-9">
              <CompanyTabView info={item}/>
            </div>
            <div className="col-md-3">
              <CompanyJobListView info={item}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>;
}

export default ClientCompany;