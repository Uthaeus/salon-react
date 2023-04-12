import FullForm from "./auth-forms/full-form";


function SignUp() {

    return (
        <div className="login-container">
            <h1>Sign Up</h1>
            <div className="short-form-wrapper">
                <FullForm />
            </div>
        </div>
    );
}

export default SignUp;