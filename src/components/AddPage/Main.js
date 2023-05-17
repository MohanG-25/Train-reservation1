import React from 'react'
import Content from './Content'
import $ from 'jquery'
const Main = ({name}) => {
    $('.box').hide();
  return (
    <section className='container'>
      
          <div className="row my-5">
            <div className="col-sm-1"></div>
            <div className="col-sm-10 p-4  form_area">
                      <h1 style={{cursor:'pointer'}}><span className='train'>
                           <span className="dashboard1">W</span>
                           <span className="dashboard1">E</span>
                           <span className="dashboard1">L</span>
                           <span className="dashboard1">C</span>
                           <span className="dashboard1">O</span>
                           <span className="dashboard1">M</span>
                           <span className="dashboard1">E</span>
                           <span className="dashboard1">,</span>
                           <span className=""> </span>
                      </span><span className='admin_name' style={{color:'#fff'}}>{name}</span></h1>
                      <hr style={{color:'#fff'}}/>
                             <div className="box text-center">
                             <p className='box-para text-light'>PLEASE ENTER ALL THE REQUIRED DETAILS!</p>
                             </div>
                      <br />
                      <h5 style={{color:'#fff',fontWeight:'bolder',cursor:'pointer'}}>
                       <span className="dashboard">D</span>
                       <span className="dashboard">A</span>
                       <span className="dashboard">S</span>
                       <span className="dashboard">H</span>
                       <span className="dashboard">B</span>
                       <span className="dashboard">O</span>
                       <span className="dashboard">A</span>
                       <span className="dashboard">R</span>
                       <span className="dashboard">D</span>
                      </h5>
                      <br />
                      <Content/>
            </div>
            <div className="col-sm-1"></div>
          </div>
    </section>
  )
}

export default Main