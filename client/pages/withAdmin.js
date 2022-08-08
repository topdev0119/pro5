import axios from "axios"

import { API } from "../config"

import { getCookie } from "../helpers/auth"

const withAdmin = Page => {
    const withAdminUser = props => <Page {...props} />
    withAdminUser.getInitialProps = async context => {
        const cookie = getCookie("token", context.req)
        let user = null
        if (cookie) {
            try {
                const response = await axios.get(`${API}/admin`, {
                    headers: {
                        Authorization: "Bearer " + cookie,
                        ContentType: "application/json"
                    }
                })
                user = response.data
            } catch (error) {
                // console.log("error", error.response.data)
                if (error.response.status === 401) {
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
    return withAdminUser
}

export default withAdmin