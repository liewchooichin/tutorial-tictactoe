import PropTypes from "prop-types"

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.array
}
/** Passing event handlers as props */
function Button({onClick, children}){
    return(
        <button onClick={onClick}>
            {children}
        </button>
    )
}

function PlayButton({movieName}){
    function handlePlayClick(){
        console.log(`Playing ${movieName}`);
    }
    return(
        <Button onClick={handlePlayClick}>
            Play {movieName}
        </Button>
    )
}
function UploadButton({filename}){
    function handleUploadClick(){
        console.log(`Uploading ...${filename}`);
    }
    return(
        <Button onClick={handleUploadClick}>
            Upload file {filename}
        </Button>
    )
}
export function Toolbar2(){
    return(
        <div>
            <PlayButton movieName="Kiki's Delivery Service">
            </PlayButton>
            <UploadButton filename="Delivery list"></UploadButton>
        </div>
    )
}


/** Simple button and event handler */
function Button1({onClick, message, children}){
    return(
        <button onClick={onClick}>
            {children}
        </button>
    )
}
function AlertButton1({message, children}){
    function handleClick({event}){
        console.log(`Message: ${message}\n`); // ok
        console.log(`Children: ${children}\n`); // ok
        console.log(`Event detail: ${event}\n`); // event: undefined
    } 
    return(
        <Button1 onClick={(event)=>handleClick(event)}>
            {children}
        </Button1>
    )
}

function AlertButton({ message, children }) {
    return (
      <button onClick={(event) => 
      {
        //alert(message);
        console.log(`${message}, ${event.detail}`);
      }
      }>
        {children}
      </button>
    );
  }

  /** Simple button and event handler */
  export function Toolbar1() {
    return (
      <div>
        <AlertButton1 message="Alert 101">
            Alert 101
        </AlertButton1>
        <AlertButton1 message="Alert 102">
            Alert 102
        </AlertButton1>
        <AlertButton message="Playing!">
          Play Movie
        </AlertButton>
        <AlertButton message="Uploading!">
          Upload Image
        </AlertButton>
      </div>
    );
  }