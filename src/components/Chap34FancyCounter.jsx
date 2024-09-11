import PropTypes from "prop-types";
import { useState } from 'react';
import styles from "./MyApp.module.css";
 

export function FancyCounterApp() {
  const [isFancy, setIsFancy] = useState(false);
  return (
    <div>
      {isFancy ? (
        <CounterComponent counterName="Counter 1" isFancy={true} /> 
      ) : (
        <CounterComponent counterName="Counter 1" isFancy={false} /> 
      )}
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={e => {
            setIsFancy(e.target.checked)
          }}
        />
        Use fancy styling
      </label>
    </div>
  );
}

CounterComponent.propTypes = {
    counterName: PropTypes.string.isRequired,
    isFancy: PropTypes.bool.isRequired
}
function CounterComponent({ isFancy }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = `${styles.counter}`;
  if (hover) {
    className += ` ${styles.hover}`;
  }
  if (isFancy) {
    className += ` ${styles.fancy}`;
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}
