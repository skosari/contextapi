import React, {useState, createContext} from 'react';

//MovieContext is imported in every component we need to access the MovieProvider state
export const MovieContext = createContext();

//MovieProvider is imported in App.js
export const MovieProvider = (props) => {
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
    return (
      //This statement along with importing MovieProvider in App.js and linking our components there in the return statement and then in the individual components accessing using the MovieContext explained below
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children} {/**props.children will allow our outher components to access our movie list*/}
        </MovieContext.Provider>
    );
}