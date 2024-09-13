import { useState } from 'react';
import { useContext } from "react";
import { TasksDispatchContext } from './TasksContext';
import { initialTasks } from './dataTasks';

let nextId = initialTasks.length;


export function AddTask(){

    const [text, setText] = useState("");
    const dispatch = useContext(TasksDispatchContext);

    return(
    <>
        <input
            placeholder='AddTask'
            value={text}
            onChange={e => setText(e.target.value)}
        ></input>
        <button
            onClick={() => {
                dispatch({
                    type: "added",
                    id: nextId++,
                    text: text,
                });
                setText("");
            }}
        >Add</button>
    </>
    )
}