import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId) {
    // make a new list
    const newList = products.map((item)=>{
      if(item.id === productId){
        const newCount = item.count + 1;
        const newItem = {...item, count: newCount}
        return newItem;
      } else {
        return item; //unchanged.
      }
    })
    // set the products to the new list
    setProducts(newList);
  }

  function handleDecreaseClick(productId){
    // make a new list
    const newList = products.map((item)=>{
        if(item.id === productId){
            const newCount = (item.count-1) > 0
              ? item.count-1 : 0;
            const newItem = {...item, count: newCount};
           return newItem
        } else {
            return item;
        }
    })
    const newListNoZeroItems = newList.filter((item) => {
        if((item.count>0))
            return item;
    })
    // set the products to the new list
    setProducts(newListNoZeroItems);
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
          <button onClick={() => {
            handleDecreaseClick(product.id);
          }}>
            -
          </button>
        </li>
      ))}
    </ul>
  );
}
