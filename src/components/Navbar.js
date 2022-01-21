import React from "react";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
 

  
  let history = useHistory();
  const handlelogout = () =>{
    localStorage.removeItem('token');
    window.location.reload();
    history.push('/login')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          i-notebook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link about" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link about"  to="/about">
                About
              </Link>
            </li>
          </ul> 

          { localStorage.getItem('token') &&  <button onClick={handlelogout} className="btn btn-primary">log out </button>} { !localStorage.getItem('token') && <form className="d-flex">
            
            <Link className="btn btn-primary mx-3" to="/login" role="button">
              Log In
            </Link>
            <Link className="btn btn-primary mx-3" to="/signup" role="button">
              Sign up
            </Link>
          </form> }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
