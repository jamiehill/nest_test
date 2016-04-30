import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import rootRoute from 'routes/root';

const update = () => {
    console.log('route: '+window.location.pathname);
}

render(
    <Router history={browserHistory} routes={rootRoute} onUpdate={update}/>,
    document.getElementById('element')
)



// import React from 'react'
// import { render } from 'react-dom'
// import { Router, browserHistory } from 'react-router'
//
// const rootEl = document.getElementById('element');
// const rootRoute = {
//     component: 'div',
//     childRoutes: [ {
//         path: '/',
//         component: require('./components/App'),
        // getComponent(nextState, cb) {
        //     return require('./components/App')
        // },
        // childRoutes: [
        //     require('./routes/profile'),
        //     require('./routes/personal')
        // ]
    // } ]
// }
//
// render(
//     <Router history={browserHistory} routes={rootRoute} />,
//     rootEl
// )