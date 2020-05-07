export const isLogin = () => {
    if (localStorage.getItem('token')) {
        return true;
    }
    return false;
}
export const token = () => JSON.parse(localStorage.getItem('token'));
export const logout = () => localStorage.removeItem('token');