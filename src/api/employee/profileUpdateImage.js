import { token } from "../../utils/authentication";


const reactApp = process.env.REACT_APP_API_BASE_URL

// image upload api call
export const imageUploadHandler = async (receivedBlogFields) => {
    const res = await fetch(
        `${reactApp}/api/v1/users/profile-picture/upload`,
        {
            method: "PUT",
            body: receivedBlogFields,
        }
    );
    return res;
};

// image upload api call
export const certificateUploadHandler = async (receivedBlogFields) => {
    const res = await fetch(
        `${reactApp}/api/v1/users/certificate/upload`,
        {
            method: "PUT",
            body: receivedBlogFields,
        }
    );
    return res;
};