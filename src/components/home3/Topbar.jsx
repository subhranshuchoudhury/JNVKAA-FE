import React from 'react'

function Topbar() {
  return (
    <div className="topbar-2 d-lg-flex d-none">
    <div className="container d-flex justify-content-between align-items-center">
      <div className="left-social">
        <ul>
          <li><a href="#"><i className="bx bxl-facebook" /></a></li>
          <li><a href="#"><i className="bx bxl-twitter" /></a></li>
          <li><a href="#"><i className="bx bxl-pinterest-alt" /></a></li>
          <li><a href="#"><i className="bx bxl-instagram" /></a></li>
        </ul>
      </div>
      <p>Welcome, Subscribe our <a href="#newsletter">newsletter</a> get unlimited article. </p>
      <div className="date">Novembar 30, 2022 <span>28°C</span></div>
    </div>
  </div>
  
  )
}

export default Topbar
