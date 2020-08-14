import React from 'react';
import MovieList from './MovieList'
import Nav from './Nav';
import './App.css';
import {MovieProvider} from './MovieContext'; {/**We wrap MovieProvider because in the same file we are exporting multiple things */}
function App() {
  return (
    <div className="App">
      <Nav />
      <MovieList />
    </div>
  );
}

export default App;
