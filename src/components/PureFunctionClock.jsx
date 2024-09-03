import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { Fragment } from 'react';

ClockMessage.propTypes = {
    mydatetime: PropTypes.string
}
function ClockMessage({mydatetime}){

    return(
        <Fragment>
            {mydatetime.toLocaleString()}
        </Fragment>
    )
}

/**Using props */
export function Clock(){

    const mydatetime = new Date();
    return(
        <div>
            <Form>
                <Form.Text disabled>
                    {ClockMessage({mydatetime})}
                </Form.Text>
            </Form>
        </div>
    )
}