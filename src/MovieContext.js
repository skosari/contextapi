import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = () => {
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

    );
}