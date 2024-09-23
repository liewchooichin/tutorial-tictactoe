import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

function Blog1(){
  return (<h2>Blog 1</h2>);
}
function Blog2(){
  return (<h2>Blog 2</h2>);
}
function Blog3(){
  return (<h2>Blog 3</h2>);
}



export function Blogs() {
  return (
    <>
    <h2>Blogs</h2>
    
    <nav>
      <ul>
        <Link to="/blogs/blog1">Blog 1</Link>
        <Link to="/blogs/blog2">Blog 2</Link>
        <Link to="/blogs/blog3">Blog 3</Link>
      </ul>
    </nav>
    <Outlet></Outlet>

    <Routes>
      <Route path="/blog1" element={<Blog1/>}></Route>
      <Route path="/blog2" element={<Blog2/>}></Route>
      <Route path="/blog3" element={<Blog3/>}></Route>
    </Routes>

    </>
  );
}