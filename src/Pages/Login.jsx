import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";



const Login = () => {
    const location = useLocation()
    const navigate = useNavigate();
    const {user, signIn} = useContext(AuthContext)
    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')

        signIn(email, password)
        .then(result => {
            console.log(result.user);
            navigate(location?.state ? location.state : '/')
        })
        .catch(error => console.error(error)
        )
        
    }

    return (
            <div className="max-w-3xl mt-12 mx-auto bg-[#f2f2f2] p-8 rounded-xl">
                <h1 className="font-semibold text-3xl text-center">Login To Your Account</h1>
                <div className="divider mt-8"></div>
                <form onSubmit={handleLogin} className=" card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="font-semibold text-xl">Email Address</span>
                    </label>
                    <input type="email" placeholder="Enter Your Email" className="input " name="email" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="font-semibold text-xl">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Enter Password" className="input " required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn text-white bg-[#403F3F] hover:bg-black "  >Login</button>
                    </div>
                    <p className="text-center">Don't have any account? <a className="text-primary"><Link to={'/Register'}>Register</Link></a></p>
                </form>
            </div>

    );
};

export default Login;