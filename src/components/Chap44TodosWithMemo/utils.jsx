
export function createTodos(){
  const todos = [];
  for(let i=0; i<50; i++){
    todos.push({
      id:i,
      text: `Todo ${i+1}`,
      /*random chance of completing */
      completed: (Math.random()>0.6), 
    })
  }
  return todos;
}

/**
 * Artificially slowing down todos.
 */
export function filterTodos(todos, tab){
  console.log(`[ARTIFICIALLY SLOW] Filtering ${todos.length} 
    todos for ${tab} tab.`);
  
  let starttime = performance.now();
  // Do nothing for 1000ms to emulate extremely slow code
  while((performance.now()-starttime) < 1000){};

  return todos.filter((item)=>{
    if(tab==="all"){
      return true;
    } else if(tab==="active"){
      return !item.completed;
    } else if(tab==="completed"){
      return item.completed;
    }
  });
}