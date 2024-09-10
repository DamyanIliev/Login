import React from 'react'
import { useSelector } from 'react-redux'

function Info() {

    const { account } = useSelector(state => state.auth);
    console.log('Account:', account);

  return (
    <div>
      IF you see this page You are in Your account!
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
