import { useState } from 'react';
import { useRef } from 'react';


export function StopWatchApp(){

  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  // intervalRef stores the intervalId
  const intervalRef = useRef(null);

  function handleStart(){
    // Start counting
    const timeStart = Date.now();
    
    setStartTime(timeStart);
    setNow(timeStart);

    // Update the current time every 10ms.
    // setInterval() global function.
    // repeatedly calls a function or executes a
    // code snippet, with a fixed time delay between
    // each call.
    // The returned intervalID is a numeric, non-zero value
    // which identifies the timer created by the call to 
    // setInterval(); this value can be passed to clearInterval()
    // to cancel the interval.
    // setInterval(func, delay)
    // delay is in miliseconds. 
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(
      ()=>updateNow(), 
      1000
    );  
  }
  function updateNow(){
    setNow(Date.now());
  }
  function handleStop(){
    clearInterval(intervalRef.current);
  }

  // count elapsed time
  let secondsPassed = 0;
  if(startTime != null && now != null){
    secondsPassed = (now - startTime) / 1000;
  }
  

  return(
    <>
    <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
    <button type="button"
      onClick={handleStart}
    >Start timer</button>
    <button type="button"
      onClick={handleStop}
    >Stop timer</button>
    <h2>Time start: {startTime}</h2>
    <h2>Time stop: {now}</h2>
    <h2>Elapsed time: {secondsPassed}</h2>
    </>
  )
}