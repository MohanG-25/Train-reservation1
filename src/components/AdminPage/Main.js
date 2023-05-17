import React from 'react'
import { useState,useEffect } from 'react';

import Login from './Login';
const Main = ({cap}) => {
      const [name,setName]=useState('');
      const [login,setLogin]=useState([
            {
                  username:"agilan",
                  password:"abc123"
            },
            {
                  username:"manoj",
                  password:"xyz123"
            },
            {
                  username:"elaya",
                  password:"elaya"
            },
            {
                  username:"mohan",
                  password:"cricket"
            },
            {
                  username:'harish',
                  password:'harish'
            },
            {
                  username:"",
                  password:""
            }
      ])
        
  return (
         <main>
             <Login values={login} cap={cap}/>
         </main>
      )
}

export default Main