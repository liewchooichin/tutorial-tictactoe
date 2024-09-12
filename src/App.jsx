import { useState } from 'react'
import viteLogo from '/vite.svg'
//import './App.css'
import Container from 'react-bootstrap/Container'

/* Tutorial: Chapter 3-5 */
import { TaskListApp } from './components/Chap35TaskListWithReducer';
import { MessengerApp } from './components/Chap35MessengerWithReducer/Chap35MessengerWithReducer';

function App() {

  return (
    <Container>

    <h2>Messenger App using useReducer</h2>
    <div style={{marginBottom:"2em"}}>
      <MessengerApp></MessengerApp>
    </div>

    <h2>Task events using useReducer</h2>
    <div style={{marginBottom:"2em"}}>
      <TaskListApp></TaskListApp>
    </div>

    </Container>
  );
}

export default App
