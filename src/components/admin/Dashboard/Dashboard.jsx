import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [articleContent, setArticleContent] = useState(''); // Store the content of the article
  const [image, setImage] = useState(null); 
  const [imagePreview, setImagePreview] = useState(null); // Image preview URL

  // Function to handle text input change
  const handleOnChange = (e) => {
    setArticleContent(e.target.value); // Update article content
  };

  // Handle opening the modal to create a blog
  const handleClick = () => {
    setOpenModal(true);
  };

  // Handle image file selection
  const handleImage = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // Show preview
    }
  };

  // Function to handle the article submission
  const submitArticle = async () => {
    try {
      const formData = new FormData();
      formData.append('article', articleContent);

      if (image) {
        formData.append('image', image); // Append image to FormData if available
      }

      const response = await axios.post('http://localhost:3000/api/blogs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // This header is required for file uploads
        },
      });

      console.log('Article submitted successfully:', response.data);
      setOpenModal(false);
    } catch (err) {
      console.error('Error submitting article:', err);
    }
  };

  return (
    <div>
      {/* Button to open the modal */}
      <div onClick={handleClick}>Create a Blog</div>

      {/* Modal for adding a blog */}
      {openModal && (
        <div>
          <h4>Add Blog</h4>

          {/* Image upload section */}
          <div>
            <label htmlFor="image-upload" style={{ cursor: 'pointer', color: '#007bff' }}>
              [optional] Add Image
            </label>
            <input
              type="file"
              id="image-upload"
              onChange={handleImage}
              accept="image/*"
              style={{ display: 'none' }}
            />
            {imagePreview && <img src={imagePreview} alt="Preview-Image" width="100px" />}
          </div>

          {/* Text input for the article content */}
          <textarea
            value={articleContent}
            onChange={handleOnChange}
            placeholder="Type your article here"
            rows={6}
            style={{ width: '100%', marginTop: '10px' }}
          />

          {/* Submit button */}
          <button onClick={submitArticle}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
