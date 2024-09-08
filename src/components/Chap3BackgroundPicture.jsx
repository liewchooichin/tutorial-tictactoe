import { useState } from 'react';

const initialBackgroundStyle = 
  {
    border:"3px solid black", 
    display:"grid",
    justifyContent: "center",
    backgroundColor: "lightgrey",
  };
const initialPictureStyle = {
    border: "3px dashed green"
}
const backgroundStyle = {
    display:"grid",
    justifyContent: "center",
    backgroundColor:"rebeccapurple"
};
const pictureStyle = {
    border:"2px dashed black", 
    padding:"10px",
    backgroundColor: "lightgrey"
};

export function BackgroundPicture() {
  const [isBackgroundActive, setBackgroundActive] = useState(false);
  const [isPictureActive, setPictureActive] = useState(false);
  const [activeBackgroundStyle, setBackgroundActiveStyle] = useState(initialBackgroundStyle);
  const [activePictureStyle, setPictureActiveStyle] = useState(initialPictureStyle);

  function handleBackgroundClick(e){
    e.stopPropagation();
    setBackgroundActive(!isBackgroundActive);
    if(isBackgroundActive===true) {
        setBackgroundActiveStyle(backgroundStyle);
    }
    else {
        setBackgroundActiveStyle(initialBackgroundStyle);
    }
  }
 
  function handlePictureClick(e){
    e.stopPropagation();
    setPictureActive(!isPictureActive);
    if(isPictureActive===true){
      setPictureActiveStyle(pictureStyle);
    } else{
        setPictureActiveStyle(initialPictureStyle)
    }
  }

  return (
    <div
      style={activeBackgroundStyle}
      onClick={(e) => handleBackgroundClick(e)}
    >
      <img
        onClick={(e) => handlePictureClick(e)}
        style={activePictureStyle}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        width="200px" height="200px"
      />
    </div>
  );
}
