import React, { useState, useEffect } from 'react';
import Card from './components/Card';

function Carregarpost() {
  const [movies, setMovies] = useState([]);
  


  useEffect(() => {
    fetch('https://my-json-server.typicode.com/marycamila184/movies/movies/')
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch(error => console.error(error));
  }, []);





  return (
    <div className="card-container">
      <Card movies={movies}/>
    </div>
  );
}

export default Carregarpost;