import App from 'components/App';
import {indexRoute} from 'util/RouteUtil';

export default {
    components: App,
    childRoutes: [{
        indexRoute: indexRoute('soccer'),
        getComponents(location, cb) {
            require.ensure([], (require) => {
                cb(null, {main: require('components/app/Main')});
            })
        },
        childRoutes: [{
            path: '(:sport)',
            getComponent(location, cb) {
                require.ensure([], (require) => {
                    cb(null, require('components/app/main/Sport'));
                })
            }
        }]
    }]
};