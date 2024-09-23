import {Outlet, Link} from "react-router-dom";


export function Layout(){
  return(
    <div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    <Outlet></Outlet>
    </div>
  )
}