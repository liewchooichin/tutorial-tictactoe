import { useReducer } from 'react';
import {Chat} from './Chat.jsx';
import {ContactList} from './ContactList.jsx';
import { contacts, initialState, messengerReducer } from './messengerReducer';



export function MessengerApp() {
    const [state, dispatch] = useReducer(messengerReducer, initialState);
    const message = state.messages[state.selectedId];
    const contact = contacts.find((c) => c.id === state.selectedId);
    console.log(`In top app, ${contact.id} ${contact.name}`);
    return (
      <div>
        <ContactList
          contacts={contacts}
          selectedId={state.selectedId}
          dispatch={dispatch}
        />
        <Chat
          key={contact.id}
          message={message}
          contact={contact}
          dispatch={dispatch}
        />
      </div>
    );
  }
  