import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { API_URL } from '../utils/constants';

const Forum = () => {

  const [username, setUsername] = useState('');
  const [userMessage, setUserMessage] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const getMessage = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/getAllMessage`);
        setErrorMsg('');
        setUserMessage(data);
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };

    getMessage();
  }, []);

return (
    <React.Fragment>
        <Row>
          <Col>
            Bienvenue sur la partie Forum
          </Col>
        </Row>
    </React.Fragment>
    );
};

export default Forum;