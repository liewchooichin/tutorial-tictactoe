import { useState } from 'react';


const initialArtists = [
  { id: 0, name: 'Abab' },
  { id: 1, name: 'Abac'},
  { id: 2, name: 'Abad'},
];

export function InsertNewItemIntoList() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState(
    initialArtists
  );

  function handleReverse(){
    const newList = [...artists];
    newList.reverse();
    setArtists(newList);
    return;
  }

  function handleSortAscendingID(){
    // sort the list according to the id
    const newID = [...artists];
    console.log(newID);
    newID.sort((a, b)=>a.id-b.id);
    setArtists(newID);
    return;
  }
  function handleSortDescendingID(){
    // sort the list according to the id
    const newID = [...artists];
    console.log(newID);
    newID.sort((a, b)=>b.id-a.id);
    setArtists(newID);
    return;
  }
  /** Two ways of writing the compare string functions. */
  function handleSortAscendingName(){
    // sort the list according to the name
    const newList = [...artists];
    console.log(newList);
    newList.sort((a, b)=> {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            // This will also work
            //return nameA.localeCompare(nameB);
            if(nameA < nameB)
                return -1;
            if(nameA > nameB)
                return 1;
            return 0; // equal
    })
    setArtists(newList);
    return;
  }
  function handleSortDescendingName(){
    // sort the list according to the name
    const newList = [...artists];
    console.log(newList);
    newList.sort((a, b) => {
        return b.name.toLowerCase().localeCompare(a.name)
    })
    setArtists(newList);
    return;
  }  

  function handleClick() {
    function getRandomIndex(){
        const rand = Math.abs(Math.random()*artists.length);
        return rand;
    }
    const insertAt = getRandomIndex(); // Could be any index

    function getNextId(){
        // the next id happen to be just the 
        // current length of the artists.
        return artists.length;
    }
    // current name in the state
    const newName = name; 
    const newItem = {
        id: getNextId(),
        name: newName
    }
    const nextArtists = [
      // Items before the insertion point:
      ...artists.slice(0, insertAt),
      // New item:
      newItem,
      // Items after the insertion point:
      ...artists.slice(insertAt)
    ];
    setArtists(nextArtists);
    setName('');
    // focus the field name
    const fieldName = document.querySelector("#fieldName");
    fieldName.focus();
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        id="fieldName"
        name="fieldName"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleClick}>
        Insert
      </button>
      <button onClick={handleReverse}>
        Reverse
      </button>
      <p>
      <button onClick={handleSortAscendingID}>
        Sort ID Ascending
      </button>
      <button onClick={handleSortDescendingID}>
        Sort ID Descending
      </button>
      <button onClick={handleSortAscendingName}>
        Sort Name Ascending
      </button>
      <button onClick={handleSortDescendingName}>
        Sort Name Descending
      </button>
      </p>

      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.id}: {artist.name}</li>
        ))}
      </ul>
    </>
  );
}
