import React from 'react';
import MovieItem from './MovieItem';


export default function MovieList({searchTerm, movieList, name, onNomination}){

  //removing potential duplicate results from omdb api call:
  const uniqueHash = movieList.reduce((acc, cur) => (acc[cur.imdbID] = cur, acc), {});
  const uniqueResults = Object.values(uniqueHash);
  const renderedList = uniqueResults.map(movie => {
    return (
      <li key={movie.imdbID}>
        <MovieItem  movie={movie} listName={name} onNomination={onNomination} />
      </li>
    )
  })
  
  return(
    // <div className="ui segment movie-list">
    //   <h3>Results for "{searchTerm}" :</h3>
      <div className="ui relaxed divided list">
        {renderedList}
      </div>
    // </div>
  )
}