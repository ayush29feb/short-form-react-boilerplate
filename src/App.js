import React, { useState, useEffect } from 'react';
import './App.css';
import Feed from './Feed';

function App() {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load media from JSON file
    fetch(`${process.env.PUBLIC_URL}/media.json`)
      .then(response => response.json())
      .then(data => {
        setMedia(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading media:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="App">
      <Feed media={media} />
    </div>
  );
}

export default App;
