import reactLogo from '../assets/react.svg'
import Image from 'react-bootstrap/Image'


export function Profile() {
    return (
      <Image 
        src={reactLogo}
        alt="React Log"
        thumbnail
      />
    );
}
  
export function Gallery() {
    return (
        <section>
        <h1>Mind boggling React</h1>
        <Profile />
        <Profile />
        <Profile />
        </section>
    );
}