import { useState } from 'react';
import { PropTypes } from 'prop-types';

let nextId = 3;

const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

AddTodo.propTypes = {
    onAddTodo: PropTypes.func
}
function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState('');
  return (
    <>
      <input
        placeholder="Add todo"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={() => {
        setTitle('');
        onAddTodo(title);
      }}>Add</button>
    </>
  )
}

TaskList.propTypes = {
    todos: PropTypes.array,
    onChangeTodo: PropTypes.func,
    onDeleteTodo: PropTypes.func
}
function TaskList({
  todos,
  onChangeTodo,
  onDeleteTodo
}) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <Task
            todo={todo}
            onChange={onChangeTodo}
            onDelete={onDeleteTodo}
          />
        </li>
      ))}
    </ul>
  );
}


Task.propTypes = {
    todo: PropTypes.array,
    onChange: PropTypes.func,
    onDelete: PropTypes.func,
}
function Task({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={e => {
            onChange({
              ...todo,
              title: e.target.value
            });
          }} />
        <button onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={e => {
          onChange({
            ...todo,
            done: e.target.checked
          });
        }}
      />
      {todoContent}
      <button onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </label>
  );
}


export function TodoApp() {
  const [todos, setTodos] = useState(
    initialTodos
  );

  function handleAddTodo(title) {
    const newList = [...todos];
    newList.push({
      id: nextId++,
      title: title,
      done: false
    });
    setTodos(newList);
  }

  function handleChangeTodo(nextTodo) { 
    const newList  = todos.map(t => {
        if(t.id === nextTodo.id) {
            // the id remains the same
            const newItem = {
                id: nextTodo.id,
                title: nextTodo.title,
                done: nextTodo.done
            }
            return newItem;   
        } else {
            return t;
        }
    });
    setTodos(newList);
  }

  function handleDeleteTodo(todoId) {
    const newList = todos.filter(t =>
      t.id !== todoId
    );
    setTodos(newList);
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
