import React from 'react'
import logo from "../img/logo.jpg"
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>

        <span className='logo'>Lama Chat</span>
        
          <div className='user'>
            <img src={logo} alt="" />
            <span>Jon Doe</span>
            <button onClick={()=> signOut(auth)}>Logout</button>
          </div>

    </div>
  )
}

export default Navbar