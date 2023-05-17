import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Train from './Train'
const Main = ({search}) => {
   const [data,setData]=useState([]);
   useEffect(()=>{
       axios.get('http://localhost:1000/train')  //getting data from backend server 
            .then((response)=>setData(response.data));//and storing it in data variable and using it to display
    },[])
   

  return (
      <section>
              {/* <div className="container"> */}
                    <div className="row my-5">
                          {/* <div className="col-sm-1"></div> */}
                          <div className="col-sm-12 " style={{backgroundColor:'rgb(0,0,0,0.5),',borderRadius:5,padding:3}}>
                                      <div className="row mx-3">
                                            {data.map((d)=><Train key={d.trainNumber} tname={d.trainName} tno={d.trainNumber} tfrom={d.from} tto={d.to} tdate={d.date} ttime={d.time} search={search} />)}
                                      </div>

                          </div>
                          {/* <div className="col-sm-1"></div> */}
                    </div>
              {/* </div> */}
      </section>
  )
}

export default Main