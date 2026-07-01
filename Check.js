import React, { useState } from 'react';

function Check() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [prediction, setPrediction] = useState('');
  const [confidence, setConfidence] = useState('');

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleApply = async () => {
    if (!selectedImage) {
      alert('Please select an image first.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setPrediction(data.class);
      setConfidence(data.confidence);
    } catch (error) {
      console.error('Error:', error);
      alert('Prediction failed. Is the backend running?');
    }
  };

  return (
    <div>
      <h2>Check</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleApply}>Apply</button>
      {prediction && (
        <div>
          <h3>Prediction: {prediction}</h3>
          <p>Confidence: {(confidence * 100).toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
}

export default Check;