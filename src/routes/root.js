// import Root from 'components/Root';

export default {
    component: 'div',
    onEnter: (next) => console.log('div: '+next.location.pathname),
    childRoutes: [

        // redirects all base routes to the appropriate
        // language based route for example. '/' => '/en'
        {
            path: '(/)',
            component: 'div',
            onEnter: (next, replace) => {
                replace(`/en`);
            }
        },

        // top level for all language prefixed routes
        {
            path: ':lang',
            onEnter: (next) => console.log('root: '+next.location.pathname),
            childRoutes: [
                require('routes/standAlone'),
                require('routes/app')
            ]
        }
    ]
};
