import React from 'react';
import MovieList from './MovieList'
import Nav from './Nav';
import './App.css';
import AddMovie from './AddMovie';
import {MovieProvider} from './MovieContext'; {/**We wrap MovieProvider because in the same file we are exporting multiple things This is also where we link our movie list as it resides in MovieProvider and is called in other components from MovieContext*/}
function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
