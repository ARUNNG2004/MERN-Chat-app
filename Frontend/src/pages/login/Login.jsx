import React from 'react'

const Login = () => {
  return (
    <div className=' flex  flex-col items-center justify-center min-w-96  mx-auto     '>


      <div className='w-full p-6 rounded-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className=' text-3xl font-semibold text-center text-gray-300  '

        >    Login
        <span className=' text-blue-500  '> Chat App</span> </h1>

        <form >
        <div>
            <label  className=' label p-2 '>
                <span className='  text-base label-text  ' >Username</span>
            </label>
            <input type="text" placeholder="Enter username" class="w-full input input-bordered h-10" />

        </div>
        <div>
            <label  className=' label p-2 '>
                <span className=' text-base label-text ' >Password</span>
            </label>
            <input type="text" placeholder="Enter Password" class="w-full input input-bordered h-10" />

        </div>

         <div>
            <button className='w-full mt-4 px-4 py-2 text-white font-medium rounded-md text-sm bg-blue-500 hover:bg-blue-700' >
                Login
            </button>
         </div>

         <a  href=' #' className=" mt-3 text-sm hover:text-blue-500  inline-block hover:underline ">
            {"Don't"} have an account?
        </a>
      </form>
      </div>


    </div>
  )
}

export default Login
