/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { Player, BigPlayButton } from 'video-react';

type VideoProps = { 
  videoThumbnail: string | undefined;
  videoSrc: string | undefined; 
}

const VideoComp = (props: VideoProps ) => {

  return (
    <Player poster={props.videoThumbnail} src={props.videoSrc} >
      <BigPlayButton position="center" />
    </Player>
  );
};

export default VideoComp;