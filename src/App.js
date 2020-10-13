import React from 'react';

import './App.css';
import DropZone from './dropzone/DropZone';

function App() {
  return (
    <div>
        <p className="title">React Drag and Drop Image Upload</p>
        <div className="content">
          <DropZone />
        </div>
    </div>
  );
}

export default App;
