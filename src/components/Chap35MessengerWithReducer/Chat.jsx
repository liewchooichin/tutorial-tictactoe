import PropTypes from "prop-types";
import { useState, useReducer } from 'react';


Chat.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    }),
    message: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
}
export function Chat({contact, message, dispatch}) {
  /**Dispatch */
  function handleChangeMessage(e, newMessage){
    console.log(`Event from ${e.target.name} ${e.type}`);
    console.log(`New message ${newMessage}`);
    dispatch({
        type: "edited_message",
        newMessage: newMessage
    })
  }

  return (
    <section className="chat">
      <textarea
        id="messageArea"
        name="messageArea"
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={(e) => {
          // TODO: dispatch edited_message
          // (Read the input value from e.target.value)
          handleChangeMessage(e, e.target.value);
        }}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}
