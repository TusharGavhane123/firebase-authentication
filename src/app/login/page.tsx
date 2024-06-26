import InputField from '@/components/InputField'
import React from 'react'

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-yellow-400/20 via-blue-300 to-purple-400/60">\
      <div className="w-1/2 rounded-md bg-white/30 shadow-lg flex justify-between flex-col">
        <div className="h-28 w-full justify-center flex items-center">
          <span className="text-3xl text-black font-mono font-semibold bg-yellow-300 p-3 rounded-lg">Welcome To SignIn</span>
        </div>
          <form>
            <InputField
            label='Email'
            name='email'
            placeholder='Please enter your mail'
            type='text'
            />

          <InputField
            label='Password'
            name='password'
            placeholder='Please enter your password'
            type='password'
          />
          </form>
        <div className="h-20 mx-auto">
          <span className="text-sm text-gray-600">
            Dont have an account?
            {/* <Link href={REGISTER_ROUTE}><span className="text-blue-500 font-semibold text-md" > Register Here</span></Link> */}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login