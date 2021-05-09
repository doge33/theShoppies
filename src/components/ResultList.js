import React from 'react';
import MovieItem from './MovieItem';

export default function ResultList({searchResults}){

  //removing potential duplicate results from omdb api call:
  const uniqueHash = searchResults.reduce((acc, cur) => (acc[cur.imdbID] = cur, acc), {});
  const uniqueResults = Object.values(uniqueHash);
  const renderedList = uniqueResults.map(movie => {
    return <li key={movie.imdbID}><MovieItem  movie={movie} /></li>
  })
  
  return(
    <div className="ui segment">
      <label>Results for 'insert search term'</label>
      <div className="ui relaxed divided list">
        {renderedList}
      </div>
    </div>
  )
}