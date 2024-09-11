import { useState } from 'react'
import viteLogo from '/vite.svg'
//import './App.css'
import Container from 'react-bootstrap/Container'

/* Tutorial: Chapter 3-4 */
import { CounterApp } from './components/Chap34PreservingState';
import { FancyCounterApp } from './components/Chap34FancyCounter';
import { CounterTakeABreakApp } from './components/Chap34TakeABreak';
import { ChatMessenger } from './components/Chap34ContactList'




function App() {

  return (
    <Container>
    <h1 style={{marginBottom:"1em"}}>Chapter 3: Managing States</h1>

    <h2>Resetting a form with a key</h2>
    <p>Remember that keys are not globally unique. They only specify the position within the parent.</p>
    <p>Specifying a key tells React to use the key itself as part of the position, instead of their order within the parent. This is why, even though you render them in the same place in JSX, React sees them as two different counters, and so they will never share state. Every time a counter appears on the screen, its state is created. Every time it is removed, its state is destroyed. Toggling between them resets their state over and over.</p>
    <div style={{marginBottom:"2em"}}>
      <ChatMessenger></ChatMessenger>
    </div>

    <h2>Different components at the same position reset state</h2>
    <p>Here, you switch between different component types at the same position. Initially, the first child of the &lt;div&gt; contained a Counter. But when you swapped in a p, React removed the Counter from the UI tree and destroyed its state.</p>
    <div style={{marginBottom:"2em"}}>
      <CounterTakeABreakApp></CounterTakeABreakApp>
    </div>

    <h2>Preserving state in components</h2>
    <p>Remember that it’s the position in the UI tree—not in the JSX markup—that matters to React!</p>
    <div style={{marginBottom:"2em"}}>
      <FancyCounterApp></FancyCounterApp>
    </div>

    <h2>Preserving state in components</h2>
    <p>When the second counter is removed, the state is still 
      preserved.</p>
    <div style={{marginBottom:"2em"}}>
      <CounterApp></CounterApp>
    </div>



    </Container>
  );
}

export default App
