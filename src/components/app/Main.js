import React, {Component} from "react";

class MainView extends Component {
    constructor(props) {
        super(props);
        console.log('MainView:instantiated')
    }

    /**
     * @returns {XML}
     */
    render() {
        return (
            <div>
                <h1>MainView</h1>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default MainView;