import Layout from '../../components/Layout'

import withUser from '../withUser'

// import axios from 'axios'

// import { API } from '../../config'

// import { getCookie } from '../../helpers/auth'

// import { useEffect, useState } from 'react'

// // react rendering
// const User = () => {
//     const [ todos, setTodos ] = useState([])
//     useEffect(() => {
//         axios.get(`https://jsonplaceholder.typicode.com/todos`)
//             .then(response => setTodos(response.data))
//     }, [])

//     return <Layout>{JSON.stringify(todos)}</Layout>
// }

// server rendering
// User.getInitialProps = async ({ req }) => {
//     const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
//     // console.log('SERVER RENDERING', response.data)
//     return {
//         todos: response.data
//     }
// }

const User = ({ user, token }) => <Layout>{
    "to be continued... now you can see the user info: " + JSON.stringify(user)
}</Layout>

// User.getInitialProps = async context => {

//     const cookie = getCookie('token', context.req)

//     try {
//         const response = await axios.get(`${API}/user`, {
//             headers: {
//                 Authorization: 'Bearer ' + cookie,
//                 ContentType: 'application/json'
//             }
//         })
//         return { user: response.data }
//     } catch (error) {
//         if (error.response.status === 401) {
//             return { user: 'no user' }
//         }
//     }
// }
    

export default withUser(User)