import Layout from '../../components/Layout'

import axios from 'axios'

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
const User = ({ todos }) => <Layout>{ JSON.stringify(todos) }</Layout>

User.getInitialProps = async ({ req }) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
    // console.log('SERVER RENDERING', response.data)
    return {
        todos: response.data
    }
}
    

export default User