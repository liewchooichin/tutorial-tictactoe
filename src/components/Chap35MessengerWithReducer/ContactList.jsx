import PropTypes from "prop-types";


ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    })),
    selectedId: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired

}
export function ContactList({contacts, selectedId, dispatch}) {
    /**Dispatch */
    function handleContactClick(e, contactId){
        console.log(`Contact ${e.target.name} ${e.type}`);
        console.log(`Selected id: ${contactId}`)
        dispatch({
            type: "changed_selection",
            newContactId: contactId
        })
    }
    return (
      <section className="contact-list">
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <button
                id={`btn**${contact.id}**${contact.name}`}
                name={`btn**${contact.id}**${contact.name}`}
                onClick={(e) => {
                  // TODO: dispatch changed_selection
                  handleContactClick(e, contact.id);
                }}>
                {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  