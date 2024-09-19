import { useState } from "react";
import { ContactList } from "./ContactList";
import { EditContact } from "./EditContact";
import { initialContacts } from "./data";


export function ContactManager(){

  const [contacts, setContacts] = useState(initialContacts);
  const [selectedId, setSelectedId] = useState(0);

  const selectedContact = contacts.find(c => (c.id===selectedId));
  console.log(`Selected contact: ${selectedContact.name}`);

  function handleNameSelected(e, id){
    console.log(`Event ${e.target.name}`);
    setSelectedId(id);
  }
  function handleSave(e, updatedData){
    console.log(`Event ${e.target.name}`);
    const newContacts = contacts.map(c => {
      if(c.id === updatedData.id){
        return updatedData;
      } else {
        return c;
      }
    })
    setContacts(newContacts);
  }
  return(
    <div>
      <ContactList
        contacts={contacts}
        selectedId={selectedId}
        onNameSelect={handleNameSelected}
      ></ContactList>

      <EditContact
        savedContact={selectedContact}
        onSave={handleSave}
      ></EditContact>
    </div>
  )
}