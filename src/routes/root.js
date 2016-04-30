export default {
    component: 'div',
    childRoutes: [{
        path: '(/)',
        component: 'div',
        onEnter: (next, replace) => {
            replace(`/en`);
        }
    },
    {
        path: ':lang',
        childRoutes: [
            require('routes/standAlone'),
            require('routes/app')
        ]
    }]
};
