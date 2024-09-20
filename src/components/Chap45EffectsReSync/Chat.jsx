export function createConnection(serverUrl, roomId) {
  // A real implementation would actually connect to the server
/*   function connect(serverUrl, roomId){
    console.log(`✅ Connecting to ${roomId} room at ${serverUrl} ...`);
  }
  function disconnect(serverUrl, roomId){
    console.log(`❌ Disonnecting from ${roomId} room at ${serverUrl}.`);
  }
 */
  return {
    connect(){
      console.log(`✅ Connecting to ${roomId} room at ${serverUrl} ...`);
    },
    
    disconnect(){
      console.log(`❌ Disonnecting from ${roomId} room at ${serverUrl}.`);
    },
  }
}