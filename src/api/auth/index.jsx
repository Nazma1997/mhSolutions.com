//client register api call

const baseUrl = process.env.REACT_APP_API_BASE_URL
export const loginHandler = async (receivedLoginFields) => {
    const res = await fetch(
        `${baseUrl}/api/v1/users/login`,
       
       
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(receivedLoginFields),
        }
    );
    return res;
};