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
        newMessage: newMessage,
    });
  }

  /**Sent message */
  function handleSentMessage(e){
    console.log(`${e.target.name} ${e.type}`);
    dispatch({
        type: "sent_message",
    });
  }

  /** If Send is clicked,
   * 1 - Shown send message below the button.
   * 2 - Clear the input message.
   */
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
      <button
        id="btnSendMessage"
        name="btnSendMessage"
        onClick={(e) => {
            // Show sending
            // Clear the message area.
            alert(`Sending ${message} to ${contact.name} (${contact.email})`);
            handleSentMessage(e);
        }}
      >
            Send to {contact.email}
        </button>
        <p>Message {message} <br/>to {contact.name} <br/> ({contact.email})</p>
    </section>
  );
}
