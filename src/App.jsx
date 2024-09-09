import { useState } from 'react'
import viteLogo from '/vite.svg'
//import './App.css'
import Container from 'react-bootstrap/Container'

/* Tutorial: Chapter 3-2 */
import { TimeColor } from './components/Chap32ChangeTimeColor';
import { PackingList } from './components/Chap32PackingList';


function App() {

  return (
    <Container>
    <h1 style={{marginBottom:"1em"}}>Chapter 3: Managing States</h1>

    <h2>Packing list</h2>
    <p>The summary must be correct according to the item checked 
    &#40;packed&#41;.</p>
    <div style={{marginBottom:"2em"}}>
      <PackingList></PackingList>
    </div>

    <h2>Time will change color according to selection.</h2>
    <div style={{marginBottom:"2em"}}>
      <TimeColor></TimeColor>
    </div>

    </Container>
  );
}

export default App
