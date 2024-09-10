import PropTypes from "prop-types";
import { useState } from 'react';
import { initialPlaces } from "./dataPlaces";
import ListGroup from "react-bootstrap/ListGroup";


/**
 * PlaceTree is a recursive function.
 */
PlaceTree.propTypes = {
    id: PropTypes.number.isRequired,
    placesById: PropTypes.object.isRequired
}
function PlaceTree({id, placesById}){
    const place = placesById[id];
    const childIds = place.childIds;

    return(
        <ListGroup className="p-0 m-0 ms-0"
            key={id}
        ><ListGroup.Item className="p-0 m-0 ms-3">
            --- {place.title}, 
            number of children {childIds.length}
            </ListGroup.Item >
            {/**If there are children **/}
            {
                (childIds.length > 0) &&
                (childIds.map((childId) => (
                    <ListGroup.Item key={childId}>
                    <PlaceTree
                        key={childId}
                        id={childId}
                        placesById={placesById}
                    ></PlaceTree>
                    </ListGroup.Item>
                )))
            }
        </ListGroup>
    )
}


export function TravelPlan(){
    const [plan, setPlan ] = useState(initialPlaces);
    const root = plan[0]; // the root item with the childIds
    const planetIds = root.childIds;

    return(
        <>
        <h2>Places to visit</h2>
        {planetIds.map((childId)=>(
            <PlaceTree
                key={childId}
                id={childId}
                placesById={plan}
            ></PlaceTree>
        ))}
        </>
    )
}