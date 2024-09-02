import peopleinfoJson from "/peopleinfo.json?url"
import { getImageUrl } from "../utilities/utils"


async function fetchData(resourceUri){
  const response = await fetch(resourceUri);
  const data = await response.json();
  console.log(`Response: ${response.status}`);
  return data
}

/**Must have async and await for the fetchData */

export async function PeopleList(){
  /*
  const people = fetch(peopleinfoJson)
                  .then(response => response.json())
                  .then(people => console.log(people))
                  */
  const people = await fetchData(peopleinfoJson);
  console.log(`people: ${people.length}`);
  for(const p of people)
    console.log(p.name);
  console.log(typeof(people));
  
  const items = people.map(
    person => {return (<li key={person.id}>{person}</li>)}
  )

  /** Chemists */
  const chemists = people.filter(
    person => person.profession==="chemist"
  )
  const listChemists = chemists.map(
    person => {return(
     <li key={person.id}>
      <img src={getImageUrl(person.imageId)} alt={person.name}></img>
      <p>
        <b>{person.name}</b>
        {" " + person.profession + " "} known for 
        { person.accomplishment}
      </p>
     </li> 
    )}
  )

  return(
    <div>
      <ul>{items}</ul>
      <ul>{listChemists}</ul>
    </div>
  )
}