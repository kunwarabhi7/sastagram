import React from 'react'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { auth } from './fireebase.config'
const NavBar = ({ isAuth, setIsAuth }) => {
    const navigate = useNavigate()
    const signOutUser = () => {
        signOut(auth).then(() => {
            setIsAuth(false)
            navigate('/login')
        })
    }
    return (
        <div className='navbar'>
            <Link to='/'>Home</Link>
            {!isAuth ? <Link to='/login'>Login</Link> :
                <>
                    <Link to='/upload'>Upload A pic</Link>
                    <button onClick={signOutUser}>Log Out </button>
                </>}
        </div>
    )
}

export default NavBar
