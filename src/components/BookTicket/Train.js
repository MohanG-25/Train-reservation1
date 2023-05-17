import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import { useNavigate } from 'react-router-dom';

const Train = ({data,from,to,date,bmt}) => {
      const Navigate=useNavigate();
      const [check,setCheck]=useState(0);
      const [no,setNo]=useState(0);
      const[dep_date,setDep]=useState('');

      //SENDING TICKET DATA
      const [tclass,setTclass]=useState('');
      const [maxfcs,setFcs]=useState(0);
      const [pricefcs,setPfcs]=useState(0);
      const [maxscs,setScs]=useState(0);
      const [priceScs,setPscs]=useState(0);
      const [not,setNot]=useState(0); //TO CHECK NO OF TICKETS TO BE ATLEAST ABOVE ZERO
      const book=(e)=>{
            e.preventDefault();
            console.log(tclass);
              if(tclass!='noClass' && tclass!='')
              {
                    if(tclass=='firstClass')
                    {
                       if(not<=maxfcs && not!=0)
                       {
                             console.log('TOTAL AMOUNT:'+not*pricefcs);
                        //      console.log(maxfcs);
                        //      console.log(maxscs); 
                             bmt(no,tclass,not,pricefcs,maxfcs,maxscs);
                             setTimeout(()=>{
                                Navigate('/buyTicket');
                             },1000)
                       }   
                       else
                       {
                             setTimeout(()=>{
                             $('.err').show();
                             },100)
                             setTimeout(()=>{
                             $('.err').hide();
                             },4000)
                       }
                    }
                   if(tclass=='SecondClass')
                   {
                        if(not<=maxscs && not!=0)
                        {
                              // console.log(maxscs);
                              console.log('TOTAL AMOUNT:'+not*priceScs);
                             bmt(no,tclass,not,pricefcs,maxfcs,maxscs);
                             Navigate('/buyTicket');
                        }   
                        else
                        {
                              setTimeout(()=>{
                                    $('.err').show();
                                    },100)
                                    setTimeout(()=>{
                                    $('.err').hide();
                                    },4000)
                        }
                   }
              }
              else
              {
                  setTimeout(()=>{
                        $('.err2').show();
                        },100)
                        setTimeout(()=>{
                        $('.err2').hide();
                        },4000)
              }
    }  
  useEffect(()=>{
            
      data.map((d)=>{
            var newFrom=d.from;
            if(from.toLowerCase()==newFrom.toLowerCase())
             {
                  //  console.log('FROM FOUND');
                  var newTo=d.to;
                   if(to.toLowerCase()==newTo.toLowerCase())
                   {
                        //  console.log('TO FOUND')
                         var newDate=d.date;
                         setDep(newDate.substr(0,10))
                          if(newDate.substr(0,10)==date)
                           {   
                                 setNo(d.trainNumber);
                                 setFcs(d.firstClassSeats);
                                 setPfcs(d.firstClassPrice);
                                 setScs(d.secondClassSeats)
                                 setPscs(d.secondClassPrice);
                                 setCheck(1);
                           }
                         
                   }
                  
                   
             }
  })
           
      },[])
     
  return (
    <section className="trainSection">
          <br />
          <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                            {check!=0?data.map((a)=>a.trainNumber===no?
                            <>
                               <h5 className='' style={{cursor:'pointer',color:'#9fa0a1'}}>
                                     <span className="dashboard">𝚃</span>
                                     <span className="dashboard">𝚁</span>
                                     <span className="dashboard">𝙰</span>
                                     <span className="dashboard">𝙸</span>
                                     <span className="dashboard">𝙽</span>
                                     <span className="dashboard"> </span>
                                     <span className="dashboard">𝙳</span>
                                     <span className="dashboard">𝙴</span>
                                     <span className="dashboard">𝚃</span>
                                     <span className="dashboard">𝙰</span>
                                     <span className="dashboard">𝙸</span>
                                     <span className="dashboard">𝙻</span>
                                     <span className="dashboard">𝚂</span>
                               </h5>
                               <br />
                                       <div className="row">
                                             <div className="col-sm-1"></div>
                                             <div className="col-sm-3">
                                                  <span className='train_lhs text-light ' style={{fontWeight:'bold'}}>𝕋ℝ𝔸𝕀ℕ ℕ𝔸𝕄𝔼</span><br />
                                                  <span className='train_lhs text-light ' style={{fontWeight:'bold'}}>𝕋ℝ𝔸𝕀ℕ ℕ𝕌𝕄𝔹𝔼ℝ</span><br />
                                                  <span className='train_lhs text-light ' style={{fontWeight:'bold'}}>𝔻𝔼ℙ𝔸ℝ𝕋𝕌ℝ𝔼</span><br />
                                                  <span className='train_lhs text-light ' style={{fontWeight:'bold'}}>𝔻𝔼𝕊𝕋𝕀ℕ𝔸𝕋𝕀𝕆ℕ</span><br />
                                                  <span className='train_lhs text-light ' style={{fontWeight:'bold'}}>𝔻𝔼ℙ𝔸ℝ𝕋𝕌ℝ𝔼 𝔻𝔸𝕋𝔼</span><br />
                                                  <span className='train_lhs text-light ' style={{fontWeight:'bold'}}>𝔻𝔼ℙ𝔸ℝ𝕋𝕌ℝ𝔼 𝕋𝕀𝕄𝔼</span><br />
                                                  <span className='train_lhs text-light ' style={{fontWeight:'bold'}}>𝔽𝕀ℝ𝕊𝕋 ℂ𝕃𝔸𝕊𝕊 (𝔸𝕍𝔸𝕀𝕃)</span><br />
                                                  <span className='train_lhs text-light ' style={{fontWeight:'bold'}}>𝕊𝔼ℂ𝕆ℕ𝔻 ℂ𝕃𝔸𝕊𝕊 (𝔸𝕍𝔸𝕀𝕃)</span><br />
                                             </div>
                                             <div className="col-sm-1 text-light">: <br />: <br />: <br />: <br />: <br />: <br />: <br />:</div>
                                             <div className="col-sm-6">
                                                   <span className="train100" style={{fontWeight:'bold'}}>{a.trainName}</span><br />
                                                   <span className="train100" style={{fontWeight:'bold'}}>{a.trainNumber}</span><br />
                                                   <span className="train100" style={{fontWeight:'bold'}}>{a.from}</span><br />
                                                   <span className="train100" style={{fontWeight:'bold'}}>{a.to}</span><br />
                                                   <span className="train100" style={{fontWeight:'bold'}}>{dep_date}</span><br />
                                                   <span className="train100" style={{fontWeight:'bold'}}>{a.time} Hrs</span><br />
                                                   <span className="train100" style={{fontWeight:'bold',cursor:'pointer'}}>{a.firstClassSeats} [₹{a.firstClassPrice} per Ticket]</span><br />
                                                   <span className="train100" style={{fontWeight:'bold',cursor:'pointer'}}>{a.secondClassSeats} [₹{a.secondClassPrice} per Ticket]</span><br />
                                                   <br />
                                             </div>
                                       </div>
                                       <div className="row">
                                            <div className="col-sm-1"></div>
                                            <div className="col-sm-6">
                                            <form action="" className='bookingForm' onSubmit={book}>
                                                <select name="class_tag" id="class_tag" className='option_tag' style={{padding:'5px 25px',borderRadius:5}} onChange={(e)=>setTclass(e.target.value)}>
                                                      <option value="noClass">SELECT CLASS</option>
                                                      <option value="firstClass">FIRST CLASS</option>
                                                      <option value="SecondClass">SECOND CLASS</option>
                                                </select>
                                                <p className='err2 mx-3' style={{color:'red',display:'none',fontWeight:'bold',fontSize:10}}>*PLEASE SELECT YOUR TRAVELING CLASS!</p>
                                               <br /> <input type="number" id='seats' className='my-2 option_tag' placeholder='    NO. OF TICKETS' style={{padding:'5px 0px',borderRadius:5}} onChange={(e)=>setNot(e.target.value)} />
                                                <p className='err mx-3' style={{color:'red',display:'none',fontWeight:'bold',fontSize:10}}>*PLEASE ENTER VALID NO. OF TICKETS!</p>
                                                
                                               <button type='submit' className='train mx-5 btn search_btn2 tbn float-right ms-auto' style={{color:'#f78c2f',backgroundColor:'black',padding:'8px 50px'}}>BOOK MY TICKET</button>
                                            <br /> <br />
                                            </form>
                                            </div>
                                       </div>
                            </>                            
                            :<h1 key={a.trainNumber}></h1>):<h1   style={{color:'#fff'}}>NO MACHING TRAIN FOUND AT THIS MOMENT.....</h1>}
                </div>
                <div className="col-sm-1"></div>
          </div>
    </section>
  )
}

export default Train