import PropTypes from "prop-types"

Copyright.propTypes = {
    year: PropTypes.string,
    author: PropTypes.string
}
export function Copyright({year="", author=""}){
    return(
        <div>
            <p className="fs-6">
                &copy; {year} {author}
            </p>
        </div>
    )
}