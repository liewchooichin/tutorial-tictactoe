import PropTypes from "prop-types";

ProductCategoryRow.propTypes = {
  category: PropTypes.string.isRequired,
}
export function ProductCategoryRow({category}){
  return(
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  )
}