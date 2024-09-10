import React from 'react'
import { useSelector } from 'react-redux'
import Menu from '../components/menu';

function Info() {

    const { account } = useSelector(state => state.auth);
    console.log('Account:', account);

  return (
    <div>
      <Menu/>
      <h1 className='flex justify-center text-5xl'>IF you see this page You are in Your account!</h1>
      <br/>
      <div>{account.name}</div>
      <br/>
      <div>{account.email}</div>
      <br/>
      <div></div>
    </div>
  )
}

export default Info
