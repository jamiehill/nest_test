import App from 'components/App';

export default {
    onEnter: (next) => console.log('app: '+next.location.pathname),
    components: App,
    childRoutes: [
        require('routes/main')
    ]
};