import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react'
const Main = ({tno,tclass,tnot,tprice,tfcs,tscs}) => {
      // console.log('FIRST CLASS SEATS:'+tfcs);
      // console.log('SECOND CLASS SEATS:'+tscs);
     const [data,setData]=useState([]);
     //USER DATA
     const [username,setUsername]=useState('');
     const [email,setEmail]=useState('');
     const [phone,setPhone]=useState('');
     const [gender,setGender]=useState('male');

     const [trainclass,setTrainclass]=useState('');
    
     useEffect(()=>{
           axios.get("http://localhost:1000/train")
                .then(response=>{
                      setData(response.data);
                    });
           if(tclass=='firstClass'){
           setTrainclass('FIRST CLASS');
                                   }
        if(tclass=='SecondClass'){
           setTrainclass('SECOND CLASS');
       }
       
      },[])
     const bookTicket=(e)=>{
            e.preventDefault();
           console.log(username+email+phone+gender)
             if(tclass=='firstClass')
             {
                
                  data.map((d)=>d.trainNumber==tno?axios.post(`http://localhost:1000/train/update/${d._id}`,  {
                        firstClassSeats:tfcs-tnot,
                        secondClassSeats:tscs
                  }):'')
             }
             if(tclass=='SecondClass')
             {
                 
                  data.map((d)=>d.trainNumber==tno?axios.post(`http://localhost:1000/train/update/${d._id}`, {
                        firstClassSeats:tfcs,
                        secondClassSeats:tscs-tnot
                  }):'')
             }
     }
  return (
      <main>
          <div className="container">
                <div className="row my-5">
                      <div className="col-sm-1"></div>
                      <div className="col-sm-10">
                            <table className='table table-stripped  bg-dark text-light' style={{cursor:'pointer',borderRadius:5}} >
                                 <thead>
                                       <tr>
                                             <th>TRAIN NAME</th>
                                             <th>TRAIN NUMBER</th>
                                             <th>TRAVELING CLASS</th>
                                             <th>TICKETS</th>
                                             <th>TOTAL AMOUNT</th>
                                       </tr>
                                 </thead>
                                 <tbody>
                                       <tr>
                                             {data.map((d)=>d.trainNumber==tno?<td key={d.trainNumber}>{d.trainName}</td>:'')}
                                             <td>{tno}</td>
                                             <td>{trainclass}</td>
                                             <td>{tnot}</td>
                                             <td>{tnot*tprice}</td>
                                       </tr>
                                 </tbody>
                            </table>
                            <br />
                            <form action="" className='text-center formTicket' onSubmit={bookTicket} >
                                  <input type="text" placeholder='NAME' id='name' style={{padding:'4px 20px',borderRadius:2}} onChange={(e)=>setUsername(e.target.value)}/><br /><br />
                                  <input type="email" placeholder='EMAIL' id='email'style={{padding:'4px 20px',borderRadius:2}}onChange={(e)=>setEmail(e.target.value)} /><br /><br />
                                  <input type="number" placeholder='MOBILE NUMBER' id='phone'style={{padding:'4px 20px',borderRadius:2}} onChange={(e)=>setPhone(e.target.value)}/><br /><br />
                                  <select name="gender" id="gender" style={{padding:'5px 75px',borderRadius:2}} onChange={(e)=>setGender(e.target.value)}>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                  </select><br /> <br />
                                  <button type='submit' className='btn btn-dark btn_buyTicket'>BUY TICKET</button>
                            </form>
                      </div>
                      <div className="col-sm-1"></div>
                </div>
          </div>
      </main>
      )
}

export default Main