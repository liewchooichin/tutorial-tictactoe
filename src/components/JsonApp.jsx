import { useState, useEffect } from "react";
import "../App.css";

export function JsonApp() {
  /* States */
  const [posts, setPosts] = useState([]);
  
  /* Update states with useEffect */
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/albums/1/photos";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {setPosts(data); console.log(data)});
  }, []);

  return (
    <article>
      <h1>Posts from JSONPlaceHolder</h1>
      {
        posts.map((post) => {
            return (
            <article key={post.id}>
                <h2>ID #{post.id} {post.title}</h2>
                <img src={post.thumbnailUrl} />
            </article>
        )})
      }
    </article>
  );
}

