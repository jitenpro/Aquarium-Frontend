import { Link} from "react-router-dom";
import logo from "../images/aquablue.png";

export default function UserNavbar({onLogout}) {
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
              <Link class="m-3" to="Cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
              </svg>
              </Link>
          {/* <button type="button" class="btn btn-outline-light me-2">Login</button> */}
          {/* <Link className='btn btn-outline-light me-2' to="/Login">Logout</Link> */}
          <button type="button" class="btn btn-danger me-2" onClick={()=>onLogout()}>Logout</button>
          {/* <button type="button" class="btn btn-warning">Register</button> */}
        </div>
      </div>
    </div>
  </header>

        </div>
    );
}