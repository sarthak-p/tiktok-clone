import React, { useRef, useState } from 'react';
import VideoFooter from "./VideoFooter"; 
import './Video.css'; 

function Video() {
    const [playing, setPlaying] = useState(false); 
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false); 
        } else {
            videoRef.current.play();
            setPlaying(true); 
        }
    };

  return (
      <div className="video">
          <video
              className="video_player"
              loop
              onClick={onVideoPress}
              ref={videoRef}
              src="https://v21-us.tiktokcdn.com/video/tos/useast2a/tos-useast2a-pve-0068/e80d586ec1064d05814d14a7efedc18c/?VExpiration=1628307964&VSignature=027f2ce9f63c9f5c3bfdd6037752ae4b&a=1233&br=6080&bt=3040&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Qq.UCEXk_4ka&l=202108062145580101890660475406CBEB&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzY6ajU6ZnBzNjMzNzczM0ApZjs0Z2g0NTszN2Q8Zmg5NGdlLXJycjRnLm1gLS1kMTZzcy9hXjAyYzY2XjY2NGMvLzE6Yw%3D%3D&vl=&vr=">
          </video>
          <VideoFooter />
    </div>
  );
}

export default Video;

