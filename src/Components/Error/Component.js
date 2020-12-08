import React from 'react';

class Error extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h2>
                Error occured while rendering {this.props.content}. We regret for your bad experience.
            </h2>
        );
    }
}

export default Error;