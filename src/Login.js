import React, { useState } from 'react'
import './Login.css'
import { auth } from './Firebase'
import { Link, useHistory } from 'react-router-dom'

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = (event) => {
        event.preventDefault()         //this stop refresh on signIn button

        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push('/')
        })
        .catch(e => alert(e.message) )
    }

    const register = (event) => {
        event.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
             history.push('/')
        })
        .catch(e => alert(e.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img 
                    className='login__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt=''
                />
            </Link>

            <div className='login__container'>
                <h1>Sign in</h1>

                <form>

                    <h5>Email</h5>
                    <input type='email' onChange={ event => setEmail(event.target.value) } value={email} />

                    <h5>Password</h5>
                    <input type='password' onChange={ event => setPassword(event.target.value) } value={password} />

                    <button onClick={login} type='submit' className='login__signInButton'>Sign In</button>
                    
                </form>

                <p>By Signing-In you agree the condition of Amazon.com and
                         allow cache. Also you can see your notifications and privacy notes</p>

                <button onClick={register} className='login__registerButton' >Create your Amazon Account</button>
            </div>
                    
        </div>
    )
}

export default Login
