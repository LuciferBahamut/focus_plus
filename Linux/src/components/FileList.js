import React, { useState, useEffect } from 'react';
import download from 'downloadjs';
import axios from 'axios';
import { API_URL } from '../utils/constants';

const FilesList = () => {
    const [filesList, setFilesList] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
      const getFilesList = async () => {
        try {
          const { data } = await axios.get(`${API_URL}/getAllFiles`);
          setErrorMsg('');
          setFilesList(data);
        } catch (error) {
          error.response && setErrorMsg(error.response.data);
        }
      };

      getFilesList();
    }, []);

    const downloadFile = async (id, path, mimetype) => {
      try {
        const result = await axios.get(`${API_URL}/download/${id}`, {
          responseType: 'blob'
        });
        const split = path.split('/');
        const filename = split[split.length - 1];
        setErrorMsg('');
        return download(result.data, filename, mimetype);
      } catch (error) {
        if (error.response && error.response.status === 400) {
          setErrorMsg('Erreur pendant le téléchargement. Réessayer plus tard.');
        }
      }
    };
    
    return (
      <div className="files-container">
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <table className="files-table">
          <thead>
            <tr>
              <th>Vos images sont disponibles</th>
            </tr>
          </thead>
          <tbody>
            {filesList.length > 0 ? (
              filesList.map(
                ({ _id, file_path, file_mimetype }) => (
                  <tr key={_id}>
                    <td>
                      <a
                        href="#/"
                        onClick={() =>
                          downloadFile(_id, file_path, file_mimetype)
                        }
                      >
                        Télécharger
                      </a>
                    </td>
                  </tr>
                )
              )
            ) : (
              <tr>
                <td colSpan={3} style={{ fontWeight: '300' }}>
                  Pas d'image générée trouvée.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };

  export default FilesList;