import React from 'react'
import Navbar from './HomePage/Navbar'
import Main from './AddPage/Main'
const AddPage = ({name}) => {
  return (
    <div className="addPage">
      <Navbar />
      
      <Main name={name}/>
    </div>
  )
}

export default AddPage