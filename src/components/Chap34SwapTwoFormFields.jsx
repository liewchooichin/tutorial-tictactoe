import PropTypes from "prop-types";
import { useState } from 'react';

export function SwapTwoFormFields() {
  const [reverse, setReverse] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

    return (
      <>
        {reverse &&
            <>
            <TextField label={"Last name"} 
                name={lastName} setter={setLastName} /> 
            <TextField label={"First name"} 
                name={firstName} setter={setFirstName} />
            </>
        }
        {!reverse &&
            <>
            <TextField label={"First name"} 
                name={firstName} setter={setFirstName} />            
            <TextField label={"Last name"} 
                name={lastName} setter={setLastName} /> 
            </>
        }
        <p>First name: {firstName}, Last name: {lastName}</p>
        <Checkbox reverse={reverse} setReverse={setReverse}></Checkbox>
      </>
    );
}

Checkbox.propTypes = {
    reverse: PropTypes.bool.isRequired,
    setReverse: PropTypes.func.isRequired
}
function Checkbox({reverse, setReverse}){
    return(
        <label>
            <input
            type="checkbox"
            checked={reverse}
            onChange={e => setReverse(e.target.checked)}
            />
            Reverse order
      </label>    
    )
}

TextField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    setter: PropTypes.func.isRequired
}
function TextField({ label, name, setter }) {
  return (
    <>
    <label>
      {label}:{' '}
      <input
        type="text"
        value={name}
        placeholder={label}
        onChange={e => setter(e.target.value)}
      />
    </label>
    </>    

  );
}
