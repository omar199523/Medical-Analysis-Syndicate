import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
  const [file, setFile] = useState('');
  const [filename, setFileName] = useState('Choose File');

  const [upLoadFile, setUpLoadFile] = useState({});
  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    axios
      .post('/member/upLoadDataFormFile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        const { fileName, FilePath } = res.data;
        setUpLoadFile({ fileName, FilePath });
        console.log(upLoadFile);
        console.log(res.data);
      })
      .catch((err) => {
        if (err.response.status === 500) {
          console.log('Ther was a problem with the server');
        } else {
          console.log(err.response.data.mas);
        }
      });
  };
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <div>
          <input
            type="file"
            placeholder={filename}
            onChange={handleOnChange}
            accept=".xls,.xlsx"
          />
        </div>
        <button type="submit">upload</button>
      </form>
    </>
  );
}

export default FileUpload;
