
function connect(){
  console.log('✅ Connecting...');
}
function disconnect(){
  console.log('❌ Disconnected.');
}

export function createConnection(){
  return{
    connect,
    disconnect,
  }
}