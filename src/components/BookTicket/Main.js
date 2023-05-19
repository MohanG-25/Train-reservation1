import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
import Train from './Train';
const Main = ({from,to,date,bmt}) => {
   const [trains,setTrains]=useState([]);
  useEffect(()=>{
      axios.get("https://train-server-cr9c.onrender.com/train/")
      .then(response=>{
            // console.log(response.data);  // TO SHOW IMPORTED DATA ARRAY FROM BACKEND
          setTrains(response.data);
      });     
  },[])
  return (
    <main>
          <div className="container">
                <div className="row my-5">
                      <div className="col-sm-1"></div>
                     
                      <div className="col-sm-10" style={{backgroundColor:'rgb(0,0,0,0.5)',borderRadius:10}}>
                         <h3 style={{cursor:'pointer'}}>
                               <span className='train dashboard1'>T</span>
                               <span className='train dashboard1'>I</span>
                               <span className='train dashboard1'>C</span>
                               <span className='train dashboard1'>K</span>
                               <span className='train dashboard1'>E</span>
                               <span className='train dashboard1'>T</span>
                               <span className='train dashboard1'> </span>
                               <span className='train dashboard1'>B</span>
                               <span className='train dashboard1'>O</span>
                               <span className='train dashboard1'>O</span>
                               <span className='train dashboard1'>K</span>
                               <span className='train dashboard1'>I</span>
                               <span className='train dashboard1'>N</span>
                               <span className='train dashboard1'>G</span>
                         </h3>
                         <hr style={{color:'#fff'}}/>
                          {trains.length>0? <Train data={trains} from={from} to={to} date={date} bmt={bmt}/>:'hello'}
                      </div>
                      
                      <div className="col-sm-1"></div>
                </div>
          </div>
    </main>
  )
}

export default Main
