import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/upload'>Upload a Pic</Link>
        </div>
    )
}

export default NavBar
