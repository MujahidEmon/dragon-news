import { Link } from "react-router-dom";
import UserLogo from '../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext)
  const handleSignOut = () =>{
      logOut()
      .then(() => {
        console.log('Logged Out');
      })
      .catch(error => {
        console.error(error);
        
      })
  }


    const NavLinks = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/About'}>About</Link></li>
        <li><Link to={'/Career'}>Career</Link></li>
    </>
  return (
    <div className="navbar mt-6 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {NavLinks}
          </ul>
        </div>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {NavLinks}
        </ul>
      </div>
      <div className="navbar-end">
        { user && <p className="font-semibold mr-3">{user.email}</p>}
        <img src={UserLogo} alt="userLogo" />
        <a className="btn btn-neutral ml-3">{
          user ? <button onClick={handleSignOut}>Sign Out</button> : <Link to={'/Login'}>Login</Link>
          }</a>
      </div>
    </div>
  );
};

export default Navbar;
