import ShortForm from "./auth-forms/short-form";


function Login() {

    return (
        <div className="login-container">
            <h1>Log In</h1>
            <div className="short-form-wrapper">
                <ShortForm />
            </div>
        </div>
    );
}

export default Login;