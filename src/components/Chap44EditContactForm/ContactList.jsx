import PropTypes from "prop-types"
import "./styles.css";

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  })),
    selectedId: PropTypes.number.isRequired,
    onNameSelect: PropTypes.func.isRequired,
}
export function ContactList({contacts, selectedId, onNameSelect}){
  return(
    <section>
      <ul>
        {
          contacts.map((c)=>(
            <li key={c.id}>
              <button
                name="btnSelectName"
                onClick={(e)=>onNameSelect(e, c.id)}
              >
                {
                  c.id === selectedId 
                    ? <b>{c.name}</b>
                    : c.name
                }
              </button>
            </li>
          ))
        }
      </ul>
    </section>
  )
}