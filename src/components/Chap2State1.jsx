import { useState } from 'react';


import { sculptureList } from './dataSculpture.jsx';

export  function SculptureGallery() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    console.log(`Index: ${index}`);
    setIndex(index + 1);
  }
  function handleSubmit(e){
    e.preventDefault();
    const indexNumber = document.querySelector("#indexNumber");
    console.log(`Index number entered: ${indexNumber.value}`);
    setIndex(indexNumber.value);
    console.log("In handleSubmit");
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>

      <form>
        <label htmlFor="indexNumber">Go to sculpture</label>
        <input id="indexNumber" type="number" placeholder='0'></input>
        <button onClick={e => 
          handleSubmit(e)}>
            Go</button>
      </form>

      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index} of {sculptureList.length-1})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}
