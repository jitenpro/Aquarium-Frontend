import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

  let navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const { firstName, lastName, email, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
   e.preventDefault();
    await axios.post("http://localhost:8080/user/signup", user);
    alert("Registered Successfully! Please Login to continue...");
    navigate("/Login");
  };

    return(
      <div>

<div class="modal modal-signin position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="modalSignin">
          <br class="my-4"/>
           <br class="my-4"/>
           <br class="my-4"/>
            <br class="my-4"/>
  <div class="modal-dialog" role="document">
    <div class="modal-content rounded-4 shadow">
      <div class="modal-header p-5 pb-4 border-bottom-0">
        <h1 class="fw-bold mb-0 fs-2">Sign up for free</h1>
        <Link to="/"><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></Link>
      </div>

      <div class="modal-body p-5 pt-0">
        <form class="" onSubmit={(e) => onSubmit(e)}>

          <div class="form-floating mb-3">
            <input type="text" class="form-control rounded-3" id="floatingInput" placeholder="Jitendra"
            name="firstName"
            value={firstName}
            onChange={(e) => onInputChange(e)}/>
            <label for="floatingInput">Firstname</label>
          </div>

          <div class="form-floating mb-3">
            <input type="text" class="form-control rounded-3" id="floatingInput" placeholder="Rajpurohit"
            name="lastName"
            value={lastName}
            onChange={(e) => onInputChange(e)}/>
            <label for="floatingInput">Lastname</label>
          </div>

          <div class="form-floating mb-3">
            <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="jiten@mail.com"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)} />
            <label for="floatingInput">Email</label>
          </div>

          <div class="form-floating mb-3">
            <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onInputChange(e)}/>
            <label for="floatingPassword">Password</label>
          </div>

          <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign up</button>
          <small class="text-muted">By clicking Sign up, you agree to the terms of use.</small>
          {/* <hr class="my-4"/> */}
        </form>
      </div>
    </div>
  </div>
</div>

      </div>
    );

  };
  
export default Register;