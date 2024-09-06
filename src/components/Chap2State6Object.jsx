import { useState } from 'react';

export  function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  function handlePointerMove(e){
    /* Create a fresh object first */
    const nextPosition = {x: 0, y: 0};
    nextPosition.x = e.clientX;
    nextPosition.y = e.clientY;
    /* Assign the new object to the state */
    setPosition(nextPosition);
  }
  return (
    <div
      onPointerMove={handlePointerMove}
      
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}>
      <div style={{
        position: 'absolute',
        backgroundColor: 'blue',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
    </div>
  );
}
