import Layout from '../../components/Layout'

import withAdmin from '../withAdmin'

const Admin= ({ admin, token }) => <Layout>{
    "to be continued... now you can see the admin info: " + JSON.stringify(admin)
}</Layout>



export default withAdmin(Admin)
