import { useState, useEffect } from 'react'
import peopleinfoJson from "/peopleinfo.json?url"
import { getImageUrl } from "../utilities/utils"


async function fetchData(resourceUri){
  const response = await fetch(resourceUri);
  const data = await response.json();
  console.log(`Response: ${response.status}`);
  return data
}

export function ChemistsList(){

  const [people, setPeople] = useState([]);
  
  useEffect(() => 
  fetch(peopleinfoJson)
    .then(response => response.json())
    .then(data => {
      setPeople(data)
    }), []);

  for(const p of people)
    console.log(p.profession);
  console.log(typeof(people));
    
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
        <ul>{listChemists}</ul>
      </div>
    )
}

/**Must have async and await for the fetchData */

export function PeopleList(){
  
  [people, setPeople] = useState([])
  useEffect(() =>
  fetch(peopleinfoJson)
    .then(response => response.json())
    .then(people => {
      setPeople(data);
      console.log(people)
    }), []);
    
    console.log(`people: ${people.length}`);
    for(const p of people)
      console.log(p.name);
    console.log(typeof(people));
    
    const items = people.map(
      person => {return (<li key={person.id}>{person}</li>)}
    )
    return(
      <div>
        <ul>{items}</ul>
      </div>
    )
}