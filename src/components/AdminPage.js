import React from 'react'
import Navbar from './HomePage/Navbar';
import Main from './AdminPage/Main';
const AdminPage = ({cap}) => {
  return (
    <div className='admin'>
          <Navbar />
          <Main cap={cap} />
    </div>
  )
}

export default AdminPage