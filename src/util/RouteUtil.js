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