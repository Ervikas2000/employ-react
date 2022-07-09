import React from 'react'
import { Link } from 'react-router-dom'

export default function Frontpage() {
  return (
    <>
      <div className='container-fluid frontdiv'>
        <div>
            <Link to={"/login"} className="frontbtn">Login</Link>
            <Link to={"/register"} className="frontbtn">Register</Link>
        </div>
      </div>
    </>
  )
}
