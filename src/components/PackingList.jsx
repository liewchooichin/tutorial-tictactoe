import React from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";

Item1.propTypes = {
    itemName: PropTypes.string.isRequired,
    isPacked: PropTypes.bool.isRequired
}
function Item1({ itemName, isPacked }){
    return(
        <ListGroup.Item>
        {
            isPacked 
              ? (<del>{itemName} 🗸</del>)
              : (itemName + " 🗴")
         }
        </ListGroup.Item>
    )
}

Item2.propTypes = {
    itemName: PropTypes.string.isRequired,
    isPacked: PropTypes.bool.isRequired
}
// You can read this as “if isPacked, then (&&) 
// render the checkmark, otherwise, render nothing”.
// Or, if not checkmark, then render X.
function Item2({itemName, isPacked}){
    return(
        <ListGroup.Item>
            {itemName} 
            {isPacked && "   🗸"} 
            {!isPacked && "  🗴"}
        </ListGroup.Item>
    )
}

// Still another way to render
// This is the clearest for me.
Item3.propTypes = {
    itemName: PropTypes.string.isRequired,
    isPacked: PropTypes.bool.isRequired
}
function Item3({itemName, isPacked}){
    let itemContent = isPacked 
        ? itemName + "  🗸" 
        : itemName + "  🗴";
    return(
        <ListGroup.Item>
            {itemContent}
        </ListGroup.Item>
    )
}


// This is a little hard to comprehend.
// The bracket in itemContent is crucial.
Item4.propTypes = {
    itemName: PropTypes.string.isRequired,
    isPacked: PropTypes.bool.isRequired
}
function Item4({itemName, isPacked}){
    let itemContent = itemName;
    if(isPacked) {
        itemContent = (
            <del>{itemName + "  🗸" }</del>
        );
    } else {
        itemContent = (itemName + "  🗴");
    }
        
    return(
        <ListGroup.Item>
            {itemContent}
        </ListGroup.Item>
    )
}

// More conditional rendering
Drink.propTypes = {
    name: PropTypes.string
}
function Drink({ name }) {
    let partOfPlant;
    let caffeineContent;
    let age;
    if (name==="tea"){
      partOfPlant = "leaf";
      caffeineContent = '15–70 mg/cup';
      age = '4,000+ years';
    }
    if (name==="coffee"){
      partOfPlant = "bean";
      caffeineContent = '80–185 mg/cup';
      age = '1,000+ years';    
    }
    return (
      <section>
        <h1>{ name.toUpperCase() }</h1>
  
        <dl>
          <dt>Part of plant</dt>
          <dd>{ partOfPlant }</dd>
          <dt>Caffeine content</dt>
          <dd>{ caffeineContent }</dd>
          <dt>Age</dt>
          <dd>{ age }</dd>
        </dl>
    
      </section>
    );
  }

export function PackingList(){
    return (
        <>
        <h1>Packing list</h1>
        <ListGroup>
            <Item1 itemName="Space suit" isPacked={false}></Item1>
            <Item1 itemName="Helmet with a golden leaf" isPacked={true}></Item1>
            <Item2 itemName="Photo of Tabby" isPacked={false}></Item2>
            <Item2 itemName="One month supply of chocolate" isPacked={true}></Item2>
            <Item3 itemName="Photo of Earth" isPacked={false}></Item3>
            <Item3 itemName="Elephant plush toy" isPacked={true}
            ></Item3>
            <Item4 itemName="My pillow" isPacked={false}></Item4>
            <Item4 itemName="Safety belt" isPacked={true}
            ></Item4>
        </ListGroup>
        <div>
            <Drink name="tea" />
            <Drink name="coffee"/>
        </div>
        </>
    )
}