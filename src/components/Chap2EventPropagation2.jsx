/**
 * Toggle the background color.
 */

export function LightSwitch() {
    function handleClick() {
      let bodyStyle = document.body.style;
      console.log(`toggleColor: ${bodyStyle.backgroundColor}`);
      if (bodyStyle.backgroundColor === 'lightgrey') {
        bodyStyle.backgroundColor = 'pink';
      } else {
        bodyStyle.backgroundColor = 'lightgrey';
      }
    }
    return (
    <button onClick={handleClick}>
        Toggle background color
    </button>
    );
}


export function ToggleColor(){
    return(
        <div>
            <LightSwitch></LightSwitch>
        </div>
    )
}