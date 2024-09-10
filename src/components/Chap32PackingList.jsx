import PropTypes from "prop-types";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";

const initialItems = [
    { id: 0, title: 'Warm socks', packed: true },
    { id: 1, title: 'Travel journal', packed: false },
    { id: 2, title: 'Watercolors', packed: false },
    { id: 3, title: 'Eraser', packed: true },
    { id: 4, title: 'Pencils', packed: false },
  ];

ItemSection.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            packed: PropTypes.bool.isRequired
    })),
    onChangeItem: PropTypes.func.isRequired,
    onDeleteItem: PropTypes.func.isRequired
}

function ItemSection({items, onChangeItem, onDeleteItem}){

    return(
        <>
        {
            items.map(i => (  
                <Form.Group key={`row${i.id}`} className="d-flex">   
                <Form.Check
                    key={`box${i.id}`}
                    type="checkbox"
                    id={`box${i.id}`}
                    name={`box${i.id}`}
                    label={i.title}
                    checked={i.packed}
                    onChange={e => onChangeItem(e, i.id)}
                >
                </Form.Check>
                <Button
                    variant="primary"
                    className="text-end ms-3 mb-3"
                    key={`btn${i.id}`}
                    id={`btn${i.id}`}
                    name={`btn${i.id}`}
                    type="button"
                    onClick={e => onDeleteItem(e, i.id)}
                >
                    Delete
                </Button>
                </Form.Group>                         
            ))
        }
        </>
    )
}

NewItemSection.propTypes = {
    onChangeNewItem: PropTypes.func.isRequired,
    onAddNewItem: PropTypes.func.isRequired
}
function NewItemSection({onChangeNewItem, onAddNewItem}){

    return(
        <Form.Group className="d-flex">
            <Form.Control
                id="addItem"
                name="addItem"
                type="text"
                onChange={(e) => onChangeNewItem(e)}
            >
            </Form.Control>
            <Button
                id="addButton"
                name="addButton"
                type="button"
                onClick={((e) => onAddNewItem(e))}
            >
                Add
            </Button>
        </Form.Group>
    )
}

export function PackingList(){
    const [items, setItems] = useState(initialItems);
    const [newItemTitle, setNewItemTitle] = useState({}); // empty object

    function handleChangeItem(e, itemId){
        console.log(`Change item: ${e.target.name} ${e.target.value}`);
        console.log(`Item id: ${itemId}`);
        const newItem = items.find(i => (i.id === itemId))
        console.log(`New item: ${newItem.id} ${newItem.title} ${newItem.packed}`);
        newItem.packed = !newItem.packed; // toggle
        
        setItems(items.map(i => {
            if(i.id === itemId){
                return newItem;
            }
            else {
                return i;
            }
        }));

    }
    function handleDeleteItem(e, itemId){
        console.log(`Delete item: ${e.target.name} ${e.target.value}`);
        console.log(`Item id: ${itemId}`);
        // filter a list that does not contain the
        // current id.
        const newList = items.filter(i => (
            i.id !== itemId
        ))
        setItems(newList);
    }
    function handleChangeNewItem(e){
        console.log(`New item: ${e.target.name}`);
        setNewItemTitle(e.target.value);
        return;
    }
    function handleAddNewItem(e){
        const id = items.length + 1;
        const title = newItemTitle;
        const packed = false;
        const newItem = {
            id: id,
            title: title,
            packed: packed
        }
        setItems([newItem, ...items]);
        return;
    }

    return(
        <>

        <NewItemSection
            onChangeNewItem={handleChangeNewItem}
            onAddNewItem={handleAddNewItem}
        >
        </NewItemSection>

        <ItemSection 
            items={items}
            onChangeItem={handleChangeItem}
            onDeleteItem={handleDeleteItem}
        ></ItemSection>

        <p>Number of items packed: {items.filter(i=>(i.packed)).length}</p>
        <ul>
            {
                items.map(i => (
                    <li key={i.id}>
                        {i.id} {i.title}, ({i.packed? "packed": "not yet"})
                    </li>
                ))
            }
        </ul>
        </>
    )
}