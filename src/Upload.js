import React, { useState, useRef } from 'react'; 
import { Link } from 'react-router-dom';
import './Upload.css';

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Selected File:', selectedFile);
    
    fileInputRef.current.value = null;
    setSelectedFile(null);
  };

  return (
    <div>
      <Link to="/"><button className='but3'>Back Home</button></Link>
      <div className="upload-container">
  <form onSubmit={handleSubmit}>
    <div className="upload-box">
       <h1 className='content'>Tea Leaf Diagnosis Assisted by AI </h1> 
      <label className="upload-button">
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleFileChange}
          ref={fileInputRef}
        />
        Upload
      </label>
    </div>
  </form>
</div>

    </div>
  );
}

export default Upload;
