import { useState } from 'react';
import PropTypes from 'prop-types';



export function SyncedInputs() {
    const [text, setText] = useState('');

    function handleChange(e) {
        setText(e.target.value);
      }

    return (
      <>
        <Input label={"First input"} text={text} 
            handleChange={handleChange}/>
        <Input label={"Second input"} text={text} 
            handleChange={handleChange}/>
      </>
    );
  }
  
  Input.propTypes = {
    label: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
  }
  function Input({ label, text, handleChange }) {

    return (
      <label>
        {label}
        {' '}
        <input
          value={text}
          onChange={handleChange}
        />
      </label>
    );
  }
  