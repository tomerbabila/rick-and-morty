import React, { useEffect } from 'react';
import './App.css';
import { fetchCharacters } from './api/client';

function App() {
  useEffect(() => {
    fetchCharacters()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching characters:', error);
      });
  }, []);

  return <div>Welcome</div>;
}

export default App;
