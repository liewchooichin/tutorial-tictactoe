import { useState, useRef } from "react";
import { useReducer, useContext } from "react";
import { inputTextReducer } from "./ChatInputReducer";
import { TextContext, TextContextDispatch } 
  from "./InputTextContext";
import { InputText } from "./InputText";
import { ChatButtons } from "./ChatButtons";
import { isSendingReducer } from "./ChatInputReducer";
import { IsSendingContext, IsSendingContextDispatch } 
  from "./InputTextContext";



/**Initial values */
const initialText = "";



export function ChatInputApp(){
  // input text
  const [text, textDispatch] = 
    useReducer(inputTextReducer, initialText);
  // is sending status
  const [isSending, isSendingDispatch] = 
  useReducer(isSendingReducer, false);

  return(
    <>

    <TextContext.Provider value={text}>
    <IsSendingContext.Provider value={isSending}>
      <TextContextDispatch.Provider value={textDispatch}>
      <IsSendingContextDispatch.Provider value={isSendingDispatch}>

        <InputText></InputText>
        <ChatButtons></ChatButtons>

      </IsSendingContextDispatch.Provider>
      </TextContextDispatch.Provider>
    </IsSendingContext.Provider>
    </TextContext.Provider>

    </>
  )
}