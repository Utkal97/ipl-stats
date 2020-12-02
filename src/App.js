import './App.css';

import { Container, Row, Col } from 'reactstrap';

import  Header from './Header/Component';
import Main from './Home/Component';
import SideNav from './SideNav/Component';

function App() {
  return (
    <Container fluid>
            {/* <Row  className="sticky"> */}
                <Header/>
            {/* </Row> */}
            <Row>
                <Col className="sidenav">
                    <SideNav />
                </Col>
                <Col className="main">
                    <Main />
                </Col>
            </Row>
    </Container>
  );
}

export default App;