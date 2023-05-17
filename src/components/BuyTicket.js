import React from 'react'
import Navbar from './HomePage/Navbar'
import Main from './BuyTicket/Main'
const BuyTicket = ({tno,tclass,tnot,tprice,tfcs,tscs}) => {
      
  return (
    <div className='buyTicket'>
          <Navbar />
          <Main tno={tno} tclass={tclass} tnot={tnot} tprice={tprice} tfcs={tfcs} tscs={tscs}/>
    </div>
  )
}

export default BuyTicket