import React from 'react';

export default function NominateButton({movieItem, onButtonClick}){

  return(
    <button 
      className="ui mini red basic button" 
      onClick={() => onButtonClick(movieItem)}
    >
        Remove
    </button> 
  )
}