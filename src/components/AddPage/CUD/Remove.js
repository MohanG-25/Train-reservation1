import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';

const Remove = () => {
  const Navigate=useNavigate();
  const [data,setData]=useState([]);
  const [tno,setTno]=useState(0);
  useEffect(()=>{
      axios.get('http://localhost:1000/train')
      .then((response)=>setData(response.data));
  },[])

  const removeSchedule=(e)=>{
    e.preventDefault();
    data.map((d)=>{
      d.trainNumber==tno?axios.delete(`http://localhost:1000/train/delete/${d._id}`).then(()=>{
         setTimeout(()=>{
            Navigate('/admin');
         },1000)
      }):console.log('');
    })
  }
  return (
      <div id="removeSchedule">
      <form action="" className='removeSchedule mx-1' onSubmit={removeSchedule}>
            <h6 style={{color:'#d43d06',fontWeight:'lighter',cursor:'pointer'}}>CANCEL SCHEDULE</h6>
            <br />
            <span style={{color:'#fff'}}>TRAIN NUMBER: </span><br />
            <input className='my-2' type="text" id='trainNumber' placeholder='Example:12345' style={{padding:'4px 40px',borderRadius:2}} onChange={(e)=>setTno(e.target.value)}/>
            <br /><br />
            <button type='submit' className='btn btn-dark btn_buyTicket'>REMOVE SCHEDULE</button>
      </form>
 </div>
  )
}

export default Remove

//data added into backend and send into frontend for display