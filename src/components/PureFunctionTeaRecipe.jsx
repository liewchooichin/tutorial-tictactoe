import PropTypes from "prop-types";


Recipe.propTypes = {
    person: PropTypes.number
}
function Recipe({ person=1 }) {
    return (
      <ol>    
        <li>Boil {person} cups of water.</li>
        <li>Add {person} spoons of tea and {0.5 * person} spoons of spice.</li>
        <li>Add {0.5 * person} cups of milk to boil and sugar to taste.</li>
      </ol>
    );
  }
  
  export function CupsOfTea() {
    return (
      <section>
        <h1>Spiced Chai Recipe</h1>
        <h2>For two</h2>
        <Recipe person={2} />
        <h2>For a gathering</h2>
        <Recipe person={4} />
      </section>
    );
  }
  
/**
 * When array is used, specifies the key
 */
Cup.propTypes = {
    guest_id: PropTypes.string,
    guest:PropTypes.number
}
  function Cup({guest_id, guest}){
    return (<h2>Tea cup for guest #{guest}, id: ({guest_id})</h2>);
  }

  function getRandomString(max) {
    return Math.floor(Math.random() * max).toString();
  }
  export function TeaGathering(){
    const cups = [];
    let guest_id = "";
    cups.push(<h2>Tea gathering</h2>)
    for(let i=0; i<=7; i++){
        guest_id = getRandomString(10001);
        cups.push(<Cup key={i}  guest_id={guest_id} guest={i} />);
    }
    return (cups);
  }