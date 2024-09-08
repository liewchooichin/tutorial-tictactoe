import { useState } from 'react';
import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

/**Make a form field text button */
TextField.propTypes = {
    label: PropTypes.string,
    fieldId: PropTypes.string,
    initialValue: PropTypes.string,
    helperText: PropTypes.string,
    changeHandler: PropTypes.func
}
function TextField({label, fieldId, initialValue, 
    helperText, changeHandler}){

    return(
        <Form.Group className="mb-3">
        
        <Form.Label htmlFor={fieldId}>
            {label}
        </Form.Label>
        <Form.Control 
            id={fieldId} name={fieldId}
            type="text" placeholder={initialValue}
            plaintext readOnly
            onChange={(e) => changeHandler(e)}
        >
        </Form.Control>
        <Form.Text className="text-muted">
            {helperText}
        </Form.Text>
        </Form.Group>

    )
}

function MakeButtonField({btnName, onClickHandler}){
    return(
        <Button
        variant="primary"
        id={btnName}
        name={btnName}
        type="button"                    
        onClick={e => onClickHandler(e)}
        ></Button>
    )
}

export function FieldEditor(){

    const [firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    // edit button initially is false.
    const [btnText, setButtonText] = useState("Edit");

    function handleFirstNameChange(e){
        //console.log(`${e.type}: ${e.target.name}, ${e.target.value}`);
        setFirstName(e.target.value);
        return;
    }
    function handleLastNameChange(e){
        //console.log(`${e.type}: ${e.target.name}, ${e.target.value}`);
        setLastName(e.target.value);
        return;
    }
    function handlerEditClick(e){
        console.log("In handler Edit click");
        console.log(`${btnText} ${e.target.name} ${e.target.value} ${e.type}`);
    }
    function handlerSaveClick(e){
        console.log("In handler Save click");
        console.log(`${btnText} ${e.target.name} ${e.target.value} ${e.type}`);
    }
    function handleButtonClick(e){
        // prevent default must be specified, otherwise
        // the form will render when the button is clicked.
        e.preventDefault(); 
        console.log(`Current state: ${btnText}`);
        console.log(`Event: ${e.target.name} ${e.type}`);
        console.log(`Event: ${e.target.value} ${e.type}`);
        // get the elements
        const firstNameField = document.querySelector("#firstName");
        const lastNameField = document.querySelector("#lastName");
        

        // If the button is Edit, allow the fields to be editable.
        // Also, while the button is set to Save to save the fields.
        if(btnText.toLowerCase() === "edit"){
            console.log("edit is true")
            // allow the fields to be editable
            firstNameField.plaintext = false;
            firstNameField.readOnly = false;
            lastNameField.plaintext = false;
            lastNameField.readOnly = false;
            // Set the button text to Save
            setButtonText("Save");
            // call the edit handler
            handlerEditClick(e);
        }
        // If the edit status is true, enable the text field.
        // Depending on whether the input field is required or 
        // not, the text field must not be empty when the Save
        // button is shown.
        if(btnText.toLowerCase() === "save"){
            console.log("save is true")
            // after save, set the button text to Edit again.
            // make the fields read only.
            firstNameField.plaintext = true;
            firstNameField.readOnly = true;
            lastNameField.plaintext = true;
            lastNameField.readOnly = true;
            // Set the button text to Edit
            setButtonText("Edit");
            // call the save hanlder
            handlerSaveClick(e);
        }
        
    }

    return(
        <>
            <Form id="nameSection" column="true" className="mb-3">
                <TextField
                    label={"First name: "}
                    fieldId={"firstName"}
                    initialValue={"Popo"}
                    helperText={"Enter your first name"}
                    changeHandler={handleFirstNameChange}
                ></TextField>
                <TextField
                    label={"Last name: "}
                    fieldId={"lastName"}
                    initialValue={"Koko"}
                    helperText={"Enter your last name"}
                    changeHandler={handleLastNameChange}
                ></TextField>
                <Button
                    variant="primary"
                    name="editOrSaveButton"
                    form="nameSection"
                    type="button"                    
                    onClick={e => handleButtonClick(e)}
                >
                    {(btnText.toLowerCase()==="edit") && "Edit"}
                    {(btnText.toLowerCase()==="save") && "Save"}
                </Button>
            </Form>
            <p>Hello, {firstName} {lastName}.</p>
        </>
    )
}
