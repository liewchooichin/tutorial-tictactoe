import {
  BrowserRouter,
  Outlet,
  Routes,
  Route,
  Link,
  MemoryRouter
} from "react-router-dom";
import { Home, About, PageNotFound } from "./Pages"
import { Layout } from "./Layout";
import { Blogs } from "./Blogs";
import { ContactMain } from "./Contacts";
import { UserMain } from "./Users"
import { UserDataPage } from "./Users";

export function NavRouterApp(){
  return(
    
      <BrowserRouter basename="/">
        <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}></Route>
            <Route path="contact/*" element={<ContactMain/>}></Route>
            <Route path="blogs/*"  element={<Blogs/>}></Route>
            <Route path="about" element={<About/>}></Route>
            <Route path="users"  element={<UserMain/>}></Route>
            <Route path="user/:userId/color/:colorId" 
              element={<UserDataPage />}
              loader={({params})=>{
                console.log("In loader" + params.userId);
              }}
              action={({params})=>{
                console.log("In action" + params.userId);}}
            ></Route>
            
            <Route path="*" element={<PageNotFound/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    
  )
}

