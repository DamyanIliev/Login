import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { AccountLogout } from '../redux/authSlice';

const menu = () => {

    const dispatch= useDispatch();

    const handleLogout = (e) =>{
        e.preventDefault;
        dispatch(AccountLogout());
  }

  return (
    <div className='w-screen h-16 bg-red-600 flex '>
        <div className='w-1/2 flex'>
            <div className='m-5'>
                <Link className='text-green-500 underline' to="/">Home</Link>
            </div>
            <div className='m-5 '>
                <Link className='text-green-500 underline' to="/info">Info</Link>
            </div>
        </div>
        <div className='w-screen flex justify-end m-2'>
            <button onClick={handleLogout} className='bg-blue-700 rounded-2xl p-3 ' >LogOut</button>
        </div>
      
    </div>
  )
}

export default menu
