import { useState } from 'react'
import viteLogo from '/vite.svg'
//import './App.css'
import Container from 'react-bootstrap/Container'

/* Tutorial: Chapter 3-5 */
import { RefIntroApp } 
  from './components/Chap41RefIntro/RefIntroApp';
import { StopWatchApp } 
  from './components/Chap41RefStopWatch/StopWatchApp';
import { ChatInputApp } 
  from './components/Chap41FixedBrokenChatInput/ChatInputApp';
import { DebouncingButtonApp } 
  from './components/Chap41FixedDebouncingButtons/DebouncingButtonApp';
import { ReadLatestStateApp } 
  from './components/Chap41ReadTheLatestState/ReadLatestStateApp';

function App() {

  return (
  <Container>

    <h2>Read the latest state</h2>
    <p>The alert show the current input text rather than 
      what it was at the time of the click.
    </p>
    <div style={{marginBottom:"2em"}}>
      <ReadLatestStateApp></ReadLatestStateApp>
    </div>

    <h2>Debouncing buttons App</h2>
    <p>Debouncing lets you delay some action until the 
      user &quot;stops doing things&quot;.
    </p>
    <p>An alert message will appear after 3s.</p>
    <div style={{marginBottom:"2em"}}>
      <DebouncingButtonApp></DebouncingButtonApp>
    </div>

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
