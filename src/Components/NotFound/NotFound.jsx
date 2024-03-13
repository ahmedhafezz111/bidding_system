import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
    <section className='d-flex align-items-center  justify-content-center flex-column '> 
        <h2>404 Not Found</h2>
        <Link to='/' className='btn btn-danger '>
            Go Back
        </Link>
    </section>
    </>
  )
}
