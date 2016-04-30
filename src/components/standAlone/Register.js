import React, {Component} from "react";

class RegisterView extends Component {
    constructor(props) {
        super(props);
        console.log('RegisterView:instantiated')
    }

    /**
     * @returns {XML}
     */
    render() {
        return (
            <div>
                <h1>RegisterView</h1>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default RegisterView;