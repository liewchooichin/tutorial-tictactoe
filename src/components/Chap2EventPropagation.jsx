/**
 * 
 * If you click on either button, its onClick will run first, 
 * followed by the parent <div>’s onClick. So two messages will 
 * appear. If you click the toolbar itself, only the parent <div>’s 
 * onClick will run.
 * 
 * Event handlers receive an event object as their only argument. By 
 * convention, it’s usually called e, which stands for “event”. You 
 * can use this object to read information about the event.
 * 
 * That event object also lets you stop the propagation. If you want 
 * to prevent an event from reaching parent components, you need to 
 * call e.stopPropagation() like this Button component does:
 * 
 * Preventing default behavior 
 * Some browser events have default behavior associated with them. 
 * For example, a <form> submit event, which happens when a button 
 * inside of it is clicked, will reload the whole page by default:
 * 
 * You can call e.preventDefault() on the event object to stop this 
 * from happening:
 * 
 * Don’t confuse e.stopPropagation() and e.preventDefault(). They 
 * are both useful, but are unrelated:
 * e.stopPropagation() stops the event handlers attached to the tags 
 * above from firing.
 * e.preventDefault() prevents the default browser behavior for the 
 * few events that have it.
 * 
 * In form, prevent default to prevent the page from reloading. It 
 * is not possible to stop propagation in Form Submit. Stop 
 * propagation will cause the page to reload, hence no prevent 
 * default.
 * 
 */
export function Signup1() {
    return (
      <form 
        onSubmit={e => {
        e.preventDefault();
        console.log(`Event ${e.type}`);
        console.log('Prevent Default. Submitting!');
      }}>
        <input />
        <button>Submit (prevent default)</button>
      </form>
    );
  }

export function Signup2() {
return (
    <form 
    onSubmit={e => {
    //e.stopPropagation(); // not possible to stop propagation.
    e.preventDefault();
    console.log(`Event ${e.type}`);
    console.log('In form, prevent default to prevent the page from reloading. It is not possible to stop propagation in Form Submit. Stop propagation will cause the page to reload, hence no prevent default.');
    }}>
    <input />
    <button>Submit (only can prevent default, there is no stop propagation)</button>
    </form>
);
}
  
function Button({ onClick, children }) {
    return (
      <button onClick={e => {
        e.stopPropagation();
        console.log(`Event: ${e.type}`);
        onClick();
      }}>
        {children}
      </button>
    );
  }

export function Toolbar4() {
    return (
      <div 
        style={{backgroundColor:"lightsalmon", fontWeight:"bold"}}
        className="Toolbar"
        onClick={() => {
        console.log('You clicked on the toolbar!');
      }}> Toolbar 
        <Button onClick={() => console.log('Playing!')}>
          Play Movie
        </Button>
        <Button onClick={() => console.log('Uploading!')}>
          Upload Image
        </Button>
        <Signup1></Signup1>
        <Signup2></Signup2>
         Toolbar
      </div>
    );
  }
  