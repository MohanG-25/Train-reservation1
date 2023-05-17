import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';

const Form = ({search}) => {
  const Navigate=useNavigate();
  const cp=()=>{
    Navigate('/display');
  }
  const [from,setFrom]=useState('');
  const [to,setTo]=useState('');
  const [date,setDate]=useState('');
          const sendForm=(e)=>{
            e.preventDefault();
               if(from!=''&&to!=''&&date!=''){
                search(from,to,date);
                 Navigate('/bookTicket');
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
             <form action="" className='my-5' onSubmit={sendForm}>
                  <span className='text-light mx-4'>Traveling Route</span>
                  <br />
                  <div className="row text-center">
                    <div className="col-1"></div>
                    <div className="col-4"><input type="text" className='form-control' placeholder='From' onChange={(e)=>setFrom(e.target.value)}/></div>
                    <div className="col-2"><i className="fa-solid text-light fa-arrow-right-arrow-left"></i></div>
                    <div className="col-4"><input type="text"  className='form-control' placeholder='To' onChange={(e)=>setTo(e.target.value)}/></div>
                    <div className="col-1"></div>
                  </div><br />
                  <span className='text-light mx-4'>Traveling Date</span>
                  <div className="row">
                        <div className="col-1"></div>
                        <div className="col-4"><input type="date" className='form-control' onChange={(e)=>setDate(e.target.value)} /></div>
                  </div>
                  <br />
                   <br />
                     <div className='btn-flex'>
                     <button className='mx-5  btn text-light search_btn' style={{backgroundColor:'#cc2a14',width:200}} onClick={cp}>SEE ALL TRAINS</button>
                     <div className='mx-5'>
                          <button type='submit' className='btn text-light search_btn' style={{backgroundColor:'#cc2a14',width:200}}>SEARCH TICKETS</button>
                     </div>
                     </div>
              </form>
  )
}

export default Form