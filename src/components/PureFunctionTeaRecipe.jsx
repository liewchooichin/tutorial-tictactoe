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
    guest:PropTypes.number
}
  function Cup({guest}){
    return (<h2>Tea cup for guest #{guest}</h2>);
  }

  export function TeaGathering(){
    const cups = [];
    cups.push(<h2>Tea gathering</h2>)
    for(let i=0; i<=7; i++)
        cups.push(<Cup key={i} guest={i} />);
    return (cups);
  }