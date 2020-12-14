import React from 'react';
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import Conversion from '../image/Conversion.png';
import Tutoriels from '../image/Tutoriels.png';
import Entraide from '../image/Entraide.png';

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
          </Row>
          <Row>
          <Col>
            <Button variant="link" href="/focus+">
              <img src={Conversion} alt="Focus+ button" />
            </Button>
          </Col>
          <Col>
            <Button variant="link" href="/video">
              <img src={Tutoriels} alt="Vidéo button"/>
            </Button>
          </Col>
          <Col>
            <Button href="/forum" variant='link'>
              <img src={Entraide} alt="Forum button"/>
            </Button>
          </Col>
        </Row>
    </React.Fragment>
    );
};

export default Home;