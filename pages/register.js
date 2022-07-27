import Layout from '../components/Layout';

const Register = () => {
    const registerForm = () => <form>form</form>;
    
    return <Layout>
        <div className="col-md-6 offset-md-3">
            <h1>Register</h1>
            <br />
            {registerForm()}
        </div>
    </Layout>;
};

export default Register;