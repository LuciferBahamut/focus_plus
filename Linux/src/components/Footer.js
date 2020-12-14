import React from 'react';
import Logo from '../image/lab110bis.png';
import { Row, Col, Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      <Row>
        <Col md={2}>
          <img src={Logo}
          alt="Lab110bis logo"
          title="Logo du Lab110Bis"></img>
          </Col>
        <Col>
          <p>
          Ce prototype de la solution Focus+ a été réalisé dans le cadre de l'accompagnement du projet par le 110bis, lab d'innovation du Ministère de l'Education nationale, de la Jeunesse et des Sports.
          </p>
        </Col>
        <Col>
          <Button href="/" variant='link'>Mentions légales</Button>
        </Col>
        </Row>
    </div>
  )};

export default Footer;