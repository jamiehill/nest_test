export default {
    path: 'personal',
    onEnter: (next) => console.log('personal: '+next.location.pathname),
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('components/Personal').default)
        })
    }
}