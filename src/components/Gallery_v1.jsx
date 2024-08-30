import reactLogo from '../assets/react.svg'
import Image from 'react-bootstrap/Image'


export function Profile() {
  const avatar = "https://i.imgur.com/yXOvdOSs.jpg";
  const description = "Hedy Lamarr";

  // Using JavaScript variables with {}
  return (
    <>
    <Image 
      src={avatar}
      alt={description}
      thumbnail
    />
    </>
  );
}
  
export function Gallery() {
  const galleryName = "A Gallery";

  return (
      <section>
      <h1>{galleryName}</h1>
      <Profile />
      <Profile />
      <Profile />
      </section>
  );
}