import { useState } from 'react'

import axios from 'axios'

import { showSuccessMessage, showErrorMessage } from '../../../helpers/alerts'

import { API } from '../../../config'

import Layout from '../../../components/Layout'

const forgotPassword = () => {
    const [state, setState] = useState({
        email: '',
        error: '',
        success: '',
        buttonText: 'Forgot Password'
    })

    const { email, error, success, buttonText } = state

    const handleChange = (e) => {
        setState({ ...state, email: e.target.value, success: '', error: '' })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log('posting email to', email)
        try {
            const response = await axios.put(`${API}/forgot-password`, { email })
            setState({
                ...state,
                email: '',
                buttonText: 'Sent Email Successfully',
                success: response.data.message
            })
        } catch (error) {
            setState({
                ...state,
                buttonText: 'Forgot Password',
                error: error.response.data.error
            })  
        }
    }

    const passwordForgotForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="email"
                    className="form-control"
                    placeholder="Please type your email"
                    value={email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <button className="btn btn-outline-warning">
                    {buttonText}
                </button>
            </div>
        </form>
    )

    return (
        <Layout>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="text-center pb-4">Forgot Password</h1>
                    <br />
                    {success && showSuccessMessage(success)}
                    {error && showErrorMessage(error)}
                    {passwordForgotForm()}
                </div>
            </div>
        </Layout>
    )
}

export default forgotPassword

