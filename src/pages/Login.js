import React from 'react'
import { auth, provider } from '../fireebase.config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = ({ setIsAuth }) => {
    const navigate = useNavigate()
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            setIsAuth(true)
            navigate('/')

        })
    }

    return (
        <div className='loginPage'>

            <button onClick={signInWithGoogle} className='login-with-google-btn'>
                Sign In With Google
            </button>
        </div>
    )
}

export default Login
