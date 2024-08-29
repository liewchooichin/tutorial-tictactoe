import reactLogo from '../assets/react.svg'
import Image from 'react-bootstrap/Image'


export function Profile() {
    return (
      <>
      <Image 
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Hedy Lamarr"
        thumbnail
      />
      </>
    );
}
  
export function Gallery() {
    return (
        <section>
        <h1>Hedy Lamarr's Gallery</h1>
        <Profile />
        <Profile />
        <Profile />
        </section>
    );
}