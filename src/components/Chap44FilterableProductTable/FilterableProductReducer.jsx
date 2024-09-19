
export function filterTextReducer(filterText, action){

  switch(action.type){
    case "text_change": {
      const newText = action.newText;
      return newText;
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}

export function inStockReducer(inStockOnly, action){
  switch(action.type){
    case "inStock_change": {
      const newChecked = action.newChecked;
      return newChecked;
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}