import axios from "axios";
import { token } from "../../utils/authentication";

const reactApp = process.env.REACT_APP_API_BASE_URL

// fetch api call
export const fetchHandler = async () => {
    const res = await axios.get(`${reactApp}/api/v1/sources`,
        {
            headers: {
                Authorization: `Bearer ${token()}`,
            },
        }
    );
    return res;
};

//fetch list for dropdown
export const fetchSourceListForDropdownHandler = async () => {
    const res = await axios.get(`${reactApp}/api/v1/sources/list-for-dropdown`,
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
    const res = fetch(`${reactApp}/api/v1/sources/create`, {
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
export const updateSourceHandler = async (receivedPrintingFields) => {
    let res = await fetch(`${reactApp}/api/v1/sources/update`, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token()}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(receivedPrintingFields),
    });
    return res;
};