/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useParams } from "react-router-dom"
import apiMethods from "../http-client/api-methods";
import RatingStarBox from "./RatingStarBox";

const CompanyPage = (props) => { 
  const { id } = props.match.params;
  const [ companyDetails, setCompanyDetails ] = useState({});

  const _getCompanyDetails = async () => {
    await apiMethods.application.getSingleCompanyDetail(id)
      .then(result => result.data.result)
      .then(result => {
        console.log(result);
        setCompanyDetails(result);
      })
      .catch(error => {
      });
  }
  
  useEffect(() => {
    _getCompanyDetails()
  }, [props.match.params]);

  return (
    <div class="wrapper">
        <Header>
          {" "}
          {/*<!-- form search area-->*/}
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                {/*<!-- logo -->*/}
                <div class="logo text-center-sm">
                  {" "}
                  <a href="index.html">
                    <img src="assets/theme/images/logo.png" alt="" />
                  </a>
                </div>
              </div>

              <div class="col-md-8">
                {/*<!-- form search -->*/}
                <form class="form-search-list">
                  <div class="row">
                    <div class="col-sm-5 col-xs-6 ">
                      <div class="form-group">
                        <label class="color-white">What</label>
                        <input
                          class="form-control"
                          placeholder="job title, keywords or company name"
                        />
                      </div>
                    </div>
                    <div class="col-sm-5 col-xs-6 ">
                      <div class="form-group">
                        <label class="color-white">Where</label>
                        <input
                          class="form-control"
                          placeholder="city, province, or region"
                        />
                      </div>
                    </div>
                    <div class="col-sm-2 col-xs-12 ">
                      <div class="form-group">
                        <label class="hidden-xs">&nbsp;</label>
                        <button class="btn btn-block btn-theme  btn-success">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                  <p class="text-right">
                    <a
                      href="#modal-advanced"
                      data-toggle="modal"
                      class="link-white"
                    >
                      Advanced Search
                    </a>
                  </p>
                </form>{" "}
                {/*<!-- form search -->*/}
              </div>
            </div>

            {/*<!-- modal Advanced search -->*/}
            <div class="modal fade" id="modal-advanced">
              <div class="modal-dialog ">
                <div class="modal-content">
                  <form>
                    <div class="modal-header">
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                      <h4 class="modal-title" id="myModalLabel">
                        Advanced Job Search
                      </h4>
                    </div>
                    <div class="modal-body">
                      <h5>Find Jobs</h5>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>With all of these words</label>
                            <input
                              type="text"
                              class="form-control "
                              name="text"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>With the exact phrase</label>
                            <input
                              type="text"
                              class="form-control "
                              name="text"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label>Show jobs of type</label>
                        <select class="form-control">
                          <option value="all">All job types</option>
                          <option value="fulltime">Full-time</option>
                          <option value="parttime">Part-time</option>
                          <option value="contract">Contract</option>
                          <option value="internship">Internship</option>
                          <option value="temporary">Temporary</option>
                        </select>
                      </div>
                      <div class="white-space-10"></div>
                      <h5>Where and When</h5>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Radius </label>
                            <select id="radius" class="form-control">
                              <option value="0">only in</option>
                              <option value="5">within 5 kilometers </option>
                              <option value="10">within 10 kilometers </option>
                              <option value="15">within 15 kilometers </option>
                              <option selected="" value="25">
                                within 25 kilometers{" "}
                              </option>
                              <option value="50">within 50 kilometers </option>
                              <option value="100">
                                within 100 kilometers{" "}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Of </label>
                            <input
                              type="text"
                              class="form-control"
                              maxlength="250"
                              value="United States"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Age - Jobs published </label>
                            <select class="form-control">
                              <option value="any">anytime</option>
                              <option value="15">within 15 days</option>
                              <option value="7">within 7 days</option>
                              <option value="3">within 3 days</option>
                              <option value="1">since yesterday</option>
                              <option value="last">since my last visit</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Display</label>
                            <select class="form-control">
                              <option selected="" value="10">
                                10
                              </option>
                              <option value="20">20</option>
                              <option value="30">30</option>
                              <option value="50">50</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-default btn-theme"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="submit" class="btn btn-success btn-theme">
                        Find Jobs
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/*<!-- end modal forgot password -->*/}
          </div>
          {/*<!-- end form search area-->*/}
        </Header>

        {/*<!-- body-content -->*/}
        { companyDetails?.id && <div class="body-content clearfix">
          {/*<!-- top link -->*/}
          <div class="bg-color2 block-section-xs line-bottom">
            <div class="container">
              <div class="row">
                <div class="col-sm-6 hidden-xs">
                  <div>Company profile: {companyDetails.name}</div>
                </div>
                <div class="col-sm-6">
                  <div class="text-right">
                    <a href="#">&laquo; Go back to company listings</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<!-- end top link -->*/}
          {/*<!-- company profile -->*/}
          <div class="bg-color2">
            <div class="container">
              <div class="row">
                <div class="col-md-9">
                  {/*<!-- box item details -->*/}
                  <div class="block-section box-item-details">
                    {/*<!-- logo company-->*/}
                    <div class="row">
                      <div class="col-md-8">
                        <a href="company_page.html">
                          {companyDetails.name}
                        </a>
                      </div>
                      <div class="col-md-4">
                        <p class="text-right">
                          <a href="#">Go to our website &raquo;</a>
                        </p>
                      </div>
                    </div>
                    {/*<!-- end logo company-->*/}

                    {/*<!-- Bout Company-->*/}
                    <h3 class="title" id="cp-about">
                      About
                    </h3>

                    <p>
                      {companyDetails.description}{" "}
                    </p>
                    <p>
                      Early on, we were instrumental in the rise of the U.S.
                      space program, the creation of global computer timesharing
                      networks, the use of complex databases to consolidate
                      credit information, and we were the first software firm to
                      be listed on the New York Stock Exchange.{" "}
                    </p>

                    {/*<!-- Reviews list-->*/}
                    <h3 class="title" id="cp-review">
                      Review &nbsp;
                      <span class="rate">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-half-o"></i>
                      </span>
                      <small>({companyDetails.listReviews?.length})</small>
                    </h3>
                    <h4>Company Attributes</h4>
                    <div class="row">
                      <div class="col-sm-6">
                        <p>
                          <span class="rate">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half-o"></i>
                          </span>{" "}
                          Job Work/Life Balance
                        </p>
                        <p>
                          <span class="rate">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half-o"></i>
                          </span>{" "}
                          Compensation/Benefits
                        </p>
                        <p>
                          <span class="rate">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half-o"></i>
                          </span>{" "}
                          Job Security/Advancement
                        </p>
                      </div>
                      <div class="col-sm-6">
                        <p>
                          <span class="rate">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half-o"></i>
                          </span>{" "}
                          Management
                        </p>
                        <p>
                          <span class="rate">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half-o"></i>
                          </span>
                          Job Culture
                        </p>
                      </div>
                    </div>

                    <h4>List Reviews</h4>
                    {
                      companyDetails?.listReviews?.length > 0 && 
                      <>
                        {companyDetails?.listReviews.map((item, index) => 
                          (<div class="mt-20">
                            <h5>
                              <RatingStarBox StarPoint={item.rating} /> {" "}
                              {item.content}
                            </h5>
                            <p>
                              <strong>By</strong>: {item.employeeId}
                            </p>
                        </div>))
                        }
                      </>
                    }
                    <p>
                      <a
                        href="#"
                        class="btn btn-theme btn-line dark btn-sm btn-pill"
                      >
                        Load More
                      </a>
                    </p>

                    {/*<!-- galery photos-->*/}
                    <h3 class="title" id="cp-photos">
                      Photos <small>(8)</small>
                    </h3>
                    <div class="row company-photos galery-popup-area">
                      <div class="col-sm-3 col-xs-6">
                        <a
                          href="http://placehold.it/900x450"
                          class="galery-popup"
                          title="pic01"
                        >
                          <img
                            src="http://placehold.it/500x350"
                            alt=""
                            class="img-full"
                          />
                        </a>
                      </div>
                      <div class="col-sm-3 col-xs-6">
                        <a
                          href="http://placehold.it/900x450"
                          class="galery-popup"
                          title="pic02"
                        >
                          <img
                            src="http://placehold.it/500x350"
                            alt=""
                            class="img-full"
                          />
                        </a>
                      </div>
                      <div class="col-sm-3 col-xs-6">
                        <a
                          href="http://placehold.it/900x450"
                          class="galery-popup"
                          title="pic03"
                        >
                          <img
                            src="http://placehold.it/500x350"
                            alt=""
                            class="img-full"
                          />
                        </a>
                      </div>
                      <div class="col-sm-3 col-xs-6">
                        <a
                          href="http://placehold.it/900x450"
                          class="galery-popup"
                          title="pic04"
                        >
                          <img
                            src="http://placehold.it/500x350"
                            alt=""
                            class="img-full"
                          />
                        </a>
                      </div>
                      <div class="col-sm-3 col-xs-6">
                        <a
                          href="http://placehold.it/900x450"
                          class="galery-popup"
                          title="pic05"
                        >
                          <img
                            src="http://placehold.it/500x350"
                            alt=""
                            class="img-full"
                          />
                        </a>
                      </div>
                      <div class="col-sm-3 col-xs-6">
                        <a
                          href="http://placehold.it/900x450"
                          class="galery-popup"
                          title="pic06"
                        >
                          <img
                            src="http://placehold.it/500x350"
                            alt=""
                            class="img-full"
                          />
                        </a>
                      </div>
                      <div class="col-sm-3 col-xs-6">
                        <a
                          href="http://placehold.it/900x450"
                          class="galery-popup"
                          title="pic07"
                        >
                          <img
                            src="http://placehold.it/500x350"
                            alt=""
                            class="img-full"
                          />
                        </a>
                      </div>
                      <div class="col-sm-3 col-xs-6">
                        <a
                          href="http://placehold.it/900x450"
                          class="galery-popup"
                          title="pic08"
                        >
                          <img
                            src="http://placehold.it/500x350"
                            alt=""
                            class="img-full"
                          />
                        </a>
                      </div>
                    </div>

                    {/*<!-- jobs list-->*/}
                    <h3 class="title" id="cp-jobs">
                      jobs <small>({companyDetails?.listJobs?.length})</small>
                    </h3>
                    {
                      companyDetails?.listJobs && 
                      companyDetails?.listJobs.map((item, index) => {
                        return (
                          <div class="mt-20">
                            <h4>
                              <Link to="/job-details">
                                {item.name}{" "}
                                <i class="fa fa-link color-white-mute font-1x"></i>
                              </Link>
                            </h4>
                            <p>{item.address} - {item.salary}</p>
                          </div>
                        )
                      })
                    }
                
                    <p>
                      <a
                        href="#"
                        class="btn btn-theme btn-line dark btn-sm btn-pill"
                      >
                        Load More
                      </a>
                    </p>
                  </div>
                  {/*<!-- end box item details -->*/}
                </div>
                <div class="col-md-3">
                  {/*<!-- box afix right -->*/}
                  <div class="block-section " id="affix-box">
                    <div class="text-center">
                      <p>
                        <a
                          href="#"
                          class="btn btn-theme btn-t-primary btn-block"
                        >
                          Follow
                        </a>
                      </p>

                      <ul class="list-unstyled nav-sidebar">
                        <li>
                          <a href="#cp-about" class="link-innerpage">
                            About
                          </a>
                        </li>
                        <li>
                          <a href="#cp-review" class="link-innerpage">
                            Review
                          </a>
                        </li>
                        <li>
                          <a href="#cp-photos" class="link-innerpage">
                            Photos
                          </a>
                        </li>
                        <li>
                          <a href="#cp-jobs" class="link-innerpage">
                            Jobs
                          </a>
                        </li>
                      </ul>
                      <p>Share This Company </p>
                      <p class="share-btns">
                        <a href="#" class="btn btn-primary">
                          <i class="fa fa-facebook"></i>
                        </a>
                        <a href="#" class="btn btn-info">
                          <i class="fa fa-twitter"></i>
                        </a>
                        <a href="#" class="btn btn-danger">
                          <i class="fa fa-google-plus"></i>
                        </a>
                        <a href="#" class="btn btn-warning">
                          <i class="fa fa-envelope"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                  {/*<!-- end box afix right -->*/}
                </div>
              </div>
            </div>
          </div>{" "}
          {/*<!-- end company profile -->*/}
          {/*<!-- block map -->*/}
          <div class="collapse" id="map-toogle">
            <div class=" bg-color2" id="map-area">
              <div class="container">
                {/*<!-- map description -->*/}
                <div class="marker-description">
                  <div class="inner">
                    <h4 class="no-margin-top">Office Location</h4>
                    Central Jakarta No 1234, Jakarta, Indonesia
                  </div>
                </div>
                {/*<!-- end map description -->*/}
              </div>
              <div class="map-area-detail">
                {/*<!-- change this data lat and lng -->*/}
                <div
                  class="box-map-detail"
                  id="map-detail-job"
                  data-lat="48.856318"
                  data-lng="2.351866"
                ></div>
              </div>
            </div>
            {/*<!-- end block map -->*/}
          </div>
          {/*<!-- modal apply -->*/}
          <div class="modal fade" id="modal-apply">
            <div class="modal-dialog modal-md">
              <div class="modal-content">
                <form>
                  <div class="modal-header ">
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title">Apply</h4>
                  </div>
                  <div class="modal-body">
                    <div class="form-group">
                      <label>Full name</label>
                      <input
                        type="email"
                        class="form-control "
                        placeholder="Enter Email"
                      />
                    </div>
                    <div class="form-group">
                      <label>Email address</label>
                      <input
                        type="email"
                        class="form-control "
                        placeholder="Enter Email"
                      />
                    </div>
                    <div class="form-group">
                      <label>Tell us why you better?</label>
                      <textarea
                        class="form-control"
                        rows="6"
                        placeholder="Something Comment"
                      ></textarea>
                    </div>
                    <div class="form-group">
                      <label>Your Resume</label>
                      <div class="input-group">
                        <span class="input-group-btn">
                          <span class="btn btn-default btn-theme btn-file">
                            File <input type="file" />
                          </span>
                        </span>
                        <input
                          type="text"
                          class="form-control form-flat"
                          readonly
                        />
                      </div>
                      <small>
                        Upload your CV/resume. Max. file size: 24 MB.
                      </small>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-default btn-theme"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" class="btn btn-success btn-theme">
                      Send Application
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/*<!-- end modal  apply -->*/}
        </div>
        }
        {/*<!--end body-content -->*/}
        <Footer />
      </div>
  );
}
export default CompanyPage;
