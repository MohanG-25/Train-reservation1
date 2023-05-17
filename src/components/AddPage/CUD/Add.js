import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery'
const Add = () => {
      const Navigate=useNavigate();
  //SENDING DATA TO THE BACKEND SERVER -->1000/train/add
     const [trainNo,setTrainNo]=useState(0);
     const [trainName,setTrainName]=useState('');
     const [from,setFrom]=useState('');
     const [to,setTo]=useState('');
     const [date,setDate]=useState('');
     const [time,setTime]=useState('');
     const [fcs,setFCS]=useState(0);
     const [fcp,setFCP]=useState(0);
     const [scs,setSCS]=useState(0);
     const [scp,setSCP]=useState(0);
   
     //FUNCTION THAT HAPPENS WHEN FORM IS SUBMITTED
      const addSchedule=(e)=>{
             e.preventDefault();
            //   console.log('TrainNo:'+trainNo+'\nTrainName:'+trainName+'\nFrom:'+from+'\nTo:'+to+'\nDate:'+date+'\nTime:'+time+'\nFCS:'+fcs+'\nFCP:'+fcp+'\nSCS:'+scs+'\nSCP:'+scp);
       
     if(trainName!=''&&trainNo!==0&date!==''&time!==''&&from!==''&&to!==''&&fcs!==0&&fcp!==0&&scp!==0&&scs!==0)
     {
  //code to convert time datatype to float since my database only accepts number      
                        const timeArr=time.split(':');
                        const newTime=timeArr[0]+'.'+timeArr[1];
                        //    console.log(parseFloat(newTime));
                        
                              const train=  {
                              trainNumber:trainNo,
                              trainName:trainName,
                              from:from,
                              to:to,
                              date:date,
                              time:newTime,//NEW TIME CALCULATED AS NUMBER DATATYPE
                              firstClassSeats:fcs,
                              firstClassPrice:fcp,
                              secondClassSeats:scs,
                              secondClassPrice:scp
                              }
                        //    console.log(train);
                        axios.post('http://localhost:1000/train/add',train)
                              .then(res=>{
                                   setTimeout(()=>{
                                       Navigate('/admin');
                                   },1000)
                              });
     }
     else
     { 
           setTimeout(function(){
                 $('.box').show();
           },100);   
           setTimeout(function(){
                 $('.box').hide();
           },3000);   
          
     }
      }

     
  return (
    <div id="addSchedule">
         
         <form action="" className='addSchedule' onSubmit={addSchedule}>
               <h6 style={{color:'#d43d06',fontWeight:'lighter',cursor:'pointer'}}>ADD SCHEDULE</h6>
               <br />
               <div className="row text-center">
                     <div className="col-sm-5">
                                   <input type="number" placeholder='TRAIN NUMBER' id='addScheduleNumber'style={{padding:'3px 30px',borderRadius:3}} onChange={(e)=>setTrainNo(e.target.value)} />
                     </div>
                     <div className="col-sm-2"><br /></div>
                     <div className="col-sm-5">
                                   <input type="text" placeholder='TRAIN NAME' id='addScheduleName'style={{padding:'3px 30px',borderRadius:3}} onChange={(e)=>setTrainName(e.target.value)} />
                     </div>
               </div>
               <br />
               <div className="row text-center">
                     <div className="col-sm-5">
                           <input style={{padding:'3px 30px',borderRadius:3}} type="text" placeholder='FROM' id='addScheduleFrom' onChange={(e)=>setFrom(e.target.value)}/></div>
                     <div className="col-sm-2">
                           <i className="fa-solid text-light fa-arrow-right-arrow-left"></i></div>
                     <div className="col-sm-5">
                           <input style={{padding:'3px 30px',borderRadius:3}} type="text" placeholder='TO' id='addScheduleTO' onChange={(e)=>setTo(e.target.value)}/></div>
               </div>
               <br />
               <div className="row text-center">
                     <div className="col-sm-5">
                     <input type="date" style={{padding:'3px 52px',borderRadius:3}} id="addScheduleDate" onChange={(e)=>setDate(e.target.value)}/>
                     </div>
                     <div className="col-sm-2"><br /></div>
                     <div className="col-sm-5">
                           <input type="time" style={{padding:'3px 70px',borderRadius:3}} id="addSchedularTime" onChange={(e)=>setTime(e.target.value)}/>
                     </div>
               </div>
               <br />
               <div className="row text-center">
                     <div className="col-sm-5">
                            <input type="number" placeholder='FIRST CLASS SEATS' id='addScheduleFirstClass' style={{padding:'3px 30px',borderRadius:3}} onChange={(e)=>setFCS(e.target.value)}/>
                     </div>
                     <div className="col-sm-2">
                            <i className="fa-solid text-light fa-arrow-right"></i>
                     </div>
                     <div className="col-sm-5">
                            <input type="number" placeholder='FIRST CLASS PRICE(₹)' id='addScheduleSecondClass' style={{padding:'3px 30px',borderRadius:3}} onChange={(e)=>setFCP(e.target.value)}/>
                     </div>
               </div>
               <br />
               <div className="row text-center">
                     <div className="col-sm-5">
                          <input type="number" placeholder='SECOND CLASS SEATS' id='addScheduleSecondClass' style={{padding:'3px 30px',borderRadius:3}} onChange={(e)=>setSCS(e.target.value)} />
                     </div>
                     <div className="col-sm-2">
                         <i className="fa-solid text-light fa-arrow-right"></i>
                      </div>
                     <div className="col-sm-5">
                     <input type="number" placeholder='SECOND CLASS PRICE(₹)' id='addScheduleSecondClass' style={{padding:'3px 30px',borderRadius:3}} onChange={(e)=>setSCP(e.target.value)}/>
                     </div>
               </div>
               <br />
                   <div className='text-center'>
                         <button type='submit' className='btn btn-dark search_btn2'>ADD SCHEDULE</button>
                   </div>
         </form>
    </div>
  )
}

export default Add