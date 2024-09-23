import {
  BrowserRouter,
  Outlet,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Home, About, Users, Contact, PageNotFound } from "./Pages"
import { Layout } from "./Layout";
import { Blogs } from "./Blogs";

export function NavRouterApp(){
  return(
    <BrowserRouter>

        <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}></Route>
            <Route path="contact" element={<Contact/>}></Route>
            <Route path="blogs/*"  element={<Blogs/>}></Route>
            <Route path="about" element={<About/>}></Route>
            <Route path="users"  element={<Users/>}></Route>
            <Route path="*" element={<PageNotFound/>}></Route>
          </Route>
        </Routes>

    </BrowserRouter>
  )
}

