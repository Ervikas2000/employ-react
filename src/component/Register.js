import React, { useState , useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    username: '',
    password: '',
  })

  const [alluser, setAllUser] = useState([])

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    allUsers()
  }, [])

  const allUsers = async (e) => {
    const result = await axios.get(`http://localhost:3005/user`)
    setAllUser(result.data)
  }


  const formSubmit = async (e) => {
    e.preventDefault()


    var i = 0;
    const totaluser = alluser.length-1;
    var foruser = 0;

    for(i; i <= totaluser; i++){
      if(user.username == alluser[i].username){
              // alert("user already axsist")
              foruser++
            }
    };

    if(foruser == 1){
      alert("user alerady exsist")
    }else{
      await axios.post("http://localhost:3005/user", user)
      alert("You are register Please Login")
      navigate("/login")
    }

  }


  return (
    <>
      <div className="logindiv">
        <h1 className="text-white text-center pt-5">Register Yourself</h1>
        <form className="loginform m-auto" onSubmit={(e) => formSubmit(e)}>
          <fieldset className="fieldset mt-3">
            <legend>User name</legend>
            <input
              type="text"
              autoComplete="off"
              name="username"
              onChange={(e) => onInputChange(e)}
              required
            />
          </fieldset>
          <fieldset className="fieldset mt-3">
            <legend>Password</legend>
            <input
              type="password"
              autoComplete="off"
              name="password"
              onChange={(e) => onInputChange(e)}
              required
            />
          </fieldset>

          <div className="mt-5">
            <button className="loginbtn">Register</button>
          </div>
        </form>
      </div>
    </>
  )
}
