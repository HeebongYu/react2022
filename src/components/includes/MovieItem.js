import React from 'react'

function MovieItem(props) {
  return (
    <li>
      <a href={`https://www.themoviedb.org/movie/${props.videos.id}}`}>
        <img src={`https://image.tmdb.org/t/p/w500/${props.videos.poster_path}`} alt={props.videos.title} />
        <p>{props.videos.title}</p>
      </a>
    </li>
  )
}

export default MovieItem