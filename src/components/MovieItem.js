import React, { useState } from 'react';
import NominateButton from './NominateButton';

export default function MovieItem({movie, listName, onNomination, onRemoval}){

  const [isNominated, setNominated] = useState(false);
  console.log(movie, "is", isNominated)

  const handleClick = ()=>{
    setNominated(!isNominated);
  }

  return(
    <div className="ui item movie-item">   
      <div className="content">
        <div className="header">
          <div className="item-detail">
            <i className="film large icon" />
            <span>{movie.Title} ({movie.Year})</span>
          </div>
          <div className="item-detail">
           { 
            <NominateButton movieItem={movie} isNominated={movie.nominated} onButtonClick={onNomination}/>
            } 
          </div>
        </div>
             
      </div>
      
    </div>
  )
}