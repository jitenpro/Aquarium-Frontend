import { Link} from "react-router-dom";
import logo from "../images/aquablue.png";

export default function DefaultNavbar() {
    return (
        <div>

  <header class="p-3 text-bg-dark fixed-top">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <p></p>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/" class="nav-link px-2 text-secondary">
                <img class="d-block mx-auto " src={logo} alt="" height="20"></img>
             </a> </li>
          <li><a href="/Products" class="nav-link px-2 text-white">Products</a></li>
          <li><a href="/Aboutus" class="nav-link px-2 text-white">About Us</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div class="text-end">
          {/* <button type="button" class="btn btn-outline-light me-2">Login</button> */}
          <Link className='btn btn-outline-light me-2' to="/Login">Login</Link>
          {/* <button type="button" class="btn btn-warning">Register</button> */}
          <Link className='btn btn-warning' to="Register">Register</Link>
        </div>
      </div>
    </div>
  </header>

        </div>
    );
}