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

import { NavRouterApp } 
  from './components/navigationRouter/NavRouterApp';
import { Home } from './components/navigationRouter/Pages';

function App(){

  return (
  <Container>


    
    <NavRouterApp></NavRouterApp>


  </Container>
  );
}

export default App
