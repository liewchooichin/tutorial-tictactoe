import { Link, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

export function UserMain(){
  return(
    <>
    <nav>
      <ul>
        <li> <Link to="/user/user1/color/cornflowerblue">User 1</Link></li>
        <li> <Link to="/user/user2/color/lightsalmon">User 2</Link></li>
        <li> <Link to="/user/user3/color/lawngreen">User 3</Link></li>
      </ul>
    </nav>
    <h2>Users Main</h2>

    <Outlet></Outlet>
    </>
  )
}

UserDataPage.propTypes = {
  params: PropTypes.shape({
    userId: PropTypes.string.isRequired,
  })
}
//export function UserDataPage({params}){
export function UserDataPage(){
  let params = useParams();
  console.log("User id params: " + params);
  return(
    <>
      <h3>Hello user {params.userId}</h3>
      <div style={{width:"200px", height:"200px", 
        backgroundColor:params.colorId}}>
      <h3>Favourite color {params.colorId}</h3>
      </div>
    </>
  )
}