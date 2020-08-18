import React, {useContext} from 'react';
import './Nav.css';
import {MovieContext} from './MovieContext';

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return(
    <div>
      <h1>MovieList ContextAPI app</h1>
      <p style={{color:'red'}}>List of Movies {movies.length}</p>
      <p>{movies[0].name}</p>
    </div>
  ); 
}


export default Nav;
