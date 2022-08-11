import { useState, useEffect} from 'react'

import axios from 'axios'

import { showSuccessMessage, showErrorMessage } from '../../../../helpers/alerts'

import { API } from '../../../../config'

import Layout from '../../../../components/Layout'

import { withRouter } from 'next/router'

import jwt from 'jsonwebtoken'

const ResetPassword = ({ router }) => {
    
    const [state, setState] = useState({
        name: '',
        resetPasswordLink: '',
        newPassword: '',
        error: '',
        success: '',
        buttonText: 'Reset password'
    })

    const { name, resetPasswordLink, newPassword, error, success, buttonText } = state

    useEffect(() => {  
        let resetPasswordLink = router.query.id
        try {
            const { name } = jwt.decode(resetPasswordLink)
            setState({ ...state, name, resetPasswordLink })
        } catch (error) {
            // todo: redirct
            setState({ ...state, error: 'Invalid link' })
        }
    }, [router])

    const handleChange = (e) => {
        setState({ ...state, newPassword: e.target.value, success: '', error: '' })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setState({ ...state, buttonText: 'Resetting' })
        try {
            const response = await axios.put(`${API}/reset-password`, { newPassword, resetPasswordLink })
            setState({ ...state, resetPasswordLink: '', buttonText: 'Reset Successfully', success: response.data.message })
        } catch (error) {
            setState({ ...state, buttonText: 'Reset your password', error: error.response.data.error })
        }
    }

    const resetPasswordForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="newPassword"
                    className="form-control"
                    placeholder="Please type your new password"
                    value={newPassword}
                    onChange={handleChange}
                    required
                />
            </div>
        </form>
    )

    return (
        <Layout>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1>Hey {name}, Ready to reset your password?</h1>
                    <br />
                    {success && showSuccessMessage(success)}
                    {error && showErrorMessage(error)}
                    {resetPasswordForm()}
                    <button className="btn btn-outline-warning btn-block" onClick={handleSubmit}>
                        {buttonText}
                    </button>
                </div>
            </div>
        </Layout>
    )
}

export default withRouter(ResetPassword)

