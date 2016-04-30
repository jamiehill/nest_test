import StandAloneView from "components/StandAlone";
import {indexRoute} from 'util/RouteUtil';

export default {
    component: StandAloneView,
    childRoutes: [{
        path: 'register',
        indexRoute: indexRoute('register/profile'),
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('components/standAlone/Register'));
            })
        },
        childRoutes: [{
            path: 'profile',
            getComponent(nextState, cb) {
                require.ensure([], (require) => {
                    cb(null, require('components/standAlone/register/Profile'))
                })
            }
        },
        {
            path: 'personal',
            getComponent(nextState, cb) {
                require.ensure([], (require) => {
                    cb(null, require('components/standAlone/register/Personal'))
                })
            }
        }]
    }]
};
