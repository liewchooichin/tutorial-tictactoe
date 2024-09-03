import PropTypes from "prop-types";


FancyText.propTypes = {
    quotation: PropTypes.object
}
export function FancyText({quotation}){
    return(
    <div>
        <h2>{quotation.title}</h2>
        <p>
            <q>{quotation.content}</q>
            &mdash;{quotation.author}
        </p>
    </div>
    )
}