import React from 'react';
import NominateButton from './NominateButton';

export default function MovieItem({movie}){
  return(
    <div className="item left">   
      {/* <div className="content"> */}
        <div className="header row">
          <div>
            <i className="ui film large icon" />
            <span>{movie.Title}</span>
            <span> ({movie.Year})</span>
          </div>
          <div>
            <NominateButton />  
          </div>
        </div>
             
      {/* </div> */}
      
    </div>
  )
}