import React from 'react'
import Navbar from './HomePage/Navbar'
import Main from './DisplayPage/Main'
const Display = ({search}) => {
  return (
        <main>
              <Navbar />
              <Main search={search} />
        </main>
      )
}

export default Display