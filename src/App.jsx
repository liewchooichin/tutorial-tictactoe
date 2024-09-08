import { useState } from 'react'
import viteLogo from '/vite.svg'
//import './App.css'
import Container from 'react-bootstrap/Container'

/* Tutorial: Chapter 3 */
import { ListAllStatus } from "./components/Chap3Statuses"
import { FormWater } from './components/Chap3FormWater'
import { BackgroundPicture } from './components/Chap3BackgroundPicture'
import { FieldEditor } from './components/Chap3FieldEditor'

function App() {

  return (
    <Container>
    <h1 style={{marginBottom:"1em"}}>Chapter 3: Managing States</h1>

    <h2>Field name editor</h2>
    <p>The field is enabled or disabled, the text in the button 
      changed according to the state.
    </p>
    <div style={{marginBottom:"2em"}}>
      <FieldEditor></FieldEditor>
    </div>

    <h2>Activating background or border of picture</h2>
    <p>Clicking on the background or the picture will change the appearance of the element.
    </p>
    <div style={{marginBottom:"2em"}}>
      <BackgroundPicture></BackgroundPicture>
    </div>


    <h2>Actual form with the event handler</h2>
    <div style={{marginBottom:"2em"}}>
      <FormWater></FormWater>
    </div>

   <h2>Event handlers and states</h2>
    <div style={{marginBottom:"2em"}}>
      <ListAllStatus></ListAllStatus>
    </div>
    </Container>
  );
}

export default App
