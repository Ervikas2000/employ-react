import React, { useState } from 'react'
import Header from './Header'
import Leftsidebar from './Leftsidebar'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function Addnewenp() {

    const navigate = useNavigate();

    const [employ, setEmploy] = useState({
        name:"",
        phone:"",
        age:"",
        address:"",
        salary:"",
        dateojoin:""
    });

    const {name, phone, age, address, salary, dateojoin} = employ;

    const onInputChange = e => {
        setEmploy({...employ, [e.target.name]:e.target.value})
    }
    
    const onFromSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3005/employ", employ)
        navigate("/allemp")
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
                        <h2 className='text-center pt-3'>Add New Employ</h2>
                        <div className=' mt-5 px-5'>
                            <form className='w-50 m-auto' onSubmit={e => onFromSubmit(e)}>
                                <fieldset className='fieldset'>
                                    <legend>Name:</legend>
                                    <input type="text"
                                    name='name'
                                    onChange={e => onInputChange(e)}
                                    required
                                    value={name}
                                     />
                                </fieldset>

                                <fieldset className='fieldset mt-3'>
                                    <legend>Phone No:</legend>
                                    <input type="number"
                                    name='phone'
                                    onChange={e => onInputChange(e)}
                                    required
                                    value={phone}
                                     />
                                </fieldset>

                                <fieldset className='fieldset mt-3'>
                                    <legend>Age:</legend>
                                    <input type="number"
                                    name='age'
                                    onChange={e => onInputChange(e)}
                                    required
                                    value={age}
                                     />
                                </fieldset>

                                <fieldset className='fieldset mt-3'>
                                    <legend>Address:</legend>
                                    <input type="text"
                                    name='address'
                                    onChange={e => onInputChange(e)}
                                    required
                                    value={address}
                                     />
                                </fieldset>

                                <fieldset className='fieldset mt-3'>
                                    <legend>Salary:</legend>
                                    <input type="number"
                                    name='salary'
                                    onChange={e => onInputChange(e)}
                                    required
                                    value={salary}
                                     />
                                </fieldset>

                                <fieldset className='fieldset mt-3'>
                                    <legend>Date of joining:</legend>
                                    <input type="date" 
                                    name='dateojoin'
                                    onChange={e => onInputChange(e)}
                                    required
                                    value={dateojoin}
                                    />
                                </fieldset>

                                <div className='text-center mt-5'>
                                    <button className='submitbtn'>Submit</button>
                                </div>
                            </form>
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

