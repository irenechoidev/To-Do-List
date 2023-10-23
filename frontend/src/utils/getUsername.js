import decode from 'jwt-decode';

export const getUsername = () => {
    const token = window.localStorage.getItem("token");

    try {
        const payload = decode(token);
        return payload.username;
    } catch (err) {
        return null;
    }
}