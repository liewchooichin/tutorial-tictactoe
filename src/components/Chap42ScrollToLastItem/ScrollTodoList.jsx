/**flushSync to  
 * 
 * This will instruct React to update the DOM synchronously right
 * after the code wrapped in flushSync executes. As a result, the
 * last todo will already be in the DOM by the time you try to
 * scroll to it:
*/
import { useState, useRef } from "react";
import { flushSync } from "react-dom";
import "./styles.css";


let nextId = 0;
const initialTodos = [];
for(let i=0; i<20; i++){
  initialTodos.push({
    id: nextId++,
    text: `Todo #${i+1}`
  })
}

export function ScrollTodoList(){

  const listRef = useRef(null);
  const [text, setText] = useState('');
  const [todos, setTodos] = useState(initialTodos);

  function getNewTodo(){
    return(
      {
        id: nextId++,
        text: text,
      }
    )
  }

  function handleAddTodo(e){
    const newTodo = getNewTodo();
    flushSync(() => {
      setText(''); // clear the text after adding
      setTodos([...todos, newTodo]);
    })
    // scroll to the last item
    listRef.current.lastChild.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    })
    
  }
  function handleChangeText(e){
    setText(e.target.value);
  }

  return(
    <>
    <div className="myTodoSection">
    <input
      type="text"
      value={text}
      onChange={(e) => handleChangeText(e)}
    ></input>
    <button 
      type="button"
      onClick={(e) => handleAddTodo(e)}
      >Add</button>

      <ul ref={listRef}>
        {
          todos.map(
            t => {
              return(
                <li className="myTodoList"
                key={t.id}>Id:{t.id} {t.text}</li>
              )})
        }
      </ul>
    </div>
    </>
  )
}
