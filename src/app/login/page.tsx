import React from 'react'
import Sameheader from '../components/maincomponent/sameheader'
import LastImage from '../components/maincomponent/lastimage';


function Login() {
  return (
    
<div className='w-full'>
<Sameheader start='My Account' middle='Home . Pages . ' last='My Account'/>

<div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h2 className="text-3xl font-bold text-center mb-4 font-josefin">Login</h2>
        <p className="text-sm text-center text-textcolor3 mb-6">
          Please login using account detail below.
        </p>
        <form>
          <div className="mb-4">
        
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border text-textcolor3 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-4">
          
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-2 border text-textcolor3 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-start mb-4">
            <a href="#" className="text-sm text-textcolor3  hover:underline">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-pink1 text-white font-bold rounded hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-sm text-textcolor3 mt-4">
          Don’t have an Account?{' '}
          <a href="#" className="text-textcolor3 hover:underline">
            Create account
          </a>
        </p>
      </div>
    </div>
    <LastImage/>
</div>

  );
}

export default Login;
