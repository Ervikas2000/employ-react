import React,  {useState, useEffect} from 'react'
import Header from './Header'
import Leftsidebar from './Leftsidebar'
import chart from '../images/chart.avif'

export default function Home() {


   
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
                        <h2 className='text-center pt-3'>Welcome</h2>
                        <div className='text-center mt-5'>
                            <img src={chart} className="w-50" />
                        </div>
                    </div>
            </div>
            </div>
        </section>
    </>
  )
}


