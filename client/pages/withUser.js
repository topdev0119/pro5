import axios from "axios"

import { API } from "../config"

import { getCookie } from "../helpers/auth"

const withUser = Page => {
    const WithAuthUser = props => <Page {...props} />
    WithAuthUser.getInitialProps = async context => {
        const cookie = getCookie("token", context.req)
        let user = null
        if (cookie) {
            try {
                const response = await axios.get(`${API}/user`, {
                    headers: {
                        Authorization: "Bearer " + cookie,
                        ContentType: "application/json"
                    }
                })
                user = response.data
            } catch (error) {
                if (error.response.status === 401) {
                    // console.log("error", error.response.data)
                    user = null
                }
            }
        }
        if (user === null) {
            // redirect
            context.res.writeHead(302, {
                Location: "/"
            })
            context.res.end()

        } else {
            return {
                ...(Page.getInitialProps ? await Page.getInitialProps(context) : {}),
                user,
                token: cookie
            }
        }
        return { user }
    }
    return WithAuthUser
}

export default withUser