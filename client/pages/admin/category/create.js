import dynamic from 'next/dynamic'

import { useState, useEffect } from 'react'

import axios from 'axios'

import { API } from '../../../config'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

import { showSuccessMessage, showErrorMessage } from '../../../helpers/alerts'

import Layout from '../../../components/Layout'

import Resizer from 'react-image-file-resizer'

import withAdmin from '../../withAdmin'

import 'react-quill/dist/quill.bubble.css'

const Create = ({ user, token }) => {
    const [state, setState] = useState({
        name: '',
        error: '',
        success: '',
        // formData: typeof window !== 'undefined' && new FormData(),
        buttonText: 'Create',
        image: ''
    })

    const [content, setContent] = useState('')

    const [imageUploadButtonName, setImageUploadButtonName] = useState('Upload image')

    const { name, error, success, buttonText, image } = state

    const handleChange = (name) => (e) => {
        // const value = name === 'image' ? e.target.files[0] : e.target.value
        // const imageName = name === 'image' ? e.target.files[0].name : 'Upload image'
        // // console.log(formData)
        // formData.set(name, value)
        setState({ ...state, [name]: e.target.value, error: '', success: '' })
    }

    const handleContent = (e) => {
        // console.log(e)
        setContent(e)
        setState({ ...state, success: '', error: '' })
    }

    const handleImage = (event) => {
        let fileInput = false;
        if (event.target.files[0]) {
            fileInput = true;
        }
        setImageUploadButtonName(event.target.files[0].name)

        if (fileInput) {
            try {
                Resizer.imageFileResizer(
                    event.target.files[0],
                    300,
                    300,
                    "JPEG",
                    100,
                    0,
                    (uri) => {
                        // console.log(uri);
                        setState({ ...state, image: uri, success: '', error: '' });
                    },
                    "base64",
                    200,
                    200
                );
            } catch (err) {
                console.log(err);
            }
        }
    }

    const handleSubmit = async e => {
        e.preventDefault()

        setState({ ...state, buttonText: 'Creating' })

        // console.log({ name, content, image })

        // console.log(...formData)

        try {
            const response = await axios.post(
                `${API}/category`,
                { name, image, content },
                {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }
            )

            // console.log('category create response: ' + response)

            setState({
                ...state,
                name: '',
                buttonText: 'Created',
                success: `${response.data.name} is created successfully`
            })

            setImageUploadButtonName(
                'Upload image'
            )

            // setContent('')  how to clean the content?

        } catch (error) {

            // console.log('category create error: ' + error)

            setState({ ...state, buttonText: 'Create', error: error.response.data.error })

        }
    }

    const createCategoryForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={handleChange('name')} value={name} type="text" className="form-control" required />
            </div>
            <div className="form-group">
                <label className="text-muted">Content</label>
                {/* <textarea onChange={handleChange('content')} value={content} className="form-control" required /> */}
                <ReactQuill
                    value={content}
                    onChange={handleContent}
                    placeholder="Write something..."
                    theme='bubble'
                    className='pb-5 mb-3'
                    style={{ border: '1px solid #666' }}
                />
            </div>
            <div className="form-group">
                <label className="btn btn-outline-secondary">
                    {imageUploadButtonName}
                    <input
                        onChange={handleImage}
                        type="file"
                        accept="image/*"
                        className="form-control"
                        hidden
                    />
                </label>
            </div>
            <div>
                <button className="btn btn-outline-warning">{buttonText}</button>
            </div>
        </form>
    )

    return (
        <Layout>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1>
                        Create Category
                    </h1>
                    <br />
                    {success && showSuccessMessage(success)}
                    {error && showErrorMessage(error)}
                    {createCategoryForm()}
                </div>
            </div>
        </Layout>
    )
}

export default withAdmin(Create)