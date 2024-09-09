import { useState } from 'react'
import viteLogo from '/vite.svg'
//import './App.css'
import Container from 'react-bootstrap/Container'

/* Tutorial: Chapter 3-2 */
import { FeedbackForm } from './components/Chap32SendingStatus';
import { SnackMenu } from './components/Chapter32DoNotDuplicate';
import { TravelPlan } from './components/Chap32FlatStructure_1';
import { TravelPlan2 } from './components/Chap32FlatStructure_2';

function App() {

  return (
    <Container>
    <h1 style={{marginBottom:"1em"}}>Chapter 3: Managing States</h1>

    <h2>Using flat structure</h2>
    <div style={{marginBottom:"2em"}}>
      <TravelPlan2></TravelPlan2>
    </div>

    <h2>Using flat structure: Listing the items</h2>
    <div style={{marginBottom:"2em"}}>
      <TravelPlan></TravelPlan>
    </div>

    <h2>Do not duplicate contents in states</h2>
    <div style={{marginBottom:"2em"}}>
      <SnackMenu></SnackMenu>
    </div>

    <h2>The sending and isSending status will update the form.</h2>
    <p>Somehow, when the the button type="submit", the handler will
      not work properly. But, when the button is changed to type="button"
      and onClick is set, then the form will work properly.
    </p>
    <div style={{marginBottom:"2em"}}>
      <FeedbackForm></FeedbackForm>
    </div>

    </Container>
  );
}

export default App
