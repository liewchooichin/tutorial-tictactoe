import { useState } from 'react'
import viteLogo from '/vite.svg'
//import './App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

/* Tutorial: Chapter 1 
import { TodoList1, TodoList2 } from './components/TodoList'
import { PackingList } from './components/PackingList'
import { ChemistsList } from './components/ArrayExample'
import { MoreThanOneDomWithFragment } from './components/ArrayExample'
import { RecipeList } from './components/RecipeList'
import { Poem } from './components/LineSeparator'
import { CupsOfTea } from './components/PureFunctionTeaRecipe'
import { TeaGathering } from './components/PureFunctionTeaRecipe'
import { Clock } from './components/PureFunctionClock'
import { GalleryCollapseProfile } from './components/CollapseProfile'
import { Gallery } from './components/Gallery_v2'
import { QuotationApp } from './QuotationApp/QuotationApp'
*/


/* Tutorial: Chapter 2 */
import { ListOfNames } from './components/Chap2StateArray1'
import { CounterList } from './components/Chap2StateArray2'
import { InsertNewItemIntoList } from './components/Chap2StateArray3'
import { BucketList } from './components/Chap2StateArray4'

function App() {

  return (
    <Container>
    <h1 style={{marginBottom:"1em"}}>Learn React: Chapter 2</h1>

    <h2>Array: changing objects inside an array</h2>
    <div style={{marginBottom:"1em"}}><BucketList>
      </BucketList></div>

    <h2>Array: insert new item into an array</h2>
    <div style={{marginBottom:"1em"}}><InsertNewItemIntoList>
      </InsertNewItemIntoList></div>

    <h2>Array: counters on an array</h2>
    <div style={{marginBottom:"1em"}}><CounterList>
      </CounterList></div>

    <h2>Array: setting new names to the list</h2>
    <div style={{marginBottom:"1em"}}><ListOfNames>
      </ListOfNames></div>

    </Container>
  );
}

export default App
