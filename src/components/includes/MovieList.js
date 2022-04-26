import React from 'react'
import MovieItem from "../includes/MovieItem";

function MovieList(props) {
  return (
    <div className='movie__list'>
      <ul>
        {props.videos.map((videos, index) => (
          <MovieItem key={index} videos={videos} />
        ))}
      </ul>
    </div>
  )
}

export default MovieList