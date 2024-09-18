import { useState } from 'react'
import viteLogo from '/vite.svg'
//import './App.css'
import Container from 'react-bootstrap/Container'

/* Tutorial: Chapter 4-3 */
import { UpperCaseForm } 
  from './components/Chap43FocusFieldOnMount/FocusFieldOnMount';
import { FixIntervalFiring } 
  from './components/Chap43FixIntervalFiring/FixIntervalFiring';
import { FixBioFetching } from './components/Chap43FixBioFetching/FixBioFetching';


function App() {

  return (
  <Container>

    <h2>Make sure the fetch is fetching the correct bio</h2>
      <p>The connection is in the console log.</p>
    <div style={{marginBottom:"2em"}}>
      <FixBioFetching></FixBioFetching>
    </div>

    <h2>Fix and interval</h2>
      <p>The connection is in the console log.</p>
    <div style={{marginBottom:"2em"}}>
      <FixIntervalFiring></FixIntervalFiring>
    </div>

    <h2>Focus on the first input field</h2>
      <p>The connection is in the console log.</p>
    <div style={{marginBottom:"2em"}}>
      <UpperCaseForm></UpperCaseForm>
    </div>

  </Container>
  );
}

export default App
