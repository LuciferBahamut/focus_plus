import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { API_URL } from '../utils/constants';

const Forum = () => {

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
  {errorMsg && <p className="errorMsg">{errorMsg}</p>}
  <Col md={{ offset: 10 }}>
      <Button href="/createPost">Nouveau Poste</Button>
  </Col>
  </Row>
  <table className="files-table">
    <tbody>
      {userMessage.length > 0 ? (
        userMessage.map(
          ({ _id, username, message }) => (
            <tr key={_id}>
              <td className="file-title">{username}</td>
              <td className="file-description">{message}</td>
            </tr>
          )
        )
      ) : (
        <tr>
          <td colSpan={3} style={{ fontWeight: '300' }}>
            Pas de post trouvé, veuillez réessayez plus tard.
          </td>
        </tr>
      )}
    </tbody>
  </table>
  <Row>
  <Col md={{ offset: 10 }}>
    <Button href="/createPost">Nouveau Poste</Button>
  </Col>
  </Row>
</React.Fragment>
);
};

export default Forum;