import React from 'react';

export default function NominateButton({movieItem, isNominated, onButtonClick}){


  const disabled = isNominated ? 'disabled' : ''

  return(
    <button 
      className={`ui mini green basic button ${disabled}`}
      onClick={() => onButtonClick(movieItem)}
    >
        Nominate
    </button> 
  )
}