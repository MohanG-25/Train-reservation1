import React from 'react'
import $ from 'jquery';
import {useNavigate} from 'react-router-dom';
const Login = ({values,cap}) => {
     const navigate=useNavigate();
      console.log(values);
      const checkLogin=(e)=>{
            e.preventDefault();
            var name=$('#login_name').val();
            var password=$('#login_password').val();
            values.map((val)=>{
                  if(val.username==name){
                       $('#name_error').hide();
                        if(val.password==password){
                         $('#password_error').hide();
               //CHANGE PAGE PROGRAM       
                          cap(val.username);
                          navigate('/add');

                        }
                  }
                  if(val.username!=name){
                        $('#name_error').show();
                  }
                  if(val.password!=password){
                        $('#password_error').show();
                  }
            })
      }
      return ( 
    <div className="adminLoginForm">
        <div className="container">
              <div className="row my-5">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 text-center form_area p-5">
                          <h4 style={{color:'#fff',fontWeight:'bold'}}>
                                <span className="admin_style">𝔸</span>
                                <span className="admin_style">𝔻</span>
                                <span className="admin_style">𝕄</span>
                                <span className="admin_style">𝕀</span>
                                <span className="admin_style">ℕ</span>
                                <span className="admin_style"> </span>
                                <span className="admin_style">𝕃</span>
                                <span className="admin_style">𝕆</span>
                                <span className="admin_style">𝔾</span>
                                <span className="admin_style">𝕀</span>
                                <span className="admin_style">ℕ</span>
                          </h4>
                          <br />
                          <form action="" id='admin_form' onSubmit={checkLogin}>
                                 <input type="text"  placeholder='USERNAME' id='login_name' style={{borderRadius:5,padding:'3px 20px'}} /><br />
                                 <div className="error" id='name_error'>Please Enter Valid Username!</div>
                                 <br />
                                 <input type="password" placeholder='PASSWORD' id='login_password' style={{borderRadius:5,padding:'3px 20px'}} /><br />
                                 <div className="error" id='password_error'>Please Enter a Valid Password</div>
                                 <br />
                                 <button type='submit' className='btn login_submit ' style={{color:'#f78c2f',backgroundColor:'black'}}>LOGIN</button>
                           </form>
                    </div>
                    <div className="col-md-2"></div>
              </div>
        </div>
    </div>
  )
}

export default Login