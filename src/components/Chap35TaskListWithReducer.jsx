import PropTypes from "prop-types";
import { useState, useReducer } from 'react';
//import AddTask from './AddTask.js';
//import TaskList from './TaskList.js';

/** Add Task textbox */
AddTask.propTypes = {
    onAddTask: PropTypes.func.isRequired
}
function AddTask({onAddTask}) {
    const [text, dispatch] = useReducer(addTaskReducer, "");

    function handleChangeText(newText){
      dispatch({
        type: "change_text",
        newText: newText
      })
    }

    return (
      <>
        <input
          placeholder="Add task"
          value={text}
          onChange={e => handleChangeText(e.target.value)}
        />
        <button
          onClick={() => {
            handleChangeText("");
            onAddTask(text);
          }}>
          Add
        </button>
      </>
    );
  }
  /** Reducer for AddTask */
  function addTaskReducer(text, action){
    switch(action.type){
      case 'change_text': {
        return action.newText;
        
      }
     default: {
        throw Error("Unknown action " + action.type);
      }  
    }
  }

  /**Task List */
  TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            done: PropTypes.bool.isRequired
        }),
    ),
    onChangeTask: PropTypes.func.isRequired,
    onDeleteTask: PropTypes.func.isRequired
  }
  function TaskList({tasks, onChangeTask, onDeleteTask}) {
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task task={task} onChange={onChangeTask} 
              onDelete={onDeleteTask} />
          </li>
        ))}
      </ul>
    );
  }
  
  /**Individual line of tasks */
  Task.propTypes = {
    task: PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            done: PropTypes.bool.isRequired
        }),
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  }
  function Task({task, onChange, onDelete}) {
    //const [isEditing, setIsEditing] = useState(false);
    const [isEditing, dispatch] = useReducer(taskEditReducer, false)

    /**Dispatch */
    function handleBtnClick(e, newIsEdit){
      console.log(`Edit button ${e.type}`);
      dispatch({
        type: "edit_toggle",
        newIsEdit: newIsEdit

      })
    }
    /**Task content */
    let taskContent;

    if (isEditing) {
      taskContent = (
        <>
          <input
            value={task.text}
            onChange={(e) => {
              onChange({
                ...task,
                text: e.target.value,
              });
            }}
          />
          <button onClick={(e) => handleBtnClick(e, false)}>Save</button>
        </>
      );
    } else {
      taskContent = (
        <>
          {task.text}
          <button onClick={(e) => handleBtnClick(e, true)}>Edit</button>
        </>
      );
    }
    return (
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            onChange({
              ...task,
              done: e.target.checked,
            });
          }}
        />
        {taskContent}
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </label>
    );
  }
/** Individual task reducer function */
function taskEditReducer(task, action){
  switch (action.type){
    case "edit_toggle":{
      return(action.newIsEdit);
    }
    default:{
      throw new Error(`Unknown type in Task Reducer: ${action.type}`)
    }
  }
}

/**The task app */
export function TaskListApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
/**Reducer for task app */
function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
/**Initial value */
let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];
