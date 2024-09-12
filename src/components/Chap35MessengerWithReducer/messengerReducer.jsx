
export const initialState = {
    selectedId: 0,
    message: 'Hello',
  };
  
export function messengerReducer(state, action) {
switch (action.type) {
    case 'changed_selection': {
    return {
        ...state,
        selectedId: action.newContactId,
        message: '',
    };
    }
    case 'edited_message': {
    return {
        ...state,
        message: action.newMessage,
    };
    }
    case 'sent_message': {
        return {
            ...state,
            message: "",
        }
    }
    default: {
    throw Error('Unknown action: ' + action.type);
    }
}
}
