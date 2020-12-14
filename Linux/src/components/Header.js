import React from 'react';
import Focus_plus from '../image/logo_focus+.png';
import Logo from '../image/logo_ministère.png';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Container fluid style={{paddingLeft: '0px', paddingRight: '0px'}}>
    <div className="header">
      <Row noGutters>
        <Col md={4}>
          <img src={Logo}
          alt="ministère logo"
          title="Logo du ministère"></img>
        </Col>
        <Col md={{ span: 4, offset: 4 }}>
          <img src={Focus_plus}
          alt="Focus+ logo"
          height="100"
          title="Focus + logo"></img>
        </Col>
      </Row>
      <p>Ceci n'est qu'un prototype</p>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Accueil</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/focus+">Conversion</Nav.Link>
        <Nav.Link href="/video">Tutoriels</Nav.Link>
        <Nav.Link href="/forum">Forum d'entraide</Nav.Link>
        <Nav.Link href="/">À propos</Nav.Link>
      </Nav>
    </Navbar>
    </div>
    </Container>
  );
};

export default Header;