import React, {useState, useEffect} from 'react'
import Header from './Header'
import Leftsidebar from './Leftsidebar'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Allemp() {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        alluser() 
    }, []);

    const alluser = async () =>{
        const result = await axios.get("http://localhost:3005/user")
        setUsers(result.data)
    };

    const deleteuser = async(id) =>{
        await axios.delete(`http://localhost:3005/user/${id}`)
        alluser()
    };
    
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
                        <h2 className='text-center pt-3'>All Employ</h2>
                        <div className=' mt-5 px-5'>
                            <table className="table">
                                <thead className='table-dark'>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">User Name</th>
                                        <th scope="col">Password</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((value)=>{
                                        return<>
                                             <tr>
                                                <th scope='row'>{value.id}</th>
                                                <td>{value.username}</td>
                                                <td>{value.password}</td>
                                                <td>
                                                    <button className='deletebutton' onClick={()=>deleteuser(value.id)}><i className="fa-solid fa-trash deletebtn "><span className='tooltiptext'>Delete</span></i></button>
                                                </td>
                                            </tr>  
                                        </>
                                    })}                            
                                </tbody>
                            </table>
                        </div>
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
