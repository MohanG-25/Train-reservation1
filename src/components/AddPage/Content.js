import React, { useState } from 'react'
import Add from './CUD/Add';
import Update from './CUD/Update';
import Remove from './CUD/Remove';
const Content = () => {
      const [count,setCount]=useState(0);
      
  return (
    <div className="content">
          <div className="row">
                <div className="col-sm-3">
                      <div className="list-group list-group1" style={{cursor:'pointer'}}>
                            <a className={count===0?"list-group-item light-bg-active":"list-group-item light-bg"} onClick={()=>setCount(0)}>ADD</a>
                            <a className={count===1?"list-group-item light-bg-active":"list-group-item light-bg"} onClick={()=>setCount(1)}>UPDATE</a>
                            <a className={count===2?"list-group-item light-bg-active":"list-group-item light-bg"} onClick={()=>setCount(2)}>REMOVE</a>
                      </div>
                </div>
                <div className="col-sm-9">
                            <div className="mainSection">
                            {count==0?<Add/>:count===1?<Update/>:<Remove/>}
                            </div>
                </div>
          </div>
    </div>
  )
}

export default Content