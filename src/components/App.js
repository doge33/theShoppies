import React, {useState} from 'react';
import SearchBar from './SearchBar';
import ResultList from './ResultList';
import omdb from '../APIs/omdb';

export default function App(){

  const [movies, setMovies] = useState([]);

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

  
  return (
    <div className="ui container">
      <h1 className="ui header">The Shoppies</h1>
      <SearchBar handleSubmit={search}/>
      <div className="ui equal width center aligned padded grid">
        <div className="column">
          <ResultList searchResults={movies}/>
        </div>
        <div  className="column">
          Nomination List
        </div>
      </div>
    </div>
    )
};
