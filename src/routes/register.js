import {indexRoute} from 'util/RouteUtil';

export default {
    path: 'register',
    onEnter: (next) => console.log('regsiter: '+next.location.pathname),
    indexRoute: indexRoute('register/profile'),
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('components/Register').default);
        })
    },
    childRoutes: [
        require('routes/profile'),
        require('routes/personal')
    ]
};
