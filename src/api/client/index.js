//client register api call

const reactApp = process.env.REACT_APP_API_BASE_URL
export const clientRegisterHandler = async (receivedClientRegisterFields) => {
    const res = await fetch(
        `${reactApp}/api/v1/users/client-register`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(receivedClientRegisterFields),
        }
    );
    return res;
};