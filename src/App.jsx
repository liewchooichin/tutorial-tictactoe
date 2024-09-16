import { useState } from 'react'
import viteLogo from '/vite.svg'
//import './App.css'
import Container from 'react-bootstrap/Container'

/* Tutorial: Chapter 3-5 */
import { RefIntroApp } from './components/Chap41RefIntro/RefIntroApp';
import { StopWatchApp } from './components/Chap41RefStopWatch/StopWatchApp';
import { ChatInputApp } from './components/Chap41FixedBrokenChatInput/ChatInputApp';



function App() {

  return (
  <Container>

    <h2>Chat Input App</h2>
    <div style={{marginBottom:"2em"}}>
      <ChatInputApp></ChatInputApp>
    </div>


    <h2>Stop Watch App</h2>
    <div style={{marginBottom:"2em"}}>
      <StopWatchApp></StopWatchApp>
    </div>

    <h2>Using Ref for simple counter</h2>
    <div style={{marginBottom:"2em"}}>
      <RefIntroApp></RefIntroApp>
    </div>

  </Container>
  );
}

export default App
