import http from "../http-common";

const getAll = (data = {}) => {
  return http.post("/company/list-company", data);
};

export default {
  getAll,
};