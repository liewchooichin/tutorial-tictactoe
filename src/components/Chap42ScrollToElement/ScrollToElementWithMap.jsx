import viteLogo from '/vite.svg';
import cat1 from '/cat1.png';
import icon2 from '/icon2.png';
import "./styles.css";
import { useState, useRef } from "react";


function setupCatList(){
  const catList = [];
  catList.push(cat1);
  catList.push(icon2);
  catList.push(viteLogo);
  return catList
}

export function CatFriends(){

  const itemsRef = useRef(null);
  const [catList, setCatList] = useState(setupCatList);

  function getMap(){
    if(!itemsRef.current){
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  function handleCat(cat){
    const map = getMap();
    const node = map.get(cat);
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    })
    return;
  }
  function getNode(cat, node){
    const map = getMap();
    if(node){
      map.set(cat, node);
    } else {
      map.delete(cat);
    }
  }

  /**
   * 
   */
  return(
    <>
    <nav>
      <button onClick={() => handleCat(catList[2])}
      >Vite</button>

      <button onClick={() => handleCat(catList[1])}
      >Cake</button>

      <button onClick={() => handleCat(catList[0])}
      >Cat</button>
    </nav>

    <div>
      <ul>
        {catList.map((cat, index) => (
          <li
            key={cat}
            ref={(node) => getNode(cat, node)}
          >
            <img src={cat} alt={cat}
              width="500px" height="500px"
            />
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}
