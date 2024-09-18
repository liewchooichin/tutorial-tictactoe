import { useState } from "react";
import { MyInput }from "./MyInput";

export function UpperCaseForm(){
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("Kiku");
  const [lastName, setLastName] = useState("Maru");
  const [upper, setUpper] = useState(false);
  const name = `${firstName} ${lastName}`;

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
          Enter your first name: 
          <MyInput 
            value={firstName}
            onChange={e=>setFirstName(e.target.value)}
            shouldFocus={true}
          ></MyInput>
        </label>

        <label>
        Enter your last name: 
          <MyInput 
            value={lastName}
            onChange={e=>setLastName(e.target.value)}
            shouldFocus={false}
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