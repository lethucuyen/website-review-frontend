import httpClient from '../config/http-client';

const userRegister = (name, username, password, email, phone) => {
    return httpClient
        .post('/employee/register', { name, username, password, email, phone })
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
        .post("/employee/profile", {}, { headers: {"access-token": `Bearer ${token}`} })
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
