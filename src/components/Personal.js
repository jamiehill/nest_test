import React, {Component} from "react";
import { browserHistory } from 'react-router'

class Personal extends Component {
    onClick(path) {
        // browserHistory.push({pathname: route, query: query, state});
        browserHistory.push(path);
    }
    render() {
        return (
            <div>
                <h1>PERSONAL</h1>
                <button onClick={this.onClick.bind(this, 'en')}>Home</button>
                <button onClick={this.onClick.bind(this, 'en/register/profile')}>Goto Profile</button>
            </div>
        )
    }
}

export default Personal;