import http from "../http-common";

const getAll = (data = {}) => {
  return http.post("/company/list-company", data);
};

const findByTitle = (data = {}) => {
  return http.post("/company/search", data);
};

const findById = (data = {}) => {
  return http.post("/company/details-company", data);
};
const writeReview = (data = {}) => {
  return http.post("/employee/add-review", data);
};
export default {
  getAll,
  findByTitle,
  findById,
  writeReview,
};
