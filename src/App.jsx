import { useState } from 'react'
import viteLogo from '/vite.svg'
//import './App.css'
import Container from 'react-bootstrap/Container'

/* Tutorial: Chapter 3-5 */
import { VideoPlayerApp } from './components/Chap43EffectsIntroVideo/VideoPlayer';  


function App() {

  return (
  <Container>

    <h2>Video player with Ref and Effect</h2>
    <div style={{marginBottom:"2em"}}>
      <VideoPlayerApp></VideoPlayerApp>
    </div>

  </Container>
  );
}

export default App
