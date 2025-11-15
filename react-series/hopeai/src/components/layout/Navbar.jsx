import React from 'react'

const Navbar = () => {
  return (
   <nav className="navbar navbar-expand-lg border-bottom ">
  <div className="container-fluid p-2 fs-5">
    <a className="navbar-brand fw-bold fs-3" href="#">Hope<span>AI</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* navigation start here */}
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      
      </ul>
      <button className='btn btn-outline-primary px-4 me-1 fw-bold'>Try free</button>
    </div>
  </div>
</nav>
  )
}

export default Navbar
