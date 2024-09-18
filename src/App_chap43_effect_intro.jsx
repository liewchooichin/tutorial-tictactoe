import { useState } from 'react'
import viteLogo from '/vite.svg'
//import './App.css'
import Container from 'react-bootstrap/Container'

/* Tutorial: Chapter 3-5 */
import { VideoPlayerApp } 
  from './components/Chap43EffectsIntroVideo/VideoPlayer';  
import { VideoPlayerWithDependency } 
  from './components/Chap43EffectsIntroVideo/VideoPlayerWithDependency';
import { ChatRoomApp } 
  from './components/Chap43EffectsChatRoom/ChatRoomApp';
import { FetchPromise } 
  from './components/Chap43EffectsFetchPromise/FetchPromise';

function App() {

  return (
  <Container>

    <h2>Fetch and clean up a fetch</h2>
      <p>The connection is in the console log.</p>
    <div style={{marginBottom:"2em"}}>
      <FetchPromise></FetchPromise>
    </div>

    <h2>Chat room using Effect to connect and 
      disconnect from server</h2>
      <p>The connection is in the console log.</p>
    <div style={{marginBottom:"2em"}}>
      <ChatRoomApp></ChatRoomApp>
    </div>

    <h2>Video player with Ref and Effect</h2>
    <div style={{marginBottom:"2em"}}>
      <VideoPlayerWithDependency></VideoPlayerWithDependency>
    </div>

    <h2>Video player with Ref and Effect</h2>
    <div style={{marginBottom:"2em"}}>
      <VideoPlayerApp></VideoPlayerApp>
    </div>

  </Container>
  );
}

export default App
