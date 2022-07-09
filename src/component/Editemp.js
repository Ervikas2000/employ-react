import React, {useState, useEffect} from 'react'
import Header from './Header'
import Leftsidebar from './Leftsidebar'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Editemp() {

    const navigate = useNavigate();

    const [employ, setEmploy] = useState({
        name:"",
        phone:"",
        age:"",
        address:"",
        salary:"",
        dateojoin:""
    });

    const {id} = useParams();

    const {name, phone, age, address, salary, dateojoin} = employ;

    const onInputChange = e => {
        setEmploy({...employ, [e.target.name]:e.target.value})
    }
    
    const onFromSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3005/employ/${id}`, employ)
        navigate("/allemp")
    }

    useEffect(() => {
        allemploy();
    }, [])

    const allemploy = async () => {
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
                        <h2 className='text-center pt-3'>Edit Detail</h2>
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
                            <Link to="/allemp" className='backbtn'>Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
