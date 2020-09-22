import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import './App.css';

function App() {
  const onDrop = useCallback(acceptedFiles => {
      let formData = new FormData()
      formData.append('uploadedFiles' ,acceptedFiles)
      console.log(formData)
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  return (
    <div {...getRootProps()} className="dropzone-container">
      <input {...getInputProps()} /> 
      {
        isDragActive ?
          <p>Drop your files here</p> :
          <p>Drag and drop or click to select your files</p>
      }
    </div>
  );
}

export default App;
