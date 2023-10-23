import decode from 'jwt-decode';

export const isAuthenticated = () => {
    let result;
    const token = window.localStorage.getItem("token"); 

    try {
        const payload = decode(token); 
        const expiryDateInMS = payload.exp * 1000;

        result = !isExpired(expiryDateInMS);
    } catch (err) {
        return false;
    }

    return result;
}

// expiry date should be in milliseconds
const isExpired = (expiryDate) => {
    return Date.now() > expiryDate;
}