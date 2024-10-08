import React , { useState } from 'react'
import { apiRequest } from '../utils/utils';
import { useDispatch } from 'react-redux';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState({
  });
  const dispatch = useDispatch();

  const displayMessage = typeof message === 'string' ? JSON.stringify(message) : " "; 

const RegisterAccount = async (e) =>{
  e.preventDefault();
  console.log("Form Data: ", formData)

  const res = await apiRequest({
    url:"/account/register",
    method:"POST",
    data:formData,
  })
  console.log(res)
  if (res.status === "success"){
    setMessage(res.message)
    dispatch(AccountLogin(res.foundUser));
    setTimeout(() =>{
      window.location.replace("/");
    }, 6000)
  }else{
    console.log(res);
  }
}

// name e name='password' name ='email (от <input/> по-долу), а не е полето за попалване.
const handleChange = (e) =>{
  const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
}

  return (
    <div className='text-blue-800 bg-red-500 h-screen w-screen'>
      <form onSubmit={RegisterAccount} className="flex flex-col items-center justify-center w-screen h-screen text-3xl">
        <input className='text-black mb-5 rounded-lg p-2' type='text' placeholder='name' name ='name' value={formData.name} onChange={handleChange}/>
        <input className='text-black mb-5 rounded-lg p-2'type='text' placeholder='email' name ='email' value={formData.email} onChange={handleChange}/>
        <input className='text-black mb-5 rounded-lg p-2' type='text' placeholder='password' name='password' value={formData.password} onChange={handleChange}/>
        <button>Submit</button>
        <span className='text-blue-700 text-3xl'>{displayMessage}</span>
      </form>
    </div>
  )
}

export default Register
