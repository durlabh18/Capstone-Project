import React from 'react'
import './Navbar.css'
import Book from './Assets/Book.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={Book} alt='Book' />
                <p>LUV 2 READ</p>
            </div>
            <div className='nav-menu'>
                <Link to="/">Home</Link>
                <Link to="/Registration">Explore Books</Link>
            </div>
            <div className='login'>
                <Link type='button' to="/login">Login</Link>
            </div>
        </div>
    )
}

export default Navbar