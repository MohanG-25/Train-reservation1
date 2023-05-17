import React from 'react'
import Form from './Form'
import Inc_font from './Inc_font'
const Main = ({search}) => {
  return (
  <main className='header'>
                            <div className="box text-center">
                                <p className='box-para text-light'>PLEASE ENTER ALL THE REQUIRED DETAILS!</p>
                             </div>
       <div className="container d-flex flex-wrap my-5 main_area">
          <div className="a text-light">
            <h1  style={{fontWeight:'bolder',cursor:'pointer'}}><span>WELCOME TO <br /> BOOK <span style={{fontWeight:'lighter'}}>YOUR</span> </span><span className='train'>TRAIN</span></h1>
            <h5 className='mx-5 my-5' style={{color:'#fff',fontWeight:'lighter'}}>
                  <Inc_font />
            </h5>
          </div>
          <div className="b form_area">
            <Form search={search}/>
          </div>
       </div>
  </main>
  )
}

export default Main