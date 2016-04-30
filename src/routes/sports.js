export default {
    path: '(:sport)',
    onEnter: (next) => console.log(next.location.pathname),
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('components/SportView').default);
        })
    }
}
