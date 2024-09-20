export function createLog(roomId){
  return {
    connect(){
      console.log(`🪲 Connect to log for ${roomId} room ...`);
    },
    disconnect(){
      console.log(`🪸 Disconnect from log for ${roomId} room.`);
    }
  }
}