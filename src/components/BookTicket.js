import React from 'react'
import Navbar from './HomePage/Navbar'
import Main from './BookTicket/Main'
const BookTicket = ({from,to,date,bmt}) => {
  return (
    <div className="bookTicket">
          <Navbar />
          <Main from={from} to={to} date={date} bmt={bmt} />
    </div>
  )
}

export default BookTicket