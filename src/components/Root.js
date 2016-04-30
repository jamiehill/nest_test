import React from "react";

class Root extends React.Component {
    constructor(props) {
        super(props);
        console.log('Root:instantiated')
    }

    /**
     * @returns {XML}
     */
    render() {
        return (
            <div>
                <h1>Root</h1>
            </div>
        )
    }
}

export default Root;