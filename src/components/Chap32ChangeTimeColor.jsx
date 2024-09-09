import PropTypes from "prop-types";
import { useState } from "react";
import Form from "react-bootstrap/Form";


TimeSection.propTypes = {
    timeColor: PropTypes.string.isRequired
}
function TimeSection({timeColor}){
    const today = new Date();
    console.log(`Time: ${today.toString()}`);
    return(
        <h2 style={{color:timeColor}}>
            {today.toString()}
        </h2>
    )
}


export function TimeColor(){
    const [timeColor, setTimeColor] = useState("hotpink")

    function handleChangeColor(e){
        console.log(`Handle change color: ${e.target.value}`);
        // Set the color of the time
        setTimeColor(e.target.value);
    }

    return(
        <>
        <Form>
            <Form.Group>
                <Form.Label htmlFor="selectionColor">
                    Pick a colour:
                </Form.Label>
                <Form.Select
                    id="selectionColor"
                    name="selectionColor"
                    onChange={e => handleChangeColor(e)}
                >
                    <option>--Pick a color--</option>
                    <option value="rebeccapurple">Rebecca Purple</option>
                    <option value="lightcoral">Light Coral</option>
                    <option value="midnightblue">Midnight Blue</option>
                </Form.Select>
            </Form.Group>
        </Form>
        <TimeSection timeColor={timeColor}></TimeSection>
        </>
    )
}