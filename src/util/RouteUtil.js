/**
 * @param to
 * @returns {{onEnter: onEnter}}
 */
export const indexRedirect = (to) =>{
    return {
        path: '/',
        onEnter: (next, replace) => {
            replace(`/en/${to}`);
        }
    }
};

/**
 * @param to
 * @returns {{onEnter: (function())}}
 */
export const indexRoute = (to) => {
    return {
        onEnter: (next, replace) => {
            replace(`/en/${to}`)
        }
    }
}