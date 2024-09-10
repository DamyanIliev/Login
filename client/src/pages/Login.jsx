import React, { useState } from 'react'
import { apiRequest } from '../utils/utils';
import { AccountLogin } from '../redux/authSlice';
import { useDispatch } from 'react-redux';

function Login() {

  const [formData, setFormData] = useState({
    email:'',
    password:'',
  })
  const [message, setMessage] = useState()
  const displayMessage = message ? JSON.stringify(message) : "";
  const dispatch = useDispatch();

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:value
    }))
  }
  const handleLogin = async(e) =>{
    e.preventDefault();
    console.log("Form Data: ", formData)
    
    const res = await apiRequest({
      url:"/account/login", 
      method: "POST",
      data: formData,
    });
    console.log(res);
    if(res.status === "success"){
      setMessage("Login successful!")
      dispatch(AccountLogin(res.foundUser));
      setTimeout(() =>{
        window.location.replace("/");
      }, 2000)

    }else{
      setMessage("Please try again")
    }
  }

  return (
    <div className='h-screen w-screen text-blue-800 bg-red-500'>
      <form className="flex flex-col items-center justify-center w-screen h-screen text-3xl" onSubmit={handleLogin}>
        <input className='text-black mb-5 rounded-lg p-2' type="text" placeholder='email' name='email' value={formData.email} onChange={handleChange}/>
        <input className='text-black mb-5 rounded-lg p-2' type="text" placeholder='password' name='password' value={formData.password} onChange={handleChange}/>
        <button>Submit</button>
        <span className='text-blue-700 text-3xl' >{displayMessage}</span>
      </form>
    </div>
  )
}

export default Login
