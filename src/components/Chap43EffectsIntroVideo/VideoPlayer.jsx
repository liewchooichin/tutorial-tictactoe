import { useState, useRef, useEffect } from 'react';
import PropTypes from "prop-types";


/**If I use a function call, there will be 
 *  TypeError: Cannot read properties of 
 *  undefined (reading 'current')
 */
/**Function to control play or pause */
function controlPlayOrPause(ref, isPlaying){ 
  if(isPlaying){
    ref.current.play();
  } else {
    ref.current.pause();
  }
}


VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
}
function VideoPlayer({isPlaying, src}){
  const ref = useRef(null);

  /** Cannot use function call. The value
   * of Ref cannot be determined in the 
   * function.
   */
/*   useEffect((ref, isPlaying)=>
    controlPlayOrPause(ref, isPlaying))
 */

  /**This code is working. */   
  useEffect(() => {
    if(isPlaying){
      ref.current.play();
    } else {
      ref.current.pause();
    }
  })
 
  return(
    <video 
      ref={ref}
      src={src}
      width="300"
      height="300"
    ></video>
  )
}


export function VideoPlayerApp(){

  const [isPlaying, setIsPlaying] = useState(false);

  return(
    <>
    <div style={{display:"inline-flex"}}>
      <button onClick={()=>setIsPlaying(!isPlaying)}
      >{isPlaying ? 'Pause' : 'Play'}
      </button>

      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      ></VideoPlayer>
      </div>
    </>
  )
}