import PropTypes from "prop-types";
import { useState } from 'react';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"


const initialItems = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 },
];

FormSnackItem.propTypes = {
    fieldId: PropTypes.number.isRequired,
    fieldValue: PropTypes.string.isRequired,
    changeHandler: PropTypes.func.isRequired,
    clickHandler: PropTypes.func.isRequired
  }

  function FormSnackItem({fieldId,   
    fieldValue, changeHandler, clickHandler}){
    return(
        <Form.Group className="mb-2">
            <Form.Label htmlFor={fieldId}>
                item{fieldId}
            </Form.Label>
            <Form.Control 
                type="text"
                id={`item${fieldId}`}
                name={`item${fieldId}`}
                value={fieldValue}
                onChange={(e) =>
                    changeHandler(e, fieldId)}
            ></Form.Control>
            <Button
                type="button"
                variant="primary"
                onClick={(e) => 
                    clickHandler(e, fieldId)}
            >Choose</Button>
        </Form.Group>
    )
  }


export function SnackMenu() {
  const [items, setItems] = useState(initialItems);
  const [selectedId, setSelectedId] = useState(0);

  function showSelectedItem(){  
    return items.find(item =>
        item.id === selectedId
    )
  };

  function handleItemChange(e, itemId) {
    console.log(`Change handler ${e.target.name} ${e.type}`);
    console.log(`Change item: item id ${itemId}`);
    setItems(items.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          title: e.target.value,
        };
      } else {
        return item;
      }
    }));
  }
  function handleChooseClick(e, itemId){
    console.log(`Choose handler ${e.type}`);
    console.log(`Choose handler: item id ${itemId}`);
    setSelectedId(itemId);
  }

  return (
    <>
      <h3>Using Form directly in the map. Another version below using
        a function to return the form components and their handlers.
      </h3>
      <h2>What&apos;s your travel snack?</h2>
      <Form>
        {items.map((item, index) => (
            <Form.Group className="mb-1" key={item.id}>
                <Form.Label htmlFor={item.id}>
                    Id: {item.id}
                </Form.Label>
                <Form.Control
                    type="text" id={item.id} name={item.id}
                    value={item.title}
                    onChange={(e) => handleItemChange(e, item.id)}
                ></Form.Control>
                <Button
                    type="button"
                    variant="primary"
                    onClick={(e) => handleChooseClick(e, item.id)}
                >Choose</Button>
            </Form.Group>
        ))}
      </Form>
      <p>You picked {showSelectedItem().title}.</p> 

      <h2>Using a component to create the form</h2>
      <Form>
        {items.map((item, index) => {
            return(
                    <FormSnackItem
                        key={item.id}
                        fieldId={item.id}
                        fieldValue={item.title}
                        changeHandler={handleItemChange}
                        clickHandler={handleChooseClick}
                    ></FormSnackItem>
        )})}
      </Form>
        <p>You choose { 
            `item ${showSelectedItem().id}  ${showSelectedItem().title}`
        }</p>
    </>
  );
}
