import { useState, useEffect } from 'react'

import Layout from '../components/Layout'

import Link from 'next/link'

import Router from 'next/router'

import axios from 'axios'

import { showSuccessMessage, showErrorMessage } from '../helpers/alerts'

import { API } from '../config'

import { authenticate, isAuth } from '../helpers/auth'

const Login = () => {
    const [state, setState] = useState({
        email: 'colinwang14@163.com',
        password: '123456',
        error: '',
        success: '',
        buttonText: 'Login'
    })

    useEffect(() => {
        isAuth() && Router.push('/')
    }, [])


    const { email, password, error, success, buttonText } = state

    const handleChange = (name) => (e) => {
        setState({ ...state, [name]: e.target.value, error: '', success: '', buttonText: 'Login' })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        // console.table({ email, password })
        setState({ ...state, buttonText: 'Logging in' })

        try {
            const response = await axios.post(`${API}/login`, {
                    email,
                    password
            })
                
            // console.log('Login SUCCESS', response)

            authenticate(response, () =>
                isAuth() && isAuth().role === 'admin' ? Router.push('/admin') : Router.push('/user')
            )

        } catch (error) {
            setState({
                ...state,
                buttonText: 'Login',
                error: error.response.data.error
            })
        }
    }

    const LoginForm = () =>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    value={email}
                    onChange={handleChange('email')}
                    type="email"
                    className="form-control"
                    placeholder="Type your email"
                    required
                />
            </div>
            <div className="form-group">
                <input
                    value={password}
                    onChange={handleChange('password')}
                    type="password"
                    className="form-control"
                    placeholder="Type your password"
                    required
                />
            </div>
            <div className="form-group">
                <button className="btn btn-outline-warning">
                    {buttonText}
                </button>
            </div>
        </form>

    return (
        <Layout>
            <div className="col-md-6 offset-md-3">
                <h1>Login</h1>
                <br />
                {success && showSuccessMessage(success)}
                {error && showErrorMessage(error)}
                {LoginForm()}
                <Link href="/auth/password/forgot">
                    <a className="text-danger float-right">Forgot Password</a>
                </Link>
            </div>
        </Layout>
    )
}

export default Login