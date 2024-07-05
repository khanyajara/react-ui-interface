//navigation.js
import React from "react"


function navigation () {


    return (
         <div>
           
           <nav className="navbar ">
  <div className="container-fluid">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">Sneaker</span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#Collection">Collection</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Contact">Contact</a>
        </li>
         </ul>
    </div>
  </div>
</nav>

         </div>
    )


}
export default navigation