import http from "../http-common";

const getAll = (data = {}) => {
  return http.post("/company/list-company", data);
};

const findByTitle = (data = {}) => {
  return http.post("/company/search", data);
};

export default {
  getAll,
  findByTitle,
};