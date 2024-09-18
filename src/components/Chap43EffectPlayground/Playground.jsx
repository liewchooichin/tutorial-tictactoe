import { useState, useEffect } from "react";

export function Playground(){
  const [text, setText] = useState('a');

  useEffect(() => {
    function onTimeout(){
      console.log('⏰ ' + text);
    }
    console.log(`🔵 Schedule ${text} log`);
    const timeoutId = setTimeout(onTimeout, 3000);

    // clean up
    return () => {
      console.log(`🟡 Cancel ${text} log`);
      clearTimeout(timeoutId);
    }
  }, [text])

  return(
    <>
      <label>
        What to log: {" "}
        <input
          value={text}
          onChange={(e)=>setText(e.target.value)}
        ></input>
      </label>
      <h1>Text: {text}</h1>
    </>
  )
}