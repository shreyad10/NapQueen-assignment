import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>
       <h1>What's on your mind??</h1>
       <br></br>
       <p style={{fontSize:'25px'}}>
      This is youtube api service that returns a collection of search results that match the query parameters specified in the API request.
       </p>
    </div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
