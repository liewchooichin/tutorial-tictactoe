import { useRef } from 'react';

export function RefIntroApp() {
  let ref = useRef(0);

  function handleClick() {
    const newValue = ref.current + 1;
    ref.current = newValue;
    //ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <>
    <h2><code>&#x2774;ref.current&#x2775;</code> is placed before the button handler.
    There is no change in value. Value is changing and there is no re-rendering.
    </h2>
    <h2>Ref: {ref.current}</h2>
    <button onClick={handleClick}>
      Click me!
    </button>
    <h2>Ref: {ref.current}</h2>
    </>
  );
}
