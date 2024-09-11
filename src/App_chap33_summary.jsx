import { useState } from 'react'
import viteLogo from '/vite.svg'
//import './App.css'
import Container from 'react-bootstrap/Container'

/* Tutorial: Chapter 3-2 */
import { FunFacts } from './components/Chap33Accordion';
import {SyncedInputs} from './components/Chap33SyncedInputs';
import {FilterableList} from './components/Chap33FilterSearchList';

function App() {

  return (
    <Container>
    <h1 style={{marginBottom:"1em"}}>Chapter 3: Managing States</h1>

    <h2>Filter a search list</h2>
    <div style={{marginBottom:"2em"}}>
      <FilterableList></FilterableList>
    </div>

    <h2>Sync the inputs in the two fields</h2>
    <p>Both fields should mirror each other.</p>
    <div style={{marginBottom:"2em"}}>
      <SyncedInputs></SyncedInputs>
    </div>

    <h2>Passing states as props to child component</h2>
    <p>The accordion should open and close correctly.</p>
    <div style={{marginBottom:"2em"}}>
      <FunFacts></FunFacts>
    </div>

    </Container>
  );
}

export default App
