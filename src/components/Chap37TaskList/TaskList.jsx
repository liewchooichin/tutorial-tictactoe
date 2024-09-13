
import { Task } from './Task';
import { useContext } from 'react';
import { TasksContext } from './TasksContext';


export function TaskList() {

  const tasks = useContext(TasksContext);

  return(
    <ul>
      {tasks.map((t) => (
        <li key={t.id}>
          <Task 
            task={t}
          ></Task>
        </li>
      ))}
    </ul>
  )
}