import React from 'react'
import { Link } from 'react-router-dom'
import Style from './Header.module.css'

export default function Header() {
  return (
    <>
  <nav className={`navbar navbar-expand-lg bg-light navbar-light py-4 ${Style.border} `}>
  <Link className="navbar-brand ms-lg-5" to="/">Navbar</Link>

  <div className="container justify-content-center ">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse flex-grow-0 " id="navbarNavAltMarkup">
      <div className="navbar-nav  ">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        <Link className="nav-link" to="about">About</Link>
        <Link className="nav-link" to="product">Auctions</Link>
        <Link className="nav-link" to="contact">Contact Us</Link>
        <Link className="nav-link disabled" to="#" tabIndex="-1" aria-disabled="true">Disabled</Link>
      </div>
    </div>
  </div>
</nav>

    
    </>
  )
}
