import React, {useState, useEffect} from 'react'
import Header from './Header'
import Leftsidebar from './Leftsidebar'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Allemp() {

    const [employ, setEmploy] = useState([]);

    useEffect(() => {
        allemploy();
    }, [])

    const allemploy = async () => {
        const result = await axios.get("http://localhost:3005/employ")
        setEmploy(result.data)
    }

    const deleteDtat = async id =>{
        await axios.delete(`http://localhost:3005/employ/${id}`)
        allemploy();
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
                        <h2 className='text-center pt-3'>All Employ</h2>
                        <div className=' mt-5 px-5'>
                            <table className="table">
                                <thead className='table-dark'>
                                    <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone No.</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Salary</th>
                                    <th scope="col">Date of joining</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {employ.map((employ, index) => {
                                        return<>
                                            <tr>
                                                 <th scope='row'>{employ.id}</th>
                                                <td>{employ.name}</td>
                                                <td>{employ.phone}</td>
                                                <td>{employ.age}</td>
                                                <td>{employ.address}</td>
                                                <td>{employ.salary}</td>
                                                <td>{employ.dateojoin}</td>
                                                <td>
                                                    <Link to={`/viewemp/${employ.id}`}><i className="fa-solid fa-eye viewbtn"><span className='tooltiptext'>View</span></i></Link>
                                                    <Link to={`/editemp/${employ.id}`}><i className="fa-solid fa-pen-to-square editbtn"><span className='tooltiptext'>Edit</span></i></Link>
                                                    <button className='deletebutton' onClick={() => deleteDtat(employ.id)}><i className="fa-solid fa-trash deletebtn "><span className='tooltiptext'>Delete</span></i></button>
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
