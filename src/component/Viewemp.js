import React,{useEffect, useState} from 'react'
import Header from './Header'
import Leftsidebar from './Leftsidebar'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export default function Viewemp() {
    const [employ, setEmploy] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        allemploys();
    }, []);

    const allemploys = async e => {
       const result = await axios.get(`http://localhost:3005/employ/${id}`)
       setEmploy(result.data)
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
                        <h2 className='text-center pt-3'>View Details</h2>
                        <div className=' mt-5 px-5'>
                           <ul className='w-50 m-auto detailul'>
                                <li>Employ Id: <span>{employ.id}</span></li>
                                <li>Employ Name: <span>{employ.name}</span></li>
                                <li>Employ Phone Number: <span>{employ.phone}</span></li>
                                <li>Employ Age: <span>{employ.age}</span></li>
                                <li>Employ Address: <span>{employ.address}</span></li>
                                <li>Employ Salary: <span>{employ.salary}</span></li>
                                <li>Employ Date of Joining: <span>{employ.dateojoin}</span></li>
                           </ul>
                        </div>
                        <div className='text-end px-5 mt-5 mb-5'>
                            <Link to="/allemp" className='backbtn'>Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
