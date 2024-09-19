import { useMemo } from "react";
import { filterTodos } from "./utils";
import PropTypes from "prop-types";
import "./styles.css";


TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })),
  theme: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired,
}
export function TodoList({todos, theme, tab}){

  const visibleTodos = useMemo(()=>{
    return filterTodos(todos, tab);
  }, [todos, tab]);

  return(
    <div className={theme}>
      <p><b>Note: <code>filterTodos</code> is artificially
        slowed down.
      </b></p>
      <ul>
        {
          visibleTodos.map((item)=>(
            <li key={item.id}>
              {
                item.completed 
                ? <s>{item.text}</s> 
                :item.text
              }
            </li>
          ))
        }
      </ul>
    </div>
  )
}