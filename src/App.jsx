import { useState } from 'react'
import viteLogo from '/vite.svg'
//import './App.css'
import Container from 'react-bootstrap/Container'

/* Tutorial: Chapter 4-4 */
import { TodosWithMemoApp } 
  from './components/Chap44TodosWithMemo/TodosWithMemoApp';


function App() {

  return (
  <Container>

    <h2>useMemo for todo list</h2>
      <p>The connection is in the console log.</p>
    <div style={{marginBottom:"2em"}}>
      <TodosWithMemoApp></TodosWithMemoApp>
    </div>


  </Container>
  );
}

export default App
