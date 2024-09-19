
import PropTypes from "prop-types";
import { useContext } from "react";
import { FilterTextContext } from "./FilterableProductContext";
import { InStockOnlyContext } from "./FilterableProductContext";

SearchBar.propTypes = {
  handleFilterTextChange: PropTypes.func.isRequired,
  handleInStockChange: PropTypes.func.isRequired,
}
export function SearchBar({
  handleFilterTextChange, handleInStockChange
}){

  const filterText = useContext(FilterTextContext);
  const inStockOnly = useContext(InStockOnlyContext);
  return(
    <form>
      <input
        type="text"
        name="filterTextField"
        value={filterText}
        placeholder="Search ..."
        onChange={e=>handleFilterTextChange(e)}
      ></input>

      <label>
        <input
          type="checkbox"
          name="inStockCheckbox"
          checked={inStockOnly}
          value={inStockOnly}
          onChange={e=>handleInStockChange(e)}
        ></input>
        {" "} Only show products in stock
      </label>
    </form>
  )
}