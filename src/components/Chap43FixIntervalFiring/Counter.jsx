/**
 * To fix this code, save the interval ID returned by setInterval, and 
 * implement a cleanup function with clearInterval:
 */

import { useState, useEffect } from 'react';

export function Counter(){
  const [count, setCount] = useState(0);
  
  useEffect(()=>{
    function onTick(){
      setCount(c=>(c+1));
    }
    // call effect
    console.log("In interval effect");
    let intervalId = setInterval(onTick, 1000);

    // clean up
    console.log("Clean up interval");
    return () => clearInterval(intervalId);
  }, [])

  return(
    <h1>
      {count}
    </h1>
  )
}