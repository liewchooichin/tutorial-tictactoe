import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./MyApp.module.css";



export function CounterApp() {
  const [showB, setShowB] = useState(true);
  return (
    <div>
      <CounterComponent counterName="Counter 1"/>
      {showB && <CounterComponent counterName="Counter 2"/>} 
      <label>
        <input
          type="checkbox"
          checked={showB}
          onChange={e => {
            setShowB(e.target.checked)
          }}
        />
        Render the second counter
      </label>
    </div>
  );
}


CounterComponent.propTypes = {
    counterName: PropTypes.string.isRequired
}
function CounterComponent({counterName}) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = `${styles.counter}`;
  if (hover) {
    className += ` ${styles.hover}`;
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <p>{counterName}</p>
      <h1>{score}</h1>
      <button onClick={() => {
            // to demo that the new score
            // can be used to +3 to score.
            let newScore = score + 1;
            newScore = newScore + 1;
            newScore = newScore + 1;
            setScore(newScore);
        }}>
        Add three
      </button>
    </div>
  );
}
