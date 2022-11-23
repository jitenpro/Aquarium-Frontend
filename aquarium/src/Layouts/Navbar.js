/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React, {useMemo} from 'react';
import { Link, useParams, useSearchParams, useNavigate } from 'react-router-dom';

import AdminNavbar from "./AdminNavbar";
import DefaultNavbar from "./Defaultnavbar";
import UserNavbar from "./UserNavbar"

export default function Navbar() {

  let navigate = useNavigate();

  
  const [user, setUser] = React.useState([]);

  // const [isAuth, setIsAuth] = React.useState(false);
  const isAuth = localStorage.getItem("isAuth");

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get(`http://localhost:8080/user/currentUser?token=${token}`).then((response) => {
      setUser(response.data);
      console.log(response.data);
      // setIsAuth(true);
    }).catch((error)=>console.log(error))
  }, [isAuth]);


  function logoutHandler(){
      console.log("ok");
      localStorage.removeItem("token");
      // setIsAuth(false);
      localStorage.removeItem("isAuth");
      navigate("/");
      
  }

    return (
        <>
          {!isAuth ? <DefaultNavbar/> : user.role === "ROLE_ADMIN" ? <AdminNavbar onLogout={logoutHandler} /> : <UserNavbar onLogout={logoutHandler}/>}
        </>
    )
}