import React from 'react'

const MovieListSearch = (props) => {
  return (
    <div className='col col-sm-3'>
        <input 
            type="text"
            className='form-control'
            placeholder='Type to search....'
            value={props.value}
            onChange={(event)=>props.setSearchValue(event.target.value)}
            />
    </div>
  )
}

export default MovieListSearch