import React, {Component} from "react";

class StandAloneView extends Component {
    constructor(props) {
        super(props);
        console.log("StandAlone:instantiated");
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default StandAloneView;
