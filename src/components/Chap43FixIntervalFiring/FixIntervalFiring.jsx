import { useState } from "react";
import {Counter} from "./Counter";

export function FixIntervalFiring(){

  const [show, setShow] = useState(false);

  return(
    <>
      <button
        onClick={()=>setShow(s=>!s)}
      >{show ? "Hide" : "Show"}
      </button>
      <br/>
      <hr/>
      {show && <Counter/>}
    </>
  )
}