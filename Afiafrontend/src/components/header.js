import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row } from 'react-bootstrap';
import '../style.css';
import Menu from './menu';

function Header() {
  return (
    <>
    <Row>
        <Col xs={1}></Col>
        <Col xs={10} style={{padding:5}}>
        <img src="/images/afia.png" alt="logo" style={{width:'100px'}} />
        </Col>
        <Col xs={1}></Col>
        </Row>
        <Row className="App">
        <Col xs={1}></Col>
        <Col xs={10} style={{padding:5}}>
        <Menu />
        </Col>
        <Col xs={1}></Col>
        </Row>
      </>
  );
}

export default Header;
