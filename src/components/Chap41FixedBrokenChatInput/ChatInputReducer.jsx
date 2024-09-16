

export function inputTextReducer(text, action){
  switch(action.type){
    case "change_text": {
      const newText = action.newText;
      return newText;
    }
    case "clear_text": {
      const newText = "";
      return newText;
    }
    default:{
      throw Error(`Unknown action: ${action.type}`);
    }
  }

}

export function isSendingReducer(isSending, action){
  switch(action.type){
    case "set_sending_status": {
      const newStatus = action.newStatus;
      return newStatus;
    }
    default: {
      throw Error(`Unknow action: ${action.type}`);
    }
  }
}