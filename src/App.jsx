import { useState } from 'react'
import viteLogo from '/vite.svg'
//import './App.css'
import Container from 'react-bootstrap/Container'

/* Tutorial: Chapter 4-4 */
import { FilterableProductTable } from './components/Chap44FilterableProductTable/FilterableProductTable';


function App() {

  return (
  <Container>

    <h2>Filterable product table</h2>
    <div style={{marginBottom:"2em"}}>
      <FilterableProductTable></FilterableProductTable>
    </div>


  </Container>
  );
}

export default App
