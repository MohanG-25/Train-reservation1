import React, { useState } from 'react'
//IMPORTING COMPONETS
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import HomePage from './components/HomePage';
import AdminPage from './components/AdminPage';
import AddPage from './components/AddPage';
import BookTicket from './components/BookTicket';
import BuyTicket from './components/BuyTicket';
import Display from './components/Display';
const App = () => {
  const [name,setName]=useState('');
  const [from,setFrom]=useState('');
  const [to,setTo]=useState('');
  const [date,setDate]=useState('');
 
 //TO PASS INTO NEXT PAGE
  const [tno,setTno]=useState(0);
  const [tclass,setTclass]=useState('');
  const [tnot,setTnot]=useState(1);
  const [tprice,setTprice]=useState(0);
  const [tfcs,setTfcs]=useState(0);
  const [tscs,setTscs]=useState(0);
    const cap=(val)=>{
      setName(val);
    }
   const search=(sfrom,sto,sdate)=>{
         setFrom(sfrom);
         setTo(sto);
         setDate(sdate);
  }
  const bmt=(fno,fclass,fnot,fprice,ffcs,fscs)=>{
         setTno(fno);
         setTclass(fclass);
         setTnot(fnot);
         setTprice(fprice);
        //  console.log(fscs);
        //  console.log(fscs)
         setTfcs(ffcs);
         setTscs(fscs);
  }

  return (
    <Router>
      <div className="App">
         <Routes>
           <Route exact path="" element={<HomePage search={search}/>} />
           <Route exact path="/admin" element={<AdminPage cap={cap}/>} />
           <Route exact path="/add" element={<AddPage name={name}/>}/>
           <Route exact path="/bookTicket" element={<BookTicket from={from} to={to} date={date} bmt={bmt}/>} />
           <Route exact path="/buyTicket"  element={<BuyTicket tno={tno} tclass={tclass} tnot={tnot} tprice={tprice} tfcs={tfcs} tscs={tscs}/> } />
           <Route exact path="/display" element={<Display search={search}/>}/>
         </Routes>
    </div>
    </Router>
  )
}

export default App