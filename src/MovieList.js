import React, {useState} from 'react';
import Movie from './Movie';

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      name: 'Harry Potter',
      price: '$10',
      id: 468413
    },
    {
      name: 'Lord Of The Rings',
      price: '$12',
      id: 46813
    },
    {
      name: 'Inception',
      price: '$14',
      id: 68468341
    }
  ]);
  return(
  <div>
    {movies.map(movie => (
      <Movie name={movie.name} price={movie.price} key={movie.id} />
    ))}
  </div>
  );
}

export default MovieList;