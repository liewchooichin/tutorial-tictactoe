import { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

import { initialLetters } from './dataLetter';


LetterList.propTypes = {
    letter: PropTypes.shape({
            id: PropTypes.number.isRequired,
            subject: PropTypes.string.isRequired,
            isStarred: PropTypes.bool.isRequired
        }),
    highlightedLetter: PropTypes.shape({
        id: PropTypes.number.isRequired,
        subject: PropTypes.string.isRequired,
        isStarred: PropTypes.bool.isRequired
    }),
    onFocus: PropTypes.func.isRequired,
    onBtnClick: PropTypes.func.isRequired
}
function LetterList({letter, highlightedLetter, onFocus, onBtnClick}){
    const isHighlighted = (letter.id === highlightedLetter.id);

    return( 
            <ListGroup.Item
                    key={letter.id}
                    className={
                        isHighlighted
                        ? "bg-primary-subtle" 
                        : ""
                    }
                    onFocus={e => onFocus(e, letter)}
                    onPointerMove={e => onFocus(e, letter)}
                >
                <Form.Group>
                    <Button
                        type="button"
                        id={`btn${letter.id}`}
                        name={`btn${letter.id}`}
                        onClick={(e) => onBtnClick(e)}
                    >{letter.isStarred ? "Star" : "Unstar"}
                    </Button>
                    <Form.Label htmlFor={`btn${letter.id}`}>
                        {letter.subject}
                    </Form.Label>
                </Form.Group>
                </ListGroup.Item>         
    )
}

export function StarLetter(){

    const [letters, setLetters] = useState(initialLetters);
    const [highlightedLetter, setHighlightedLetter] = 
        useState(initialLetters[0]);

    function handleFocus(e, letter){
        e.stopPropagation();
        console.log(`Type ${e.type}`);
        // each letter has an id
        setHighlightedLetter(letter);
    }
    function handleBtnClick(e){
        // prevent default
        //e.preventDefault();
        e.stopPropagation();
        console.log(`Type: ${e.type}`)
        // set the star status of a letter
        const newItem = {...highlightedLetter, 
            isStarred: !highlightedLetter.isStarred};
        // Update the list of letter
        setLetters(letters.map((i) => {
            if(i.id === highlightedLetter.id){
                return newItem;
            } else {
                return i;
            }
        }))
        // Also need to update the star status of
        // the highlighted letter.
        setHighlightedLetter(newItem);
    }

    return(
        <>
        <ListGroup variant="flush">
        {   
            letters.map(i => (
                <LetterList
                    key={i.id}
                    letter={i}
                    highlightedLetter={highlightedLetter}
                    onFocus={handleFocus}
                    onBtnClick={handleBtnClick}
                ></LetterList>
        ))}
        </ListGroup>
        </>
    )
}