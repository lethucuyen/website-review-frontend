import httpClient from "../config/http-client";

const getAllCompanies = () => {
  return httpClient
    .post("/company/list-company")
    .then((result) => {
      return Promise.resolve(result);
    })
    .catch((err) => Promise.reject(err));
};

const getSingleCompanyDetail = (companyId) => {
  return httpClient
    .post(`/company/details-company/`, { id: companyId })
    .then((result) => {
      return Promise.resolve(result);
    })
    .catch((err) => Promise.reject(err));
};

const getAllJobs = () => {
  return httpClient
    .post(`/list-all-of-jobs`)
    .then((result) => {
      return Promise.resolve(result);
    })
    .catch((err) => Promise.reject(err));
};

export default {
  getSingleCompanyDetail,
  getAllCompanies,
  getAllJobs,
};
