import React from 'react';
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap';

const Home = () => {

return (
    <React.Fragment>
        <Row>
          <Col>
          <ButtonGroup>
            <Button href="/login">Se connecter</Button>
            <Button href="/signup">S'inscrire</Button>
          </ButtonGroup>
          </Col>
          <Col>
            <Button href="/focus+">Accessibilité des documents</Button>
          </Col>
          <Col>
            <Button href="/forum">Forum</Button>
          </Col>
          <Col>
            <Button href="/video">Vidéo tuto</Button>
          </Col>
        </Row>
    </React.Fragment>
    );
};

export default Home;