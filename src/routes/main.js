import sports from "routes/sports";

export default {
    onEnter: (next) => console.log('main: '+next.location.pathname),
    indexRoute: {
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('components/SportView').default);
            })
        }
    },
    getComponents(location, cb) {
        require.ensure([], (require) => {
            cb(null, {main: require('components/MainView').default});
        })
    },
    childRoutes: [
        require('routes/sports')
    ]
};
