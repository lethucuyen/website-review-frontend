import httpClient from '../config/http-client';

const userRegister = (username, password, email, phone) => {
    return httpClient
        .post('/employee/register', { username, password, email, phone })
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
};

const userLogin = (email, password) => {
    return httpClient
        .post('/employee/login', { username: email, password })
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
};

const getUserAndVerifyToken = (token) => {
    // token from client, make sure consistence
    return httpClient
        .get("/employee/profile", { "access-token": `Bearer ${token}` })
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
}

export default {
    userRegister,
    userLogin,
    getUserAndVerifyToken
};
