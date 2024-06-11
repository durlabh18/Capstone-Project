import React from 'react'
import './BeforeFooter.css'
import { Link } from 'react-router-dom'

const BeforeFooter = () => {
  return (
    <div className='footer'>
      <h1>What are you reading?</h1>
      <p>The library team would love to know what you have been reading.
                                Whether it is to learn a new skill or grow within one,
                                we will be able to provide the top content for you!
    </p>
    <Link type='button' className="button-50"  to="/Registration">Sign Up</Link>
    </div>
  )
}

export default BeforeFooter
