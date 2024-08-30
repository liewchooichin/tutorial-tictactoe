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

/**
 * Array cannot work.
 * Keep having the error: awards.length
 */

ProfileCard.propTypes = {
  personName: PropTypes.object.isRequired,
  imageId: PropTypes.string.isRequired,
  size: PropTypes.number,
  profession: PropTypes.string,
  awards: PropTypes.array,
  discovery: PropTypes.string
}
//Awards {awards.length}: {awards.join(", ")} <br/>
export function ProfileCard({imageId, personName, size=70,
  profession, awards, discovery}){
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={getImageUrl(imageId)} />
      <Card.Body>
        <Card.Title>{personName}</Card.Title>
        <Card.Text>
          Profession: {profession}<br/>
          Awards {awards}<br/>
          <i>Problems using array in components</i><br/>
          Discover: {discovery}
        </Card.Text>
        <Button variant="primary">More info</Button>
      </Card.Body>
    </Card>
  );
}

export function Gallery() {
  const galleryName = "A Gallery";

  return (
      <section>
      <h1>{galleryName}</h1>
      <ProfileCard name='Lin Lanying' imageId='1bX5QH6' size={100} />
      <ProfileCard name='Aklilu Lemma' imageId='OKS67lh' size={80} />
      <ProfileCard name='Katsuko Saruhashi' imageId='YfeOqp2' size={50} />
      <ProfileCard
        imageId="szV5sdG" personName="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        discovery="polonium (chemical element)"
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ]}
      />
      <ProfileCard
        imageId='YfeOqp2'
        personName='Katsuko Saruhashi'
        profession='geochemist'
        discovery="a method for measuring carbon dioxide in seawater"
        awards={[
          "Miyake Prize for geochemistry",
          "Tanaka Prize"
        ]}

      />
      </section>
  );
}