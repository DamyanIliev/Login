import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { AccountLogout } from '../redux/authSlice';
import Menu from '../components/menu';

function Home() {
  


  return (
    <div>
      <Menu/>
      <h1 className=' flex justify-center text-5xl'>HomePage</h1>
    </div>
  )
}

export default Home
