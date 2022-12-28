import React from "react";

const YoutubeEmbed = ({ embedId, videoSrc }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={videoSrc == 'youtube' ? `https://www.youtube.com/embed/${embedId}` :
            videoSrc == 'gDrive' ? `https://drive.google.com/file/d/${embedId}/preview` : `${embedId}`
    }
      frameBorder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;