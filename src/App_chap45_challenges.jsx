import { useState } from 'react'
import viteLogo from '/vite.svg'
//import './App.css'
import Container from 'react-bootstrap/Container'

/* Tutorial: Chapter 4-4 */
import { ChatRoomReSync } 
  from './components/Chap45EffectsReSync/ChatRoomReSync';
import { DotMoveOrFreeze } 
  from './components/Chap45DotMoveOrFreeze/DotMoveOrFreeze';
import { PlanetPlaces } 
  from './components/Chap45PlanetPlaces/PlanetPlaces';

function App() {

  return (
  <Container>

    <h2>Planets and Places</h2>
    <p>The planets list is not dependent on other things.</p>
    <p>The places depends on Planets and no other things.</p>
    <div style={{marginBottom:"2em"}}>
      <PlanetPlaces/>
    </div>


    <h2>Dot move or freeze</h2>
    <p>click on the checkbox will move or freeze the dot. </p>
    <div style={{marginBottom:"2em"}}>
      <DotMoveOrFreeze/>
    </div>


    <h2>Chat Room ReSync</h2>
    <p>First room will have dependencies.</p>
    <p>Room 2 is fixed and there is only one room 
      and one connection. So, there is no dependencies.</p>
    <div style={{marginBottom:"2em"}}>
      <ChatRoomReSync/>
    </div>




  </Container>
  );
}

export default App
