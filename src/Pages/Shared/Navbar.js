import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  // if (loading) {
  //   return <Loading></Loading>;
  // }
  const navItems = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/blogs'>Blogs</Link>
      </li>
      <li>
        <Link to='/singlegoods'>Product</Link>
      </li>
      <li>
        <Link to='/reviewsS'>Reviews</Link>
      </li>
      <li>
        <Link to='/myprotfolio'>Portfolio</Link>
      </li>
      {user && (
        <li>
          <Link to='/dashboard'>DashBoard</Link>
        </li>
      )}
      <li>
        {user ? (
          <button className='btn active:btn-primary' onClick={logout}>
            Log Out
          </button>
        ) : (
          <Link to='/login'>Login</Link>
        )}
      </li>
    </>
  );
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex='0' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex='0'
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            {navItems}
          </ul>
        </div>
        <Link
          to='/'
          className='btn btn-outline hover:btn-primary normal-case text-xl'
        >
          Bicycle GearWorld
        </Link>
      </div>
      <div className='navbar-end w-full hidden lg:flex'>
        <ul className='menu menu-horizontal p-0'>{navItems}</ul>
      </div>
      <div className='navbar-end'>
        {user && (
          <label
            htmlFor='dashboard-sidebar'
            className='btn btn-ghost lg:hidden'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
        )}
      </div>
    </div>
  );
};

export default Navbar;
