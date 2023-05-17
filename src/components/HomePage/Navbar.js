import React from 'react'
import NavbarRight from './NavbarRight'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
                <a href="#" className="navbar-brand">
                   <i className="fa-solid  fa-train" style={{color:'#d43d06'}}></i><span style={{fontSize:17,fontWeight:'bold'}}> BOOK<span style={{color:'#484a4d'}}>YOUR</span>TRAIN</span>
                </a>
               <NavbarRight/>
          </div>
    </nav>
  )
}

export default Navbar