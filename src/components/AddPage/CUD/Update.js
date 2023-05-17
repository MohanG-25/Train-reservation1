import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
const Update = () => {
  const Navigate=useNavigate();
  const [data,setData]=useState([]);
  
  //IDENTIFIER
  const [tno,setTno]=useState(0);
  
  //UPDATED DETAILS
 const [updatedDate,setDate]=useState('');
 const [updatedTime,setTime]=useState(0);

  useEffect(()=>{
       axios.get('http://localhost:1000/train')
            .then((response)=>setData(response.data));
  },[])

   const updateSchedule=(e)=>{
            e.preventDefault();
            if(tno!==0&&updatedDate!=''&&updatedTime!=0)
            {
              const timeArr=updatedTime.split(':');
              const newTime=timeArr[0]+'.'+timeArr[1];
              const updatedTrain={
                date:updatedDate,
                time:newTime
              }
            data.map((d)=>d.trainNumber==tno?axios.post(`http://localhost:1000/train/update/admin/${d._id}`,updatedTrain).then(()=>{setTimeout(()=>{Navigate('/admin')},1000)}):console.log(''))
            }
            else
            {
              alert('PLEASE ENTER ALL DETAILS');
            }
     }

  return (
      <div id="updateSchedule">
      <form action="" className='updateSchedule' onSubmit={updateSchedule}>
            <h6 style={{color:'#d43d06',fontWeight:'lighter',cursor:'pointer'}}>UPDATE SCHEDULE</h6>
            <br/>
            <span style={{color:'#fff'}}>TRAIN NUMBER: </span> <br />
            <input type="text" id='trainNumber' placeholder='Example:812289' style={{padding:'3px 20px',borderRadius:2}} onChange={(e)=>setTno(e.target.value)} />
            <br /><br />
            <span style={{color:'#fff'}}>UPDATED DATE: </span><br />
            <input type="date" id='updatedDate' placeholder='UPDATED DATE' style={{padding:'3px 43px',borderRadius:2}}  onChange={(e)=>setDate(e.target.value)}/>
            <br /><br />
            <span style={{color:'#fff'}}>UPDATED TIME:</span><br />
            <input type="time" id='updatedTime' placeholder='UPDATED TIME' style={{padding:'3px 60px',borderRadius:2}}  onChange={(e)=>setTime(e.target.value)}/>
            <br /><br />
               <button type='submit' className='btn btn-dark btn_buyTicket'>UPDATE SCHEDULE</button>
       </form>
 </div>
  )
}

export default Update