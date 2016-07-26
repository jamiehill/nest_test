import React, {Component} from "react";
import { browserHistory } from 'react-router'

class App extends Component {
    constructor() {
        super();
        console.log('App:instantiated');
    }
    onClick(path) {
        browserHistory.push(path);
    }
    render() {
        return (
            <div>
                <h1>App Container 2</h1>
                <button onClick={this.onClick.bind(this, 'en/register')}>Regsiter</button>
                <div style={{ padding: 20 }}>
                    {this.props.main}
                </div>
            </div>
        )
    }
}

export default App;