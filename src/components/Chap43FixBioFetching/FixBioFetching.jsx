/**
 * This is why you see Bob’s bio even though Taylor is selected. 
 * Bugs like this are called race conditions because two asynchronous
 * operations are “racing” with each other, and they might arrive in 
 * an unexpected order.

To fix this race condition, add a cleanup function:
 */

import { useState, useEffect } from "react";
import { fetchBio } from "./FetchBio";

export function FixBioFetching(){
  const [person, setPerson] = useState("Alice");
  const [bio, setBio] = useState(null);

  useEffect(()=>{
    let ignore = false;

    console.log("Calling the effect of bio");
    setBio(null);
    fetchBio(person)
      .then(result=>{
        // Wait for the clean up from the 
        // previous render, then do the fetching.
        if(!ignore){
          setBio(result);
      }
    });

    // clean up.
    // This will return ignore=true when the effect has
    // clean up after each render.
    return () => {ignore=true; console.log("Clean up the bio")}
  }, [person]);


  return(
    <>
    <select
      value={person}
      onChange={(e)=>setPerson(e.target.value)}
    >
      <option value="Alice">Alice</option>
      <option value="Bob">Bob</option>
      <option value="Taylor">Taylor</option>
    </select>
    <hr/>
    <p><b>{bio ? bio : 'Loading ...'}</b></p>
    </>
  )
}