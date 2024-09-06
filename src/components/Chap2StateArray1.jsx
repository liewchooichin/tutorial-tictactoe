import { useState } from 'react';

let newId = 0; /** This must be outside of the function. */

export function ListOfNames() {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  function handleClick(e){
    function getNextId(){
        return id+1;
    }
    const nextId = getNextId();
    setId(nextId);
    const nextItem = {id: nextId, name: name};
    setArtists([nextItem, ...artists]);
  }
  function handleChangeName(e){
    const nextName = e.target.value;
    setName(nextName);
  }
  function handleDeleteName(e, currentId){
    const newList = artists.filter(
        item => {return item.id !== currentId}
    );
    setArtists(newList);
  }
  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        id="name"
        value={name}
        onChange={e=>handleChangeName(e)}
      />
      <button onClick={e => handleClick(e)}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.id}: {artist.name}
            <button 
                onClick={e => handleDeleteName(e, artist.id)}
            >Delete</button>
          </li>
        ))}
        
      </ul>
    </>
  );
}
