import { useState, useEffect } from "react";
import { createConnection } from "./Chat";
import { createLog } from "./LogVisit";
import PropTypes from "prop-types";
import { ChatRoomFixed } from "./ChatRoomFixed";

ChatRoom.propTypes = {
  serverUrl: PropTypes.string.isRequired,
  roomId: PropTypes.string.isRequired,
  
};
function ChatRoom({ serverUrl, roomId }){

  console.log("In Chat room " + roomId);
  // Create connection
  useEffect(()=>{
    // setup function
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    // cleanup function
    return (() => connection.disconnect());
  }, [serverUrl, roomId]);

  // Create analytics log
  useEffect(()=>{
    // setup function
    const log = createLog(roomId);
    log.connect();
    // cleanup function
    return (()=>log.disconnect());
  }, [roomId]);

  return (
    <h1>Welcome to the {roomId} room at server {serverUrl}.</h1>
  )
}



const serverUrlList = [
  "http://localhost:1000",
  "http://localhost:2000",
  "http://localhost:3000",
]

export function ChatRoomReSync(){
  const [serverUrl, setServerUrl] = useState("http://localhost:1000");
  const [roomId, setRoomId] = useState("general");
  const [show, setShow] = useState(false);
  const [showRoom2, setShowRoom2] = useState(false);

  return(
    <>
    <label>
      Choose a server: {" "}
      <select
        name="selectServer"
        value={serverUrl}
        onChange={(e)=>{setServerUrl(e.target.value); 
          console.log(e.target.name, e.target.value)}}
      >
        <option value={serverUrlList[0]}>{serverUrlList[0]}</option>
        <option value={serverUrlList[1]}>{serverUrlList[1]}</option>
        <option value={serverUrlList[2]}>{serverUrlList[2]}</option>
      </select>
    </label>
    <label>
      Choose the chat room: {" "}
      <select
        name="selectChatRoom"
        value={roomId}
        onChange={(e)=>{setRoomId(e.target.value); 
          console.log(e.target.name, e.target.value)}}
      >
        <option value="general">General</option>
        <option value="travel">Travel</option>
        <option value="music">Music</option>
        <option value="cooking">Cooking</option>
      </select>
    </label>

    <button
      name="btnChat"
      onClick={(e)=>{setShow(!show); 
        console.log(e.target.name, " show ", show, " room id ", roomId);
      }}
    >{show ? "Close chat" : "Open chat"}
    </button>
    
    {show && <hr/>}
    {show && <ChatRoom serverUrl={serverUrl} roomId={roomId}></ChatRoom>}

    <hr/>

    <button
      name="btnRoom2"
      onClick={(e)=>{setShowRoom2(!showRoom2); 
        console.log(e.target.name, " show ", showRoom2);
      }}
    >{showRoom2 ? "Close Room 2" : "Open Room 2"}
    </button>
    
    {showRoom2 && <hr/>}
    {showRoom2 && <ChatRoomFixed></ChatRoomFixed>}

    </>
  )
}