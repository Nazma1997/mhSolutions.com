import axios from "axios";
import { token } from "../../utils/authentication";

const reactApp = process.env.REACT_APP_API_BASE_URL

// fetch api call
export const fetchHandler = async () => {
    const res = await axios.get(`${reactApp}/api/v1/skills`,
        {
            headers: {
                Authorization: `Bearer ${token()}`,
            },
        }
    );
    return res;
};

//fetch list for dropdown
export const fetchSkillListForDropdownHandler = async () => {
    const res = await axios.get(`${reactApp}/api/v1/skills/list-for-dropdown`,
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
    const res = fetch(`${reactApp}/api/v1/skills/create`, {
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
export const updateSkillHandler = async (receivedPrintingFields) => {
    let res = await fetch(`${reactApp}/api/v1/skills/update`, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token()}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(receivedPrintingFields),
    });
    return res;
};