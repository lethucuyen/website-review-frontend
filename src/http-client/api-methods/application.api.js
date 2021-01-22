import httpClient from '../config/http-client';

const getAllCompanies = () => {
    return httpClient
        .get('/company/list-company')
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
};

const getSingleCompanyDetail = (companyId) => {
    return httpClient
        .get(`/company/details-company/${companyId}`)
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
};

const getAllJobs = () => {
    return httpClient
        .get(`/list-all-of-jobs`)
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
