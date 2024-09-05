
import { useState } from 'react';
import { sculptureList } from './dataSculpture.jsx';

export  function SculptureGallery2() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handlePreviousClick(){
    setIndex((index-1)>=0 ? index-1 : 0);
    console.log(`Index ${index}`);
  }
  function handleNextClick() {
    setIndex((index + 1)>=sculptureList.length 
    ? sculptureList.length-1
    : index+1);
    console.log(`Index ${index}`);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handlePreviousClick}>
        Previous
      </button>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}
