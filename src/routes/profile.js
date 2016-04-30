export default {
    path: 'profile',
    onEnter: (next) => console.log('profile1: '+next.location.pathname),
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('components/Profile').default)
        })
    }
}