import { useState } from 'react'
import viteLogo from '/vite.svg'
//import './App.css'
import Container from 'react-bootstrap/Container'

/* Tutorial: Chapter 4-3 */
import { Playground } 
  from './components/Chap43EffectPlayground/Playground';

function App() {

  return (
  <Container>

    <h2>Fetch and clean up a fetch</h2>
      <p>The connection is in the console log.</p>
    <div style={{marginBottom:"2em"}}>
      <Playground></Playground>
    </div>



  </Container>
  );
}

export default App
