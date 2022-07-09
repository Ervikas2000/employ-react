import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Leftsidebar() {
    const navigate = useNavigate();
    const [indexusers, setIndexusers] = useState([]);
    const [users, setUsers] = useState([]);
    const [logoutind, setLogoutind] = useState({
        "findex": -1
    });

    useEffect(()=>{
        indexuser();
        alluser();
    }, []);

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
            var username = users[userind].username
            break;
        }
    }

    const logout = () => {
        
        
        axios.put(`http://localhost:3005/indexuser/${1}`, logoutind)
        navigate("/")
    }

    if(indexusers.findex < 0){
        navigate("/")
    }

    
  return (
    <>
        <div className='leftsidebar'>
            <h2 className='text-white pt-3'>{username}</h2>

            <div className='mt-5'>
                <Link to="/allemp" className='leftbtn'>All Employ</Link>
            </div>
            <div className='mt-5'>
                <Link to="/addnewemp" className='leftbtn'>Add New Employ</Link>
            </div>
            <div className='mt-5'>
                <Link to="/alluser" className='leftbtn'>All User</Link>
            </div>

            <div className='mt-5'>
                <button  className='leftbtn' onClick={() => logout()}>Logout</button>
            </div>
        </div>
    </>
  )
}
