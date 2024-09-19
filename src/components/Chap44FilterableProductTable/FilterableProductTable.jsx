import { ProductTable } from "./ProductTable";
import { SearchBar } from "./SearchBar";
import { PRODUCTS } from "./data";
import { useReducer } from "react";
import { FilterTextContext} 
  from "./FilterableProductContext";
import { InStockOnlyContext} 
  from "./FilterableProductContext";
import { filterTextReducer } from "./FilterableProductReducer";
import { inStockReducer } from "./FilterableProductReducer";


export function FilterableProductTable(){
  const [filterText, filterTextDispatch] =
    useReducer(filterTextReducer, "");
  const [inStockOnly, inStockOnlyDispatch] = 
    useReducer(inStockReducer, false);

  function handleFilterTextChange(e){
    console.log(e.target.name);
    filterTextDispatch({
      type: "text_change",
      newText: e.target.value,
    });
    return;
  }
  function handleInStockChange(e){
    console.log(e.target.name);
    inStockOnlyDispatch({
      type: "inStock_change",
      newChecked: e.target.checked,
    })
    return;
  }
  function handleShowAllProducts(e){
    console.log(e.target.name);
    // reset the search box 
    handleFilterTextChange(e);
     filterTextDispatch({
      type: "text_change",
      newText:"",
    });
    // reset the in stock
    inStockOnlyDispatch({
      type: "inStock_change",
      newChecked: false,
    })
 
  } 

  return(
    <FilterTextContext.Provider value={filterText}>
    <InStockOnlyContext.Provider value={inStockOnly}>
    <div>
      <SearchBar
        handleFilterTextChange={handleFilterTextChange}
        handleInStockChange={handleInStockChange}
      ></SearchBar>

      <button 
        name="btnShowAllProducts"
        onClick={handleShowAllProducts}
      >Show all products</button>

      <ProductTable
        products={PRODUCTS}
        filterText={filterText}
        inStockOnly={inStockOnly}
      ></ProductTable>
    </div>
    </InStockOnlyContext.Provider>
    </FilterTextContext.Provider>
  )
}
