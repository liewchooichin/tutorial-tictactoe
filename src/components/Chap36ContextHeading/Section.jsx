import "./styles.css";
import PropTypes from "prop-types";
import { LevelContext } from "./LevelContext";


Section.propTypes = {
    level: PropTypes.number.isRequired,
    children: PropTypes.element.isRequired
}
export default function Section({ level, children }) {

    return (
      <section className="section">
        <LevelContext.Provider value={level}>
            {children}
        </LevelContext.Provider>
      </section>
    );
  }
  