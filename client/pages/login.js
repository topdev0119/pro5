import { useState, useEffect } from 'react'

import Layout from '../components/Layout'

import Link from 'next/link'

import Router from 'next/router'

import axios from 'axios'

import { showSuccessMessage, showErrorMessage } from '../helpers/alerts'

import { API } from '../config'

const Login = () => {
    const [state, setState] = useState({
        email: 'colinwang14@163.com',
        password: '123456',
        error: '',
        success: '',
        buttonText: 'Login'
    })

    const { email, password, error, success, buttonText } = state

    const handleChange = (name) => (e) => {
        setState({ ...state, [name]: e.target.value, error: '', success: '', buttonText: 'Login' })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.table({ email, password })
        setState({ ...state, buttonText: 'Logining' })

        axios
            .post(`${API}/Login`, {
                email,
                password
            })
            .then(response => {
                // console.log('Login SUCCESS', response)
                setState({
                    ...state,
                    email: '',
                    password: '',
                    buttonText: 'Submitted',
                    success: response.data.message
                })

            })
            .catch(error => {
                setState({
                    ...state,
                    buttonText: 'Login',
                    error: error.response.data.error
                })
            })
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
                {/* <hr />
                {JSON.stringify(state)} */}
            </div>
        </Layout>
    )
}

export default Login