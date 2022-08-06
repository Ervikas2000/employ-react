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


  const formSubmit = (e) => {
    e.preventDefault()

   
    // if(user.username == alluser.username){

    //     if(user.password == alluser.userpassword){
    //         navigate("/home")
    //     }else{
    //         alert("password error")
    //     }
    // }else{
    //     alert("user error")
    // }





    // var i = 0;
    // const totaluser = alluser.length-1;

    // for(i; i <= totaluser; i++){
    //     if(user.username == alluser[i].username){
    //           var indexofuser = i;
    //         }
    // };

    // if(user.username == alluser[indexofuser].username && user.password == alluser[indexofuser].password){
    //  navigate("/tokencheck")
    // }else{
    //   alert("username or password error")
    // }










    var i = 0;
    const totaluser = alluser.length-1;

    for(i; i <= totaluser; i++){
        if(user.username == alluser[i].username){
              var indexofuser = i;              
            }
    };

    if(user.username == alluser[indexofuser].username && user.password == alluser[indexofuser].password){
      var indobj = {
        "findex":indexofuser + 1
      }
      axios.put(`http://localhost:3005/indexuser/${1}`, indobj)
      navigate("/home")
    }else{
      alert("username or password error")
    }





  }

  
  return (
    <>
      <div className="logindiv">
        <h1 className="text-white text-center pt-5">Admin Login</h1>
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
            <button className="loginbtn">Login</button>
          </div>
        </form>
      </div>
    </>
  )
}
