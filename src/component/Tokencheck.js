import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Tokencheck() {

  
      // const alreadyToken =   Math.round(Math.random()*10000);
     const alreadyToken = 58456;
    const navigate = useNavigate();

    const [stoken, setStoken] = useState({
        token:""
    });

    // const {token} = stoken;

    const onInputChange = e => {
        setStoken({...stoken, [e.target.name]:e.target.value})
    }

   

    const onFromSubmit = async e => {
        e.preventDefault();
        if(alreadyToken == stoken.token){
            await axios.put(`http://localhost:3005/stoken/${1}`, stoken);
            navigate("/home")
        }else{
            alert("Please Enter Valid Token")
        }

    }
    
  return (
    <>
      <div className="logindiv">
        <h1 className="text-white text-center pt-5">Token</h1>
        <h3 className="text-white text-center pt-5">Your Token : <span className='text-danger'>{alreadyToken}</span></h3>
        <form className="loginform m-auto" onSubmit={e => onFromSubmit(e)}>
          <fieldset className="fieldset mt-3">
            <legend>Enter Token</legend>
            <input
              type="number"
              autoComplete="off"
              name='token'
    
              onChange={e => onInputChange(e)}
              required
            />
          </fieldset>

          <div className="mt-5">
            <button type='submit' className="loginbtn">Proceed</button>
          </div>
        </form>
      </div>
    </>
  )
}
