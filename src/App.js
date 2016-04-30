import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import rootRoute from 'routes/root';

const update = () => {
    console.log('route: '+window.location.pathname);
};

render(
    <Router history={browserHistory}
            routes={rootRoute}
            onUpdate={update}/>,
    document.getElementById('element')
);