import React, {useState, useContext} from 'react';
import {MovieContext} from './MovieContext'
const AddMovie = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updatePrice = (e) => {
        setPrice(e.target.value)
    }

    const addMovie = (e) => {
        e.preventDefault();
        setMovies(x => [...x, {name:name, price:price, id:(x.length +1)}]);//add movie to state - also id is set == to length + 1
        setName('');//reset name field after submit
        setPrice('');//reset price field after submit
    }

    return (
        <form onSubmit={addMovie} name='add'>
            <input type="text" name="name" value={name} onChange={updateName} required placeholder="Movie"/>
            <input type="text" name="price" value={price} onChange={updatePrice} required placeholder="$Price"/>
            <button >Submit</button>
        </form>
    )    
}

export default AddMovie;