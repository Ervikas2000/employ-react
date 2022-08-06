import React,{useState, useEffect} from 'react'
import Header from './Header'
import Leftsidebar from './Leftsidebar'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Changepass() {

    const navigate = useNavigate();

    const [cpasswordd , setCpassword] = useState({
        cpassword:"",
        npassword:"",
        rpassword:""
    });
    const [indexusers, setIndexusers] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        indexuser();
        alluser();
    }, []);

    const {cpassword, npassword, rpassword} = cpasswordd;

    const onInputChange = e => {
        setCpassword({...cpasswordd,[e.target.name]:e.target.value});
    }

    const indexuser = async () =>{
        const result = await axios.get(`http://localhost:3005/indexuser/${1}`)
        setIndexusers(result.data)
    };


    const alluser = async () =>{
        const result2 = await axios.get("http://localhost:3005/user")
        setUsers(result2.data)
    };

    const arrlength = users.length-1;
    var i = 0;
    for(i; i <= arrlength; i++){
        if(indexusers.findex == users[i].id){
            var userind = i;
            var userpass = users[userind].password;
            var usernname = users[userind].username;
            var userid = i + 1;
            break;
        }
    }

    const onFromSubmit = async e => {
        e.preventDefault();
        if(cpasswordd.cpassword == userpass){
            if(cpasswordd.npassword == cpasswordd.rpassword && cpasswordd.npassword != userpass){
                var password = {
                    "username":usernname,
                    "password":cpasswordd.rpassword
                };
                console.log(password);
                await axios.put(`http://localhost:3005/user/${userid}`, password)
                alert("Your Password Is Changed")
                navigate("/home")
            }else{
                alert("Please Enter New Password")
            }
        }else{
            alert("Please Enter Currect Password")
        }
    }
  
  return (
    <>
        < Header />

        <section>
            <div className='container-fluid px-0'>
                <div className='row me-0'>
                    <div className='col-md-2'>
                        < Leftsidebar />
                    </div>

                    <div className='col-md-10 righthome'>
                        <h2 className='text-center pt-3'>Change Your Password</h2>
                        <form className='w-50 m-auto' onSubmit={e => onFromSubmit(e)}>
                                <fieldset className='fieldset mt-3'>
                                    <legend>Current Password:</legend>
                                    <input type="password"
                                    required
                                    name='cpassword'
                                    onChange={e => onInputChange(e)}
                                    value={cpassword}
                                     />
                                </fieldset>

                                <fieldset className='fieldset mt-3'>
                                    <legend>New Password:</legend>
                                    <input type="password"
                                    required
                                    name='npassword'
                                    onChange={e => onInputChange(e)}
                                    value={npassword}
                                     />
                                </fieldset>

                                <fieldset className='fieldset mt-3'>
                                    <legend>Re-Enter New Password:</legend>
                                    <input type="text"
                                    onChange={e => onInputChange(e)}
                                    required
                                    name='rpassword'
                                    value={rpassword}
                                     />
                                </fieldset>

                                <div className='text-center mt-5'>
                                    <button className='submitbtn'>Submit</button>
                                </div>
                            </form>
                        <div className='text-end px-5 mt-5 mb-5'>
                            <Link to="/home" className='backbtn'>Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
