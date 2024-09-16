import { useContext } from "react";
import { TextContext, TextContextDispatch } 
  from "./InputTextContext";
import { IsSendingContext, IsSendingContextDispatch } 
  from "./InputTextContext";
import { useState } from "react";
import { useRef } from "react";

export function ChatButtons(){

  //const text = useContext(TextContext);
  const textDispatch = useContext(TextContextDispatch);
  const isSending = useContext(IsSendingContext);
  const isSendingDispatch = useContext(IsSendingContextDispatch);
  let timeoutRef = useRef(null);

  function handleClear(){
    textDispatch({
      type: "clear_text"
    }); 
  }


  function handleSend(){
    //setIsSending(true);
    isSendingDispatch({
      type: "set_sending_status",
      newStatus: true
    })
    //clear previous timeout
    //clearTimeout(timeoutRef.current);
    // set new timeout
    timeoutRef.current = setTimeout(
      ()=>timeoutCallback(), 3000
    );
  }
  function timeoutCallback(){
    isSendingDispatch({
      type: "set_sending_status",
      newStatus: false
    })
    alert("Sent!");
  }
  function handleUndo(){
    isSendingDispatch({
      type: "set_sending_status",
      newStatus: false
    })
    clearTimeout(timeoutRef.current)
  }

  return(
    <>
      <button 
        type="button"
        disabled={isSending}
        onClick={handleClear}
      >Clear</button>

      <button
        type="button"
        disabled={isSending}
        onClick={handleSend}
      >
        {isSending ? 'Sending ...' : 'Send'}
      </button>

      {isSending && 
        <button 
          type="button"
          onClick={handleUndo}
        >Undo</button>
      }
    </>
  )
}