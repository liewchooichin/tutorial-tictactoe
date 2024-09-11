import PropTypes from "prop-types";
import { useState } from 'react';

export function DisappearingInputText() {
  const [showHint, setShowHint] = useState(true);
  
/**Toggle the show or hide hint button. */
    return (
        <div>
        {showHint && <p><i>Hint: Your favorite city?</i></p>}

        <Form></Form>

        <button onClick={() => {
            const newHint = !showHint;
            setShowHint(newHint);
        }}>{!showHint ? "Show hint" : "Hide hint"}</button>
        
        </div>
    );
}

function Form() {
  const [text, setText] = useState('');
  return (
    <>
    <textarea
      value={text}
      onChange={e => setText(e.target.value)}
    />
    <p>Your favourite city: {text}</p>
    </>
  );
}
