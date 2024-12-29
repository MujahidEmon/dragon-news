import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

    const {createUser} =  useContext(AuthContext)
    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        createUser(email, password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
            
        })
    }
  return (
    <div className="max-w-3xl mt-12 mx-auto bg-[#f2f2f2] p-8 rounded-xl">
      <h1 className="font-semibold text-3xl text-center">
        Register Your Account
      </h1>
      <div className="divider mt-8"></div>
      <form onSubmit={handleRegister} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="font-semibold text-xl">Your Name</span>
          </label>
          <input type="text" name="displayName" placeholder="Enter Your Name" className="input " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="font-semibold text-xl">Photo URL</span>
          </label>
          <input type="text" name="photoUrl" placeholder="Give Your Photo URL" className="input " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="font-semibold text-xl">Email Address</span>
          </label>
          <input type="email" name="email" placeholder="Enter Your Email" className="input " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="font-semibold text-xl">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            className="input "
            required
          />
        </div>
        <div className="flex items-center">
            <input type="checkbox" name="termCheckbox" id="" />
          <label className="label">
            <span className="text-sm">Accept Terms & Conditions</span>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn text-white bg-[#403F3F] hover:bg-black ">
            Login
          </button>
        </div>
        <p className="text-center">
          Already have an account?{" "}
          <a className="text-primary">
            <Link to={"/Login"}>Register</Link>
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
