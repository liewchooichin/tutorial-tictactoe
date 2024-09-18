import { useState } from 'react'
import viteLogo from '/vite.svg'
//import './App.css'
import Container from 'react-bootstrap/Container'

/* Tutorial: Chapter 3-5 */
import { FocusTextInput } 
  from './components/Chap42DOMWithRefs/FocusTextInput';
import { CatFriends } 
  from './components/Chap42ScrollToElement/ScrollToElementWithMap';
import { ScrollTodoList } 
  from './components/Chap42ScrollToLastItem/ScrollTodoList';
import { ControlVideo } 
  from './components/Chap42ControlVideoWithRef/ControlVideo';
  


function App() {

  return (
  <Container>

    <h2>Control video</h2>
    <p>The play and pause can be controlled by Ref.</p>
    <div style={{marginBottom:"2em"}}>
      <ControlVideo></ControlVideo>
    </div>


    <h2>Scrolling to the last items</h2>
    <div style={{marginBottom:"2em"}}>
      <ScrollTodoList></ScrollTodoList>
    </div>

    <h2>Scrolling to an element using Ref</h2>
    <div style={{marginBottom:"2em"}}>
      <CatFriends></CatFriends>
    </div>

    <h2>DOM with Ref</h2>
    <p>Using Ref DOM to manipulate the DOM.
    </p>
    <div style={{marginBottom:"2em"}}>
      <FocusTextInput></FocusTextInput>
    </div>


  </Container>
  );
}

export default App
