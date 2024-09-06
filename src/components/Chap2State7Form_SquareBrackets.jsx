import { useState } from 'react';

/**
 * It is also possible to use [] with ...syntax.
 * This is possible when the form name is the same 
 * as the object names.
 * e.target.name refers to the name property given
 * to the <input> DOM element.
 * 
 */

export function ScoreForm(){
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });

  function handlePlusClick() {
    const nextScore = player.score + 1;
    setPlayer({...player, score: nextScore });
    
  }

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPlayer({
      ...player,
      lastName: e.target.value
    });
  }

  return (
    <>
      <label>
        Score: <b>{player.score}</b>
        {' '}
        <button onClick={handlePlusClick}>
          +1
        </button>
      </label>
      <label>
        First name:
        <input
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Score is {player.score} for {player.firstName} {player.lastName}.
      </p>
    </>
  );
}

export function NameForm2() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
    address: {
      block: '100',
      street: 'Green Way',
      city: 'Green City',
      postalCode: '100100'
    }
  });

  /**
   * This change is for top level attributes.
   *  
   */
  function handleChange(e) {
    const firstNameEle = document.querySelector("#firstName");
    const lastNameEle = document.querySelector("#lastName");
    const emailEle = document.querySelector("#email");
    const blockEle = document.querySelector("#block");
    const streetEle = document.querySelector("#street");
    const cityEle = document.querySelector("#city");
    const postalCodeEle = document.querySelector("#postalCode");

    const nextFirstLevelAttributes = {
      firstName: firstNameEle.value,
      lastName: lastNameEle.value,
      email: emailEle.value
    }
    const nextAddress = {
      block: blockEle.value,
      street: streetEle.value,
      city: cityEle.value,
      postalCode: postalCodeEle.value
    };
    const nextObject = {
      ...nextFirstLevelAttributes,
      address: {...nextAddress}
    }
    setPerson(nextObject);
  }

  return (
    <>
      <label>
        First name:
        <input
          id="firstName"
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          id="lastName"
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          id="email"
          name="email"
          value={person.email}
          onChange={handleChange}
        />
      </label>
      <br/>Address<br/>
      <label>
        Block:
        <input
          id="block"
          name="block"
          value={person.address.block}
          onChange={handleChange}
        />
      </label>
      <label>
        Street:
        <input
          id="street"
          name="street"
          value={person.address.street}
          onChange={handleChange}
        />
      </label>      
      <p>
      <label>
        City:
        <input
          id="city"
          name="city"
          value={person.address.city}
          onChange={handleChange}
        />
      </label>      
      <label>
        Postal code:
        <input
          id="postalCode"
          name="postalCode"
          value={person.address.postalCode}
          onChange={handleChange}
        />
      </label>      
        <br/>Details:<br/>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
        <br/>Address:<br/>
        {person.address.block}{' '}
        {person.address.street}{', '}
        {person.address.city}{', '}
        {person.address.postalCode}{'.'}
      </p>
    </>
  );
}
