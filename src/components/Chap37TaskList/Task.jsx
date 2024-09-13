import { useState } from 'react';
import PropTypes from 'prop-types';
import { useContext } from "react";
import { TasksDispatchContext } from './TasksContext';


Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
})
} 
export function Task({
  task
}){

  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(TasksDispatchContext);

  let taskContent;

  if(isEditing){
    taskContent = (
      <>
        <input value={task.text}
          onChange={(e) => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                text: e.target.value
              }})
          }}
        ></input>
        <button
          onClick={() => {setIsEditing(false)}}
        >Save</button>
      </>
    )
  } 
  else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => {setIsEditing(true)}}
          >Edit</button>
      </>
    )
  }
  return(
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          dispatch({
            type: 'changed',
            task: {
              ...task,
              done: e.target.checked
            }}) 
        }}
      ></input>
      {taskContent}
      <button
        onClick={() => {
          dispatch({
            type: "deleted",
            id: task.id,
          });
        }} 
      >Delete</button>
    </label>
  )
}