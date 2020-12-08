import React from 'react';
import { Container } from 'reactstrap';
class LoadScreen extends React.Component {
    render() {
        return (
            <Container className="load-screen">
                <img src="./cricket_ball.gif" alt="A cricket ball loading GIF" />
                <h3>
                    Your component is loading...
                </h3>
            </Container>
        )
    }
};

export default LoadScreen;