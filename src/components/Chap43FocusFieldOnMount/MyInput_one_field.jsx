/**
 * Calling ref.current.focus() during render is wrong because it is a side 
 * effect. Side effects should either be placed inside an event handler or be 
 * declared with useEffect. In this case, the side effect is caused by the 
 * component appearing rather than by any specific interaction, so it makes 
 * sense to put it in an Effect.
 * To fix the mistake, wrap the ref.current.focus() call into an Effect 
 * declaration. Then, to ensure that this Effect runs only on mount rather 
 * than after every render, add the empty [] dependencies to it.
 * 
 */

import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

MyInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
export function MyInput({value="", onChange}){
  
  const ref = useRef(null);

  // TODO: Fix this part.
  useEffect(()=>{
    console.log("Using effect.");
    ref.current.focus();
  }, []);
  
  return(
    <input
      ref={ref}
      type="text"
      value={value}
      onChange={onChange}
    ></input>
  )
}