import React, { useState} from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { API_URL } from '../utils/constants';

const Connection = (props) => {
  const [state, setState] = useState({
    username: '',
    password: ''
  });
  const [errorMsg, setErrorMsg] = useState('');
  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };
  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
        const { username, password } = state;
        if (username.trim() !== '' && password.trim() !== '') {
          const formData = new FormData();
          formData.append('username', username);
          formData.append('password', password);
          setErrorMsg('');
          await axios.post(`${API_URL}/login`, formData, {
          headers: {
          'Content-Type': 'multipart/form-data'
          }
            });
        } else {
          setErrorMsg('Please enter all the field values.');
        }
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };

  return (
    <React.Fragment>
       <Row>
           <Col> 
           <Button href="/signup">S'incrire</Button>
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
                value={state.username || ''}
                placeholder="Entrez votre nom d'utilisateur"
                onChange={handleInputChange}
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
                value={state.password || ''}
                placeholder="Entrez votre mot de passe"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Se Connecter
        </Button>
      </Form>
    </React.Fragment>
  );
};
export default Connection;