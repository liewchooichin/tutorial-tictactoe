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
import { Toolbar1 } from './components/Chap2EventHandler'
import { Toolbar2 } from './components/Chap2EventHandler'
import { Toolbar3 } from './components/Chap2EventHandler2'
import { Toolbar4 } from './components/Chap2EventPropagation'
import { ToggleColor } from './components/Chap2EventPropagation2'
import { SculptureGallery } from './components/Chap2State1'
import { SculptureGallery2 } from './components/Chap2State2'
import { FormName } from './components/Chap2State3'
import { FeedbackForm } from './components/Chap2State3'
import { TrafficLight } from './components/Chap2State4'
import { CalculateFinalState } from './components/Chap2State5'
import { MovingDot } from './components/Chap2State6Object'
import { NameForm } from './components/Chap2State7Form'
import { NameForm2 } from './components/Chap2State7Form_SquareBrackets'
import { ScoreForm } from './components/Chap2State7Form_SquareBrackets'
import { MovingBox } from './components/Chap2State8MovingBox'


function App() {

  return (
    <Container>
    <h1 style={{marginBottom:"1em"}}>Learn React: Chapter 2</h1>

    <h2>Using state: Moving boxes (setting states of objects)</h2>
    <div style={{marginBottom:"1em"}}><MovingBox>
      </MovingBox></div>

    <h2>Using state: Using counter</h2>
    <div style={{marginBottom:"1em"}}><ScoreForm>
      </ScoreForm></div>

    <h2>Using state: With ...syntax and [name]:value</h2>
    <div style={{marginBottom:"1em"}}><NameForm2>
      </NameForm2></div>

    <h2>Using state: Copying objects with the spread syntax</h2>
    <div style={{marginBottom:"1em"}}><NameForm>
      </NameForm></div>

    <h2>Using state: Treat objects as immutable</h2>
    <div style={{marginBottom:"1em"}}><MovingDot>
      </MovingDot></div>


    <h2>Using state: Calculate Final State</h2>
    <p>The dot will move along with the mouse pointer.</p>
    <div style={{marginBottom:"1em"}}><CalculateFinalState>
      </CalculateFinalState></div>


    <h2>Using state: Traffic Light</h2>
    <div style={{marginBottom:"1em"}}><TrafficLight>
      </TrafficLight></div>

    <h2>Using state: Feedback Form</h2>
    <div style={{marginBottom:"1em"}}><FeedbackForm>
      </FeedbackForm></div>

    <h2>Using state: Name Form</h2>
    <div style={{marginBottom:"1em"}}><FormName>
      </FormName></div>

    <h2>Using state: Sculpture Gallery 2</h2>
    <div style={{marginBottom:"1em"}}><SculptureGallery2>
      </SculptureGallery2></div>

    <h2>Using state: Sculpture Gallery 1</h2>
    <div style={{marginBottom:"1em"}}><SculptureGallery>
      </SculptureGallery></div>

    <h2>More event propgation</h2>
    <div style={{marginBottom:"1em"}}><ToggleColor></ToggleColor></div>

    <h2>Event propagation</h2>
    <div style={{marginBottom:"1em"}}><Toolbar4></Toolbar4></div>

    <h2>Calling events from a top app</h2>
    <div style={{marginBottom:"1em"}}><Toolbar3></Toolbar3></div>
    
    <h2>Calling a Button to handle all events</h2>
    <div style={{marginBottom:"1em"}}><Toolbar2></Toolbar2></div>

    <h2>Event handling basic</h2>
    <div style={{marginBottom:"1em"}}><Toolbar1></Toolbar1></div>

    </Container>
  );
}

export default App
