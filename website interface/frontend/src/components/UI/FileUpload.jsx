import React, { useState } from 'react';
import axios from 'axios';
import  "../../styles/FileUpload.css";
function FileUpload() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpeg)');
    }
  }

  const handleUpload = (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('image', file, file.name);

    // Use a library such as axios or fetch to send the form data to your server
    axios.get('http://localhost:3000/api/')
    .then(response => console.log(JSON.stringify(formData)))
    .catch(error => console.log(error));
  }

  return (
    <form className="file-upload" >
      <input type="file" onChange={handleChange} />
      <div className="error">{error}</div>
      <button type="submit" onClick={handleUpload}>Upload</button>
    </form>
  );
}

export default FileUpload;