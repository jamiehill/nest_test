import StandAloneView from "components/StandAloneView";
import {indexRoute} from 'util/RouteUtil';

export default {
    component: StandAloneView,
    childRoutes: [{
        path: 'register',
        indexRoute: indexRoute('register/profile'),
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('components/Register').default);
            })
        },
        childRoutes: [{
            path: 'profile',
            getComponent(nextState, cb) {
                require.ensure([], (require) => {
                    cb(null, require('components/Profile').default)
                })
            }
        },
        {
            path: 'personal',
            getComponent(nextState, cb) {
                require.ensure([], (require) => {
                    cb(null, require('components/Personal').default)
                })
            }
        }]
    }]
};
