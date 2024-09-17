
import { useRef } from "react";

export function FocusTextInput(){
  // Create a DOM Ref
  const inputRef = useRef(null);

  function handleFocus(){
    inputRef.current.focus();
  }
  function handleColor(){
    inputRef.current.focus();
    inputRef.current.style.color="lightsalmon";
    inputRef.current.style.fontWeight="bold";
  }

  return(
    <>
      <input ref={inputRef} >
      </input>

      <button 
        onClick={handleFocus}
      >Focus the input box
      </button>

      <button
        onClick={handleColor}
      >Color the input box
      </button>
    </>
  )


}