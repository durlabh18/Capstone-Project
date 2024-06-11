import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-final'>
        <div className='footer-content'>
            <Link to='/'>Home</Link>
            <Link to='/Registration'>Explore Books</Link>
        </div>     
    </div>
  )
}

export default Footer

