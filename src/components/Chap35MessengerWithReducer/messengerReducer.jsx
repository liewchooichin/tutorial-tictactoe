
export const contacts = [
    {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
    {id: 1, name: 'Alice', email: 'alice@mail.com'},
    {id: 2, name: 'Bob', email: 'bob@mail.com'},
  ];
  
  export const initialState = {
    selectedId: 0,
    messages: {
      0: 'Hello, Taylor',
      1: 'Hello, Alice',
      2: 'Hello, Bob',
    },
  };
    
export function messengerReducer(state, action) {
switch (action.type) {
    case 'changed_selection': {
        console.log("Reducer: changed_selection");
        console.log(`Reducer: newContactId ${action.newContactId}`);
    return {
        ...state,
        selectedId: action.newContactId,
    };
    }
    case 'edited_message': {
        console.log("Reducer: edited_message");
        console.log(`Reducer: ${action.newMessage}`);
    return {
        ...state,
        messages: {
            ...state.messages,
            [state.selectedId]: action.newMessage,
        }
    };
    }
    case 'sent_message': {
        console.log("Reducer: sent_message");
        return {
            ...state,
            message: "", // Clears the input
        }
    }
    default: {
    throw Error('Unknown action: ' + action.type);
    }
}
}
