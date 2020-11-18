import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { API_URL } from '../utils/constants';

const Signup = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      if (username.trim() !== '' && password.trim() !== '') {
        setErrorMsg('');
          await axios.post(`${API_URL}/signup`, {
            username: username,
            password: password
          });
      } else {
        setErrorMsg("S'il vous plaît entrez un nom d'utilisateur et un mot de passe.");
      }
    } catch (error) {
      error.response && setErrorMsg(error.response.data);
    }
  };

  return (
    <React.Fragment>
       <Row>
           <Col> 
           <Button href="/login">Se connecter</Button>
           </Col>
       </Row> 
      <Form className="search-form" onSubmit={handleOnSubmit}>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <Row>
          <Col>
            <Form.Group controlId="username">
              <Form.Control
                type="text"
                name="username"
                value={username || ''}
                placeholder="Entrez votre nom d'utilisateur"
                onChange={handleUsernameChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="password">
              <Form.Control
                type="text"
                name="password"
                value={password || ''}
                placeholder="Entrez votre mot de passe"
                onChange={handlePasswordChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          S'incrire
        </Button>
      </Form>
    </React.Fragment>
  );
};
export default Signup;