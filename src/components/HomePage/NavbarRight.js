import React from 'react'

const NavbarRight = () => {
  return (
    <div>
           <button type='button'
                className='navbar-toggler'
                data-bs-toggle="collapse"
                data-bs-target="#navmenu"
                >
                  <span className='navbar-toggler-icon'></span>
                </button>
                <div className="collapse navbar-collapse" id='navmenu'>
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a href="\" className="nav-link" style={{fontSize:13}}>HOME</a></li>
                    <li className="nav-item"><a href="\admin" className="nav-link" style={{fontSize:13}} >ADMIN</a></li>
                  </ul>
                </div>
    </div>
  )
}

export default NavbarRight