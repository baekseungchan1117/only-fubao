import React from 'react';
import axios from 'axios';

export default function ImageUpload(props) {
  const handleFileUpload = async (event) => {
    try {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post('http://localhost:8000/community/lounge/image/upload', formData);
      props.setImage(response.data.filepath);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileUpload} />
    </div>
  );
}
