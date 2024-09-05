/**
 * Notice how the App component does not need to know what Toolbar 
 * will do with onPlayMovie or onUploadImage. That’s an 
 * implementation detail of the Toolbar. Here, Toolbar passes them 
 * down as onClick handlers to its Buttons, but it could later also 
 * trigger them on a keyboard shortcut. Naming props after 
 * app-specific interactions like onPlayMovie gives you the 
 * flexibility to change how they’re used later.
 * 
 */
import PropTypes from "prop-types";

export function Toolbar3() {
    return (
      <Toolbar
        onPlayMovie={() => console.log('Toolbar3: Playing!')}
        onUploadImage={() => console.log('Toobar3: Uploading!')}
      />
    );
  }
  
  Toolbar.propTypes = {
    onPlayMovie: PropTypes.func,
    onUploadImage: PropTypes.func
  }
  function Toolbar({ onPlayMovie, onUploadImage }) {
    return (
      <div>
        <Button onClick={onPlayMovie}>
          Play Movie
        </Button>
        <Button onClick={onUploadImage}>
          Upload Image
        </Button>
      </div>
    );
  }
  
  Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.string
  }
  function Button({ onClick, children }) {
    return (
      <button onClick={onClick}>
        {children}
      </button>
    );
  }
  


