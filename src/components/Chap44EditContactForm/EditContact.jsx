import { useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";


EditContact.propTypes = {
  savedContact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  onSave: PropTypes.func.isRequired,
}
export function EditContact({savedContact, onSave}){

  return(
    <EditForm
      key={savedContact.id}
      savedContact={savedContact}
      onSave={onSave}
    ></EditForm>
  )
}

EditForm.propTypes = {
  savedContact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  onSave: PropTypes.func.isRequired,
}
function EditForm({savedContact, onSave}){ 
  const [name, setName] = useState(savedContact.name);
  const [email, setEmail] = useState(savedContact.email);

  return(
    <section>
      <label>Name: {" "}
        <input
          type="text"
          value={name}
          onChange={e=>setName(e.target.value)}
        ></input>
      </label>

      <label>Email: {" "}
        <input
          type="email"
          value={email}
          onChange={e=>setEmail(e.target.value)}
        ></input>
      </label>
      <button
        name="btnSave"
        onClick={(e)=>{
          const updatedData = {
            id: savedContact.id,
            name: name,
            email: email
          };
          onSave(e, updatedData);
        }}
      >Save</button>
      <button 
        name="btnCancel"
        onClick={(e)=>{
          console.log(`Event ${e.target.name}`)
          setName(savedContact.name);
          setEmail(savedContact.email);
        }}
      >Cancel</button>
    </section>
  )
}