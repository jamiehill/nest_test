import StandAloneView from "components/StandAloneView";

export default {
    component: StandAloneView,
    onEnter: (next) => console.log('standAlone: '+next.location.pathname),
    childRoutes: [
        require('routes/register')
    ]
};
