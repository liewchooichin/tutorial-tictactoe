import PropTypes from "prop-types";
import { ProductCategoryRow } from "./ProductCategoryRow";
import { ProductRow } from "./ProductRow";
import { useContext } from "react";
import { FilterTextContext, InStockOnlyContext } from "./FilterableProductContext";


ProductTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    stocked: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  })),
} 
export function ProductTable({products}){
  // useContext
  const filterText = useContext(FilterTextContext);
  const inStockOnly = useContext(InStockOnlyContext);

  const rows = [];
  let lastCategory = null;
  const searchTerm = filterText.toLowerCase();

  products.forEach((p) => {
    // find the search term in the product list
    if(p.name.toLowerCase().indexOf(searchTerm)===-1){
      return;
    }
    // check if the product is in stock and 
    // isStockOnly is clicked.
    if(inStockOnly && !p.stocked){
      return;
    }
    // check whether last category is reached
    // pass in the key=category because every
    // category is different.
    if(p.category !== lastCategory){
      rows.push(
        <ProductCategoryRow
          category={p.category}
          key={p.category}
        ></ProductCategoryRow>
      )
    }
    // fill the row with the valid product
    rows.push(
      <ProductRow
        product={p}
        key={p.name}
      ></ProductRow>
    )
    // reset the last category to the current
    // category.
    lastCategory = p.category;
  })

  return(
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}