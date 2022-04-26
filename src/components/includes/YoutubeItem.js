import React from 'react'

function YoutubeItem(props) {
  return (
    <li>
      <a href={`https://www.youtube.com/watch?v=${props.videos.id.videoId}`}>
        <img src={props.videos.snippet.thumbnails.medium.url} alt={props.videos.snippet.title} />
        <p>{props.videos.snippet.title}</p>
      </a>
    </li>
  )
}

export default YoutubeItem