// import Root from 'components/Root';

export default {
    path: '/',
    component: 'span',
    childRoutes: [
        {
            component: 'div'
        }
    ]
}


// export default {
//     path: '/',
//     component: require('components/Root'),
//     childRoutes: []
// {
    //     path: '/',
    //     // component: require('components/Root'),
    //     getComponent(nextState, cb) {
    //         return require.ensure([], (require) => {
    //             const component = require('../components/Profile');
    //             cb(null, component)
    //         })
    //     }
    // } ]
// };
