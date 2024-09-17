import viteLogo from '/vite.svg';
import cat1 from '/cat1.png';
import icon2 from '/icon2.png';
import "./styles.css";
import { useRef } from "react";

export function CatFriends(){

  const cat1Ref = useRef(null);
  const cat2Ref = useRef(null);
  const cat3Ref = useRef(null);

  function handleCat1(){
    cat1Ref.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    })
    return;
  }
  function handleCat2(){
    cat2Ref.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    })
    return;
  }
  function handleCat3(){
    cat3Ref.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    })
    return;
  }

  return(
    <>
    <nav>
      <button onClick={handleCat1}
      >Vite</button>

      <button onClick={handleCat2}
      >Cake</button>

      <button onClick={handleCat3}
      >Cat</button>
    </nav>

    <div>
      <ul>
        <li><img
          src={viteLogo}
          alt="Vite"
          ref={cat1Ref}
          width="300px"
          height="300px"
        ></img></li>
        <li><img
          src={icon2}
          alt="Cake"
          ref={cat2Ref}
          width="300px"
          height="300px"
        ></img></li>
        <li><img
          src={cat1}
          alt="Cat"
          ref={cat3Ref}
          width="300px"
          height="300px"
        ></img></li>
      </ul>
    </div>
    </>
  )
}
