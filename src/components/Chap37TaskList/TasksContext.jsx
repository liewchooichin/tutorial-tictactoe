import { createContext } from "react";
/* import { useReducer } from "react";
import { initialTasks } from "./dataTasks";
import { tasksReducer } from "./TaskReducer";
import PropTypes from "prop-types"; */

export const TasksContext =
  createContext(null);

export const TasksDispatchContext =
  createContext(null);

/**
 * Don't have to be used.
 * Optional
 */

/* 
TasksProvider.propTypes = {
    children: PropTypes.elementType
  }
export function TasksProvider({children}){
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return(
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
} */