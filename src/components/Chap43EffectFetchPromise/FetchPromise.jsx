import { useEffect, useState } from "react";

function bugsLandData(){
  const someData = 
    {"id": 1, "name": "Big Beetle",
    "food": "Maple leaf"};
  
  const p = new Promise((resolve) => {
    resolve(someData);
  });
  return p;
}


export function FetchPromise(){

  useEffect(() => {
    let ignore = false;
    console.log("Fetching my data.")
    async function getBugs(){
      const b = await bugsLandData();
      //console.log(`${b}`);
      console.log(`Bugs data: ${b["name"]} likes ${b["food"]}`);        
    };
    getBugs();
   
    // clean up
    return (()=>{ignore=true; console.log("Cleanup my data");})
  }, [])

  return(
  <>
  <h1>Fetch a promise with Effect</h1>
  <h2>See console.log</h2>
  </>
  )
}
