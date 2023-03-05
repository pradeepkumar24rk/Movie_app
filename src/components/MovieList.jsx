import React from 'react'
import './MovieList.css'
const MovieList = (props) => {
  return (
    <div className='own'>
        {
        props.movies.map((movie,index)=>(
            <div className=''>
                {/* <h1>{movie.Title}</h1> */}
                <div><img src={movie.Poster} alt="movies" /></div>
                
            </div>
        ))
    }
    </div>
  )
}

export default MovieList