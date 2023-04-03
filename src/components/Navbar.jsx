import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand">MeoW!</a>
    <form className="d-flex" role="search">
      <Link to={'/login'} className="btn btn-outline-success me-3" type="submit" >Login</Link>
      <Link to={'/register'} className="btn btn-outline-danger" type="submit">Register</Link>
    </form>
  </div>
</nav>        </>
    )
}

export default Navbar
