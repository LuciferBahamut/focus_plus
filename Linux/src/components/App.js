import React, { useState, useRef } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { API_URL } from '../utils/constants';

const App = (props) => {
  const [file, setFile] = useState(null); // state for storing actual image
  const [previewSrc, setPreviewSrc] = useState(''); // state for storing previewImage
  const [errorMsg, setErrorMsg] = useState('');
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show preview only for images
  const dropRef = useRef(); // React ref for managing the hover state of droppable area

  const onDrop = (files) => {
    const [uploadedFile] = files;
    setFile(uploadedFile);
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewSrc(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
    dropRef.current.style.border = '2px dashed #e9ebeb';
  };

  const updateBorder = (dragState) => {
    if (dragState === 'over') {
      dropRef.current.style.border = '2px solid #000';
    } else if (dragState === 'leave') {
      dropRef.current.style.border = '2px dashed #e9ebeb';
    }
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      if (file) {
      const formData = new FormData();
      formData.append('file', file);

      setErrorMsg('');
      await axios.post(`${API_URL}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data' 
        }
      });
      props.history.push('/list');
    } else {
      setErrorMsg("S'il vous plaît, ajoutez votre image");
    }
    } catch (error) {
      error.response && setErrorMsg(error.response.data);
    }
  };

  return (
    <React.Fragment>
      <Form className="search-form" onSubmit={handleOnSubmit}>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <Row>
          <Col>
            Placez votre image ci-dessous !
          </Col>
        </Row>
        <div className="upload-section">
          <Dropzone 
          onDrop={onDrop}
          onDragEnter={() => updateBorder('over')}
          onDragLeave={() => updateBorder('leave')}
          >
            {({ getRootProps, getInputProps }) => (
            <div {...getRootProps({ className: 'drop-zone' })} ref={dropRef}>
              <input {...getInputProps()} />
              <p>Glissez votre image ici ou cliquez ici pour la sélectionner</p>
              {file && (
              <div>
                <strong>Image sélectionnée:</strong> {file.name}
              </div>
              )}
            </div>
            )}
          </Dropzone>
          {previewSrc ? (
          isPreviewAvailable ? (
          <div className="image-preview">
            <img className="preview-image" src={previewSrc} alt="Preview" />
          </div>
    ) : (
      <div className="preview-message">
        <p>L'aperçu de votre image est indisponible</p>
      </div>
    )
  ) : (
  <div className="preview-message">
    <p>L'aperçu de votre image s'affichera ici après votre sélection</p>
  </div>
  )}
  </div>
        <Button variant="primary" type="submit">
          Envoyer
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default App;