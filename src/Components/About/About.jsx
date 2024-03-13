import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function About() {
  return (
    <>
            <section className='py-5 bg-light'>
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <ul>
              <li><Link to='/about/'>web</Link></li>
              <li><Link to='mob'>mob</Link></li>
            </ul>
          </div>

        <div className="col-lg-10">
          <Outlet />
        </div>
          
  
        </div>
      </div>
  
    </section>
    
    </>
  )
}
