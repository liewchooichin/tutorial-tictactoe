import { useEffect } from "react";
import { createConnection } from "./ChatConnection";

export function ChatRoomApp(){

  // No state or props for dependencies.
  // So, using [] for dependencies.
  /**
   * React will call your cleanup function each time before 
   * the Effect runs again, and one final time when the 
   * component unmounts (gets removed).
   */
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    // clean up
    return (() => connection.disconnect());
  }, [])


  return(
    <>
    <h1>Welcome to the chat.</h1>
    </>
  )
}

