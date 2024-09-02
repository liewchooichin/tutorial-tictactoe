import { useState } from 'react'
import viteLogo from '/vite.svg'
//import './App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import { Gallery } from './components/Gallery'
import { TodoList1, TodoList2 } from './components/TodoList'
import { PackingList } from './components/PackingList'
import { ChemistsList } from './components/ArrayExample'
import { MoreThanOneDomWithFragment } from './components/ArrayExample'

function App() {

  const [count, setCount] = useState(0)

  return (
    <Container>
     
      <h1>Learn React</h1>

      <Button variant="primary"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </Button>  

      <MoreThanOneDomWithFragment></MoreThanOneDomWithFragment>
      <ChemistsList></ChemistsList>

    </Container>
  );
}

export default App
