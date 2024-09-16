/**
 * State works like a snapshot, so you can’t read the latest state from an asynchronous operation like a timeout. However, you can keep the latest input text in a ref. A ref is mutable, so you can read the current property at any time. Since the current text is also used for rendering, in this example, you will need both a state variable (for rendering), and a ref (to read it in the timeout). You will need to update the current ref value manually.
 */

import { useState } from "react";
import { useRef } from "react";
export function ReadLatestStateApp(){

  const [text, setText] = useState("");
  let textRef = useRef(null);

  function handleSend(){
    // set a timeout
    setTimeout(
      () => {alert(textRef.current)},
      6000
    );
    return;
  }
  function handleTextChange(e){
    setText(e.target.value);
    textRef.current = e.target.value;
  }

  return(
    <>
      <input
        value={text}
        onChange={(e) => handleTextChange(e)}
      ></input>
      <button
        type="button"
        onClick={handleSend}
      >Send</button>
    </>
  )
}