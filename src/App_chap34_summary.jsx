import { useState } from 'react'
import viteLogo from '/vite.svg'
//import './App.css'
import Container from 'react-bootstrap/Container'

/* Tutorial: Chapter 3-4 */
import { DisappearingInputText } from 
"./components/Chap34DisappearingInputText";
import { SwapTwoFormFields } from
"./components/Chap34SwapTwoFormFields";
import { ContactManager } from 
  './components/Chap34ResetDetailForm';
import { PlacesGallery } from 
  './components/Chap34ClearImageWhileLoading';
import { EmailContactList } from 
  './components/Chap34MisplacedStateInList';


function App() {

  return (
    <Container>
    <h2>Fix misplaced state in the list</h2>
    <p> 
    </p>
    <div style={{marginBottom:"2em"}}>
      <EmailContactList></EmailContactList>
    </div>

    <h2>Clear an image while it’s loading</h2>
    <p> 
    </p>
    <div style={{marginBottom:"2em"}}>
      <PlacesGallery></PlacesGallery>
    </div>

    <h2>Reset a detail form</h2>
    <p>The Reset button will not &quot;reset&quot; if the data has
      been &quot;saved&quot;. 
    </p>
    <div style={{marginBottom:"2em"}}>
      <ContactManager></ContactManager>
    </div>

    <h2>Swap two form fields</h2>
    <div style={{marginBottom:"2em"}}>
      <SwapTwoFormFields></SwapTwoFormFields>
    </div>


    <h2>Fix disappearing input text</h2>
    <div style={{marginBottom:"2em"}}>
      <DisappearingInputText></DisappearingInputText>
    </div>



    </Container>
  );
}

export default App
