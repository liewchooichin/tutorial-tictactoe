import { useState } from "react";
import { MyInput }from "./MyInput";

export function UpperCaseForm(){
  const [show, setShow] = useState(false);
  const [name, setName] = useState("Kiku");
  const [upper, setUpper] = useState(false);

  return(
    <>
    <button
      onClick={()=>setShow(s => !s)}
    >{show ? "Hide" : "Show"}      
    </button>
    <br/>
    <hr/>
    {
      show && (
        <>
        <label>
          Enter your name: 
          <MyInput 
            value={name}
            onChange={e=>setName(e.target.value)}
          ></MyInput>
        </label>
        <label>
          <input 
            type="checkbox"
            checked={upper}
            onChange={e=>setUpper(e.target.checked)}
          ></input>
          Make it uppercase
        </label>
        <p>Hello, <b>{upper ? name.toUpperCase() : name }</b></p>
        </>
    )}
    </>
  )
}