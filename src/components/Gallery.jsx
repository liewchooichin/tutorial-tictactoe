import reactLogo from '../assets/react.svg'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'
import { getImageUrl } from '../utilities/utils'

Avatar.propTypes = {
  person: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  imageId: PropTypes.string.isRequired,
  size: PropTypes.number
}

export function Avatar({person, size=100}){
  return(
    <Image
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    ></Image>
  );
}

ProfileCard.propTypes = {
  person: PropTypes.object.isRequired,
  size: PropTypes.number
}
export function ProfileCard({person, size=70}){
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={getImageUrl(person)} />
      <Card.Body>
        <Card.Title>{person.name}</Card.Title>
        <Card.Text>
          Size of image={size}.
        </Card.Text>
        <Button variant="primary">More info</Button>
      </Card.Body>
    </Card>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  imageId: PropTypes.string.isRequired,
  size: PropTypes.number
}
export function Profile({name, imageId, size=100}) {
  // Using JavaScript variables with {}
  return (
    <ProfileCard
      person={{name:name, imageId:imageId}}
      size={size}
    >
    </ProfileCard>
  );
}
  
export function Gallery() {
  const galleryName = "A Gallery";

  return (
      <section>
      <h1>{galleryName}</h1>
      <Profile name='Lin Lanying' imageId='1bX5QH6' size={100} />
      <Profile name='Aklilu Lemma' imageId='OKS67lh' size={80} />
      <Profile name='Katsuko Saruhashi' imageId='YfeOqp2' size={50} />
      </section>
  );
}