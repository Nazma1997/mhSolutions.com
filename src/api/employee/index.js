import axios from "axios";
import { token } from "../../utils/authentication";
import { getPage } from "../../utils/getPage";



const baseUrl = process.env.REACT_APP_API_BASE_URL

// fetch api call
export const fetchHandler = async () => {
    const res = await axios.get(`${baseUrl}/api/v1/users`,
        {
            headers: {
                Authorization: `Bearer ${token()}`,
            },
        }
    );
    return res;
};

// fetch api call
export const fetchReferPersonListForDropdownHandler = async () => {
    const res = await axios.get(`${baseUrl}/api/v1/users/list?isReferPerson=YES`,
        {
            headers: {
                Authorization: `Bearer ${token()}`,
            },
        }
    );
    return res;
};

// fetch api call
export const fetchUserListForDropdownHandler = async () => {
    const res = await axios.get(`${baseUrl}/api/v1/users/list`,
        {
            headers: {
                Authorization: `Bearer ${token()}`,
            },
        }
    );
    return res;
};

// add api call
export const addHandler = async (receivedEmployeeFields) => {
    const res = fetch(`${baseUrl}/api/v1/users/employee-register`, {
        method: "POST",
        body: JSON.stringify(receivedEmployeeFields),
    });
    return res;
};

//employee register api call
export const employeeRegisterHandler = async (receivedBlogFields) => {
    const res = await fetch(
        // `${process.env.REACT_APP_API_BASE_URL}/users/employee-register`,
        `${baseUrl}/api/v1/users/employee-register`,
        {
            method: "POST",
            body: receivedBlogFields,
        }
    );
    return res;
};

//client register handler
export const clientRegisterHandler = async (receivedBlogFields) => {
    const res = await fetch(
        // `${process.env.REACT_APP_API_BASE_URL}/users/employee-register`,
        `${baseUrl}/api/v1/users/client-register`,
        {
            method: "POST",
            body: receivedBlogFields,
        }
    );
    return res;
};

//HR fetch api call
export const fetchEmployeeListHandler = async (limit, getName, getStatus, locationsearch) => {

    const unicodeUri = `${baseUrl}/api/v1`;

    const res = await axios.get(`${unicodeUri}/users?page=${getPage(locationsearch) || 1}&limit=${limit || 20}` + (getName ? `&searchKeyword=${getName}` : ``) +
        (getStatus ? `&active=${getStatus}` : ``) + (`&requestType=EMPLOYEE`),
        {
            headers: {
                Authorization: `Bearer ${token()}`,
            },
        }
    );
    return res;
};

//HR fetch api call
export const fetchClientListHandler = async (limit, getName, getStatus, locationsearch) => {

    const unicodeUri = `${baseUrl}/api/v1`;

    const res = await axios.get(`${unicodeUri}/users?page=${getPage(locationsearch) || 1}&limit=${limit || 20}` + (getName ? `&searchKeyword=${getName}` : ``) +
        (getStatus ? `&active=${getStatus}` : ``) + (`&requestType=CLIENT`),
        {
            headers: {
                Authorization: `Bearer ${token()}`,
            },
        }
    );
    return res;
};

//Certificate upload api call
export const certificateUploadHandler = async (receivedCertificateFields) => {
    const res = await fetch(
        `${baseUrl}/api/v1/users/certificate/upload`,
        {
            method: "PUT",
            body: receivedCertificateFields,
        }
    );
    return res;
};

//Removed certificate upload api call
export const removedCertificateHandler = async (receivedCertificateFields) => {
    const res = await fetch(
        `${baseUrl}/api/v1/users/certificate/upload`,
        {
            method: "PUT",
            body: receivedCertificateFields,
        }
    );
    return res;
};