import { useState } from 'react'
import viteLogo from '/vite.svg'
//import './App.css'
import Container from 'react-bootstrap/Container'

/* Tutorial: Chapter 3-5 */
import { TaskApp } from './components/Chap37TaskList/TaskApp';


function App() {

  return (
  <Container>

    <h2>Task App</h2>
    <p>Using reducer and context
    </p>
    <div style={{marginBottom:"2em"}}>
      <TaskApp></TaskApp>
    </div>

  </Container>
  );
}

export default App
