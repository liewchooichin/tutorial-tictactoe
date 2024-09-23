import { Routes, Route, Outlet, Link } from "react-router-dom";
import { PageNotFound } from "./Pages";

export function ContactMain(){
  return (
    <>
    <h2>Contact Main</h2>
    <nav>
      <ul>
        <li><Link to="/contact/contact1">Contact 1</Link></li>
        <li><Link to="/contact/contact2">Contact 2</Link></li>
        <li><Link to="/contact/contact3">Contact 3</Link></li>
      </ul>
    </nav>
    <Outlet></Outlet>
    <ContactRouter></ContactRouter>
    </>
  );
}


function Contact1(){
  return (<h2>Contact 1</h2>);
}
function Contact2(){
  return (<h2>Contact 2</h2>);
}
function Contact3(){
  return (<h2>Contact 3</h2>);
}


export function ContactRouter(){
  return(
    <>
    <Routes>
        <Route path="/contact1" element={<Contact1 />}></Route>
        <Route path="/contact2" element={<Contact2 />}></Route>
        <Route path="/contact3" element={<Contact3 />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
    </Routes>
    </>
  )
}