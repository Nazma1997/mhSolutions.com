import axios from "axios";
import { token } from "../../utils/authentication";

const reactApp = process.env.REACT_APP_API_BASE_URL
// fetch api call
export const fetchMhEmployeeListHandler = async () => {
    const res = await axios.get(`${reactApp}/api/v1/users/mh-employee-list`,
        {
            headers: {
                Authorization: `Bearer ${token()}`,
            },
        }
    );
    return res;
};

// add api call
export const addHandler = async (receivedPositionFields) => {
    const res = fetch(`${reactApp}/api/v1/users/mh-employee-register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token()}`,
        },
        body: JSON.stringify(receivedPositionFields),
    });
    return res;
};

//update api call
export const updateMhEmployeeHandler = async (receivedMhEmployeeFields) => {
    let res = await fetch(`${reactApp}/api/v1/users/mh-employee-update`, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token()}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(receivedMhEmployeeFields),
    });
    return res;
};