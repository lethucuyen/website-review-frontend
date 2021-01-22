import http from "../http-common";

const getAll = () => {
  return http.get("/company/list-company");
};

export default {
  getAll,
};