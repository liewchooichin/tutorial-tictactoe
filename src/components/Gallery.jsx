import reactLogo from '../assets/react.svg'

function Profile() {
    return (
      <img
        src={reactLogo}
        alt="React Log"
      />
    );
}
  
export default function Gallery() {
    return (
        <section>
        <h1>Mind boggling React</h1>
        <Profile />
        <Profile />
        <Profile />
        </section>
    );
}