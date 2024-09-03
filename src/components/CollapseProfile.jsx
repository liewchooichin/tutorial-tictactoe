import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import { getImageUrl } from '../utilities/utils';
import { ProfileCard } from './Gallery_v2';
import { propTypes } from 'react-bootstrap/esm/Image';

CollapseProfile.propTypes = {
    person: propTypes.object
} 
function CollapseProfile({person}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h2>Gallery (Collapse-able profile)</h2>
      <Button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        click
      </Button>
      <Collapse in={open}>
        <div>
            <ProfileCard person={person}></ProfileCard>
        </div>
      </Collapse>
    </div>
  );
}

export function GalleryCollapseProfile(){

    const p1 = {"name":'Lin Lanying', imageId:'1bX5QH6'};
    const p2 = {name:'Aklilu Lemma', imageId:'OKS67lh'};
    const p3 = {name:'Katsuko Saruhashi', imageId:'YfeOqp2'};

    return(
        <div>
            <CollapseProfile person={p1}></CollapseProfile>
            <CollapseProfile person={p2}></CollapseProfile>
            <CollapseProfile person={p3}></CollapseProfile>
        </div>
    )
}