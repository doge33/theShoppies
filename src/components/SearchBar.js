import React, {useState} from 'react';

export default function SearchBar({handleSubmit}){

  const [term, setTerm] = useState('');

  const onFormSubmit = evt => {
    evt.preventDefault();
    handleSubmit(term)
  }

  return(
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        {/* <div className="ui header"> */}
            {/* <i class="search icon"></i> */}
            {/* Movie Title
          </div> */}
          <div className="field">
            <label>Movie Title</label>
            <div className="ui search">
              <div className="ui icon input">
                <i className="search icon"></i>
                <input 
                  className="prompt" 
                  type="text" 
                  placeholder="Search movies..." 
                  value={term}
                  onChange={(evt) => setTerm(evt.target.value)}
                />
              </div>
              {/* <div className="results"></div>  */}
              {/* to-do: add suggestions into results */}
            </div>
          </div>
      </form>
      
    </div>

  )
}
