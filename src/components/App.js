import React, {useState} from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import NominationList from './NominationList';

import omdb from '../APIs/omdb';
import './App.css';

export default function App(){

  const [term, setTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [isNominated, setNominated] = useState(false);
  const [nominations, setNominations] = useState([...movies]);

  const search = async(title) => {
    try{
      const response = await omdb.get('/', {
        params:{
          s: title
        }
      });
      console.log(response.data.Search)
      setMovies(response.data.Search)
    } catch(err){
      console.error(err.message)
    }      
  }

  const handleNomination = (movieItem) =>{
    //check if nominations list includes the movie item in question
    const nominated = nominations.some(movie => movie.imdbID === movieItem.imdbID);
    setNominations(nominated ? nominations : [...nominations, movieItem])
    movieItem.nominated = true;
    console.log(movies);
  }

  const handleRemoval = (movieItem) => {
    const nominated = nominations.some(movie => movie.imdbID === movieItem.imdbID);
    setNominations(nominated ? nominations.filter(movie => movie.imdbID !== movieItem.imdbID) : nominations)
    movieItem.nominated = false;
    console.log(nominations);
  }
  
  return (
    <div className="ui container">
      <h1 className="ui header">The Shoppies</h1>
      <SearchBar searchTerm = {term} handleSearchTermChange = {(input)=>setTerm(input)} handleSubmit={search}/>
      <div className="ui equal width center aligned padded grid">
        <div className="column">
          <div className="ui segment movie-list">
            <h3>Results for "{term}" :</h3>
            <MovieList movieList={movies} name={"results"} onNomination={handleNomination}/>
          </div>
        </div>
        <div  className="column">
          <div className="ui segment movie-list">
              <h3>Nominations:</h3>
            <NominationList nominationList={nominations} name={"nominations"} onRemoval={handleRemoval}/>
          </div>
        </div>
      </div>
    </div>
    )
};
