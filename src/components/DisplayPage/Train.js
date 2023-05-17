import React from 'react'
import { useNavigate } from 'react-router-dom';
const Train = ({tname,tno,tfrom,tto,tdate,ttime,search}) => {
  const Navigate=useNavigate();
  var newDate=tdate.substring(0,10);
  const searchFun=(e)=>{
     e.preventDefault();
     search(tfrom,tto,newDate);
    setTimeout(()=>{
          Navigate('/bookTicket');
    },500)
  }
  return (
      <div className="col-sm-3 mx-1 my-1 p-2" style={{backgroundColor:'rgb(0,0,0,0.7)'}}>
              <h3 className='displayTrainName m-3' style={{color:'#fff'}}>{tname}</h3>  
              <h6 className='displayTrainName m-3' style={{color:'#fff'}}>{tno}</h6>
              <span className='displayTrainName m-3' style={{color:'#fff'}}>{tfrom}<i className="fa-solid fa-arrow-right"></i>{tto}</span>
              <h6 className='displayTrainName m-4' style={{color:'#fff'}}>{newDate}   at   {ttime}</h6>
              <button className='button' style={{padding:5,borderRadius:2,marginLeft:200}} onClick={searchFun}>BOOK THIS TRAIN</button>
      </div>
  )
}

export default Train