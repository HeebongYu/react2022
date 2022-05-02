import React from "react";
import YoutubeItem from "../includes/YoutubeItem";

function YoutubeList(props) {
  console.log(props);
  return (
    <div className="youtube__list">
      <ul>
        {props.videos.map((videos, index) => (
          <YoutubeItem key={index} videos={videos} />
        ))}
      </ul>
    </div>
  );
}

export default YoutubeList;
