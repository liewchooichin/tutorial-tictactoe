/**
 * All button click handlers are “debounced”. 
 * Debouncing lets you delay some action until the user
 * “stops doing things”.
 */
import PropTypes from "prop-types";
import { useRef } from "react";

DebouncingButton.propTypes = {
  children: PropTypes.elementType.isRequired,
  displayMessage: PropTypes.func.isRequired,
}
function DebouncingButton({children, displayMessage}){
  // time out id
  let timeoutRef = useRef(null);


  function handleBtnClick(){
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(
      () => {displayMessage()},
      3000
    )
    return;
  }

  return(
    <>
    <button
      onClick={handleBtnClick}
    >
      {children}
    </button>
    </>
  )
}

export function DebouncingButtonApp(){
  return(
    <>
      <DebouncingButton
        displayMessage={() => {alert("Launch the spaceship")}}
      >
        Launch the spaceship
      </DebouncingButton>

      <DebouncingButton
        displayMessage={() => {alert("Boil the soup")}}
      >
        Boil the soup
      </DebouncingButton>

      <DebouncingButton
        displayMessage={() => {alert("Sing a lullaby")} }
      >
        Sing a lullaby
      </DebouncingButton>
    </>
  )
}