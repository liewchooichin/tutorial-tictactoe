import { useState, useEffect } from 'react';

export function DotMoveOrFreeze() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [canMove, setCanMove] = useState(true);

  useEffect(() => {
    // Check for effect running only when checkbox is checked.
    // If this line is printing every time the pointer moves,
    // then something is not right.
    console.log('Resubscribing');

    function handleMove(e) {
      if(canMove )
        setPosition({ x: e.clientX, y: e.clientY });
      // Can fix the dot at the upper left corner.
      //else
      //  (setPosition( {x: 0, y: 0 }))
    }
    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, [canMove ]);

  return (
    <>
      <label>
        <input type="checkbox"
          checked={canMove}
          onChange={e => setCanMove(e.target.checked)} 
        />
        {canMove ? "The dot cannot move" : "The dot is allowed to move"}
      </label>
      <hr />
      <div style={{
        position: 'absolute',
        backgroundColor: 'pink',
        borderRadius: '50%',
        border: '2px solid darkgrey',
        opacity: 0.6,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
      }} />
    </>
  );
}
