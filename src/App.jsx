import { useState } from 'react'
import viteLogo from '/vite.svg'
//import './App.css'
import Container from 'react-bootstrap/Container'

/* Tutorial: Chapter 3-2 */
import { FeedbackForm } from './components/Chap32SendingStatus';

function App() {

  return (
    <Container>
    <h1 style={{marginBottom:"1em"}}>Chapter 3: Managing States</h1>

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
