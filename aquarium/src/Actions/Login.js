import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/aquaicon.png";

const Login = () => {

          let navigate = useNavigate();

          const [user, setUser] = useState({
            email: "",
            password: ""
          });

          const { email, password } = user;

          const onInputChange = (e) => {
            setUser({ ...user, [e.target.name]: e.target.value });
          };

          const onSubmit = async (e) => {
          e.preventDefault();
            const response = await axios.post("http://localhost:8080/user/signIn", user);
            console.log(response);
            localStorage.setItem("token",response.data.token);
            localStorage.setItem("isAuth",true)
            navigate("/");
            // window.location.reload();
          };


    return (

          <div class="modal modal-signin position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="modalSignin">
            <br class="my-4"/>
           <br class="my-4"/>
           <br class="my-4"/>
            <br class="my-4"/>
            <div class="modal-dialog" role="document">
              <div class="modal-content rounded-4 shadow">


              <br class="my-4"/>

        <div class="text-center">
        <br class="my-4"/>
        <div class="modal-body p-5 pt-0">
          <div class="form-signin w-50 m-auto">
            <form onSubmit={(e) => onSubmit(e)}>
              <div class="text-center"> <img class="d-block mx-auto mb-4" src={logo} alt="" width="72" height="57"></img></div>
              <h1 class="fw-500 mb-3 fs-2"> Sign in to Aquarium</h1>
              {/* <h1 class="h3 mb-3 fw-normal">Please sign in</h1> */}

              <div class="d-grid gap-3">
              <div class="form-floating">

                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)} />
                <label for="floatingInput">Email address</label>
              </div>

              <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)} />
                <label for="floatingPassword">Password</label>
              </div>
              <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
              <Link to="/">
                <button type="button" class="w-100 btn btn-lg btn-dark" data-bs-dismiss="modal" aria-label="Cancel">Cancel</button>
              </Link>
              </div>
              
            </form>
          </div>
          </div>
        </div>


        </div>
        </div>
        </div>

    );
  };
  
export default Login;