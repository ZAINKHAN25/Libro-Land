import React from 'react';
import "./app.css"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid px-5">
        <a className="logoOfNavbar" href="#">Libro-Land</a>
        <div className="BtnOfToogleNavbar" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className="divOfNavInput mx-auto">
          <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
        </div>
        <div className="collapse navbar-collapse navbarLis" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link">Add Book</a>
            <a className="nav-link">Lending Book</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar