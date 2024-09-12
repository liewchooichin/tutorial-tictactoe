import { useState } from 'react'
import viteLogo from '/vite.svg'
//import './App.css'
import Container from 'react-bootstrap/Container'

/* Tutorial: Chapter 3-5 */
import { PageApp } from './components/Chap36ContextHeading/PageApp';
import { BlogPostApp } from './components/Chap36ContextBlogPost/BlogPostApp';

function App() {

  return (
    <Container>

    <h2>Blog Post App</h2>
    <p>Using context
    </p>
    <div style={{marginBottom:"2em"}}>
      <BlogPostApp></BlogPostApp>
    </div>

    <h2>Page and Heading</h2>
    <p>Using context
    </p>
    <div style={{marginBottom:"2em"}}>
      <PageApp></PageApp>
    </div>



    </Container>
  );
}

export default App
