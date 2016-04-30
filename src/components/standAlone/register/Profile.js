import React, {Component} from "react";
import { browserHistory } from 'react-router'

class Profile extends Component {
    onClick(path) {
        browserHistory.push(path);
    }
    render() {
        return (
            <div>
                <h1>PROFILE</h1>
                <button onClick={this.onClick.bind(this, 'en')}>Home</button>
                <button onClick={this.onClick.bind(this, 'en/register/personal')}>Goto Personal</button>
            </div>
        )
    }
}

export default Profile;