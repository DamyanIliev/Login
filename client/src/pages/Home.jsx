import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { AccountLogout } from '../redux/authSlice';

function Home() {
  
  const dispatch= useDispatch();

  const handleLogout = (e) =>{
    e.preventDefault;
    dispatch(AccountLogout());
  }


  return (
    <div>
      <h1>HomePage</h1>
      <br/>
      <Link className='text-blue-600 underline' to="/info">Info page</Link>
      <br/>
      <button onClick={handleLogout}>LogOut</button>
    </div>
  )
}

export default Home
