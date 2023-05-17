import React from 'react'
import Navbar from './HomePage/Navbar';
import Main from './HomePage/Main'
const HomePage = ({search}) => {
  return (
    <div>
          <Navbar />
          <Main search={search} />
    </div>
  )
}

export default HomePage