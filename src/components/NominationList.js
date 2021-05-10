import React from 'react';
import NominationItem from './NominationItem';


export default function MovieList({nominationList, name, onRemoval}){

  const renderedList = nominationList.map(movie => {
    return (
      <li key={movie.imdbID}>
        <NominationItem  movie={movie} listName={name} onRemoval={onRemoval}/>
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