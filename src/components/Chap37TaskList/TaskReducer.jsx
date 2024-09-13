
export function tasksReducer(tasks, action){
  switch(action.type){
    case "added": {
      console.log(`Action ${action.type}`);
      return([
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false
        }
      ])
    };
    case "changed": {
      console.log(`Action: ${action.type}`);
      return(
        tasks.map((t) => {
          if(t.id === action.task.id){
            return action.task;
          } else {
            return t;
          }
        })
      )
    };
    case "deleted": {
      console.log(`Action: ${action.type}`);
      return (
        tasks.filter((t) => (
          t.id !== action.id
        )))
    };
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}