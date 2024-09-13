import { useReducer } from "react";
import { AddTask } from "./AddTask";
import { TaskList } from "./TaskList";
import { initialTasks } from "./dataTasks";
import { tasksReducer } from "./TaskReducer";
import { TasksContext, TasksDispatchContext } 
  from "./TasksContext";


export function TaskApp(){

  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks,
  );
  return (
    
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>

      <h1>Day off in Kyoto</h1>

      <AddTask></AddTask>
      
      <TaskList></TaskList>

      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
    
  )
}

