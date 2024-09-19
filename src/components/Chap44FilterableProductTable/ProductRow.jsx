import PropTypes from "prop-types";


ProductRow.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    stocked: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  })
}
export function ProductRow({product}){
  // Color the product according to whehther 
  // it is stocked or not.
  const name = product.stocked 
    ? product.name
    : (
        <span style={{color: "red"}}>
          {product.name}
        </span>
      );
  
  return(
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}
