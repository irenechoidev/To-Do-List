export const logout = () => {
    window.localStorage.removeItem("token");
    window.location.reload();
};