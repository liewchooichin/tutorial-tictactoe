import PropTypes from "prop-types";
import { useState } from 'react';
import { initialPlaces } from "./dataPlaces";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button"

/**
 * PlaceTree is a recursive function.
 */
PlaceTree.propTypes = {
    id: PropTypes.number.isRequired,
    parentId: PropTypes.number.isRequired,
    placesById: PropTypes.object.isRequired,
    onComplete: PropTypes.func.isRequired
}
function PlaceTree({id, parentId, placesById, onComplete}){
    const place = placesById[id];
    const childIds = place.childIds;
    
    console.log(`PlaceTree id:${id}`);
    console.log(`\tparentId: ${parentId}`);
    console.log(`\tplace: ${place.id} ${place.title}`);
    console.log(`\tchildren: ${childIds}`);

    return(
        <ListGroup className="p-0 m-0 ms-0"
            key={id}
        ><ListGroup.Item className="p-0 m-0 ms-3">
            --- {place.id} -- {place.title} --
            -- number of children {childIds.length}
            <Button
                type="button"
                variant="primary"
                onClick={(e) => onComplete(e, parentId, id)}
            >
                Complete
            </Button>
            </ListGroup.Item >
            {/**If there are children **/}
            {
                (childIds.length > 0) &&
                (childIds.map((childId) => (
                    <ListGroup.Item key={childId}>
                    <PlaceTree
                        key={childId}
                        id={childId}
                        parentId={id}
                        placesById={placesById}
                        onComplete={onComplete}
                    ></PlaceTree>
                    </ListGroup.Item>
                )))
            }
        </ListGroup>
    )
}

PlacesVisited.propTypes = {
    placesVisited: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.objectOf(PropTypes.number).isRequired,
        title: PropTypes.objectOf(PropTypes.string).isRequired,
        childIds: PropTypes.arrayOf(PropTypes.number).isRequired,
    }))
}
function PlacesVisited({placesVisited}){
    return(
        <>
        <h2>Places visited</h2>
        {
            placesVisited.map(item => (
                <p key={item.id}>{item.id} {item.title}</p>
            ))
        }
        </>
    )
}

export function TravelPlan2(){
    const [plan, setPlan ] = useState(initialPlaces);
    const initialPlacesVisited = [{}]
    const [placesVisited, setPlacesVisited] = useState(initialPlacesVisited);

    function handleComplete(e, parentId, childId){
        const parent = plan[parentId];
        const child = plan[childId];
        console.log(`Complete: ${e.type} 
            parentId: ${parentId} title: ${plan[parentId].title}
            childId: ${childId} title: ${plan[childId].title}`);
        const newPlaceVisited = {...plan[childId]};
        setPlacesVisited([newPlaceVisited, ...placesVisited])
        
    }

    const root = plan[0]; // the root item with the childIds
    const planetIds = root.childIds;

    return(
        <>
        <h2>Places to visit</h2>
        <PlacesVisited placesVisited={placesVisited}></PlacesVisited>
        {planetIds.map((childId)=>(
            <PlaceTree
                key={childId}
                id={childId}
                parentId={0}
                placesById={plan}
                onComplete={handleComplete}
            ></PlaceTree>
        ))}
        </>
    )
}