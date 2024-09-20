import { useEffect } from "react";
import { createConnection } from "./Chat";
import { createLog } from "./LogVisit";


export function ChatRoomFixed(){

  /**If the value cannot be changed, then there
   * is no dependencies.
   */
  const serverUrl = "https://localhost:7373";
  const roomId = "Universal";

  console.log("In Chat room " + roomId);
  // Create connection
  useEffect(()=>{
    // setup function
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    // cleanup function
    return (() => connection.disconnect());
  }, []);

  // Create analytics log
  useEffect(()=>{
    // setup function
    const log = createLog(roomId);
    log.connect();
    // cleanup function
    return (()=>log.disconnect());
  }, []);

  return (
    <h1>Welcome to the {roomId} room at server {serverUrl}.</h1>
  )
}
