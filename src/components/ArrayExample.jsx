
import { people } from './data.js';
import { getImageUrl } from '../utilities/utils.jsx';
import { Fragment } from 'react';


export function MoreThanOneDomWithFragment(){
    const listItems = people.map(
        person => {
            return(
                <Fragment key={person.id}>
                    <h1>{person.name}</h1>
                    <p>{person.accomplishment}</p>
                    <ul>
                        <li>{person.profession}</li>
                    </ul>
                </Fragment>
            )
        }
    )
    return(listItems)
}


export function ChemistsList() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  const listItems = chemists.map(person =>
  {
    return (
      <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
      </li>

    
  )});

  return ( 
    <ul>{listItems}</ul>
   )
}

