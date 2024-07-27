import "./VideoPlayer.css";
import {useRef} from "react";

const VideoPlayer = ({playState, setPlayState}) => {

 const player = useRef(null);

 function closePlayer(e){
    if(e.target === player.current){
        setPlayState(false);
    }
 }

  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
        <video src='/video/vdo.mp4' autoPlay muted controls></video>
    </div>

  )
}

export default VideoPlayer
