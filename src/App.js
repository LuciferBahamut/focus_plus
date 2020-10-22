//\\ DEPENDENCIES //\\
import React from 'react';
import './App.css';
import DropZone from './dropzone/DropZone';

//\\ MAIN //\\
function App() { // LANCE LA FONCTION APP (DEBUT DU SERVER)
  //\\ AFFICHAGE //\\
  return (
    <div>
        <p className="title">React Drag and Drop Image Upload</p>
        <div className="content">
          <DropZone />
        </div>
    </div>
  );
}

//\\ EXPORTS //\\
export default App;
