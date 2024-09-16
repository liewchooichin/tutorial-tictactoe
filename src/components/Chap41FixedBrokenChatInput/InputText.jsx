import { useContext } from "react";
import { inputTextReducer } from "./ChatInputReducer";
import { TextContext, TextContextDispatch } from "./InputTextContext";
import { IsSendingContext } from "./InputTextContext";

export function InputText(){

  const text = useContext(TextContext);
  const textDispatch = useContext(TextContextDispatch);
  const isSending = useContext(IsSendingContext);

  function handleInputChange(e){
    textDispatch({
      type: "change_text",
      newText: e.target.value,
    })
  }  

  return(
    <>
    <input
      value={text}
      name="textInput"
      disabled={isSending}
      onChange={handleInputChange}
    ></input>
    </>
  )
}