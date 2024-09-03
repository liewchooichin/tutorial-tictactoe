import { useState } from 'react'
import viteLogo from '/vite.svg'
//import './App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

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

      <GalleryCollapseProfile></GalleryCollapseProfile>
      <Clock></Clock>
      <TeaGathering></TeaGathering>
      <CupsOfTea></CupsOfTea>
      <Poem></Poem>
      <RecipeList></RecipeList>
      <MoreThanOneDomWithFragment></MoreThanOneDomWithFragment>
      <ChemistsList></ChemistsList>


    </Container>
  );
}

export default App
