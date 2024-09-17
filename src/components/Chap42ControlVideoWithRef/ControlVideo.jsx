import { useState, useRef } from "react";

export function ControlVideo(){
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);

  function handleClick(){
    // toggle the playing or pausing
    const newPlayingStatus = !isPlaying;
    setIsPlaying(newPlayingStatus);
    newPlayingStatus 
      ? ref.current.play() 
      : ref.current.pause();

    return;
  }


  return(
    <>
      <button onClick={(e) => handleClick(e)}
      >Play</button>
      <p>Click the button to pause or play</p>
      <video
        width="250"
        ref={ref}
        onPlay={()=>setIsPlaying(true)}
        onPause={()=>setIsPlaying(false)}
      >
      <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  )
}
