import { useState } from 'react';
import PropTypes from 'prop-types';

import Accordion from 'react-bootstrap/Accordion';


/**
 * Accordian component is the child components. The state
 * of whether a panel is active or not is controlled by
 * a top component.
 */

const funFactsData = [
    {
        id: 0,
        topic: "Almaty, Kazakhstan: Population",
        facts: "With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city."
    },
    {
        id: 1,
        topic: "Almaty, Kazakhstan: Etymology",
        facts: "The name comes from алма, the Kazakh word for \"apple\" and is often translated as \"full of apples\". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple."
    },
    {
        id: 2,
        topic: "Cloud is not as fluffly as you think",
        facts: "A cloud weighs around a million tonnes."
    },
    {
        id: 3,
        topic: "Giraffess and lightning",
        facts: "Giraffes are 30 times more likely to get hit by lightning than people. True. This is 30 times the equivalent fatality rate for humans."
    }, 
    {
        id: 4,
        topic: "Earth’s rotation is changing speed",
        facts: "Earth’s rotation is changing speed. It's actually slowing. This means that, on average, the length of a day increases by around 1.8 seconds per century. 600 million years ago a day lasted just 21 hours."

    }
]

AccordionSection.propTypes = {
    activeIndex: PropTypes.number.isRequired,
    itemId: PropTypes.number.isRequired,
    itemTopic: PropTypes.string.isRequired,
    itemFacts: PropTypes.string.isRequired,
    handleHeaderClick: PropTypes.func.isRequired
}
function AccordionSection({activeIndex, itemId, itemTopic, itemFacts,
    handleHeaderClick
}){

    return(
            <Accordion.Item eventKey={`${itemId}`}>
                <Accordion.Header
                    className="fw-bold"
                    as="h2"
                    onClick={(e) => handleHeaderClick(e, itemId)}
                >
                    {itemTopic}
                </Accordion.Header>
                <Accordion.Body>
                    {itemFacts}
                </Accordion.Body>
            </Accordion.Item>
    )
}

export function FunFacts(){
    // which index is active
    const [funFacts, setFunFacts] = useState(funFactsData);
    const [activeIndex, setActiveIndex] = useState(0);

    function handleHeaderClick(e, itemId){
        console.log(`Header ${e.type}, item id: ${itemId}`);
        //Make the current index the active index
        setActiveIndex(itemId);
    }

    return(
        <Accordion>
        { funFacts.map((i, index) => (
          <AccordionSection 
                key={i.id}
                activeIndex={activeIndex}
                itemId={i.id}
                itemTopic={i.topic}
                itemFacts={i.facts}
                handleHeaderClick={handleHeaderClick}
            >
            </AccordionSection>
        ))}
        </Accordion>
    )
}
