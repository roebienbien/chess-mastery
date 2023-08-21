import React from 'react';

function LoginForm() {
  return (
    <form className='mt-12' action='' method='POST'>
      <div className='relative'>
        <input id='email' name='email' type='text' placeholder='john@doe.com' className='form__input peer' />
        <label
          htmlFor='email'
          className='form__label peer-focus:text-gray-600; peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm'>
          Email address
        </label>
      </div>
      <div className='relative mt-10'>
        <input id='password' type='password' name='password' placeholder='Password' className='form__input peer ' />
        <label
          htmlFor='password'
          className='form__label peer-focus:text-gray-600;  peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm'>
          Password
        </label>
      </div>
      <button
        // type='submit'
        className='primary-theme primary-hover mt-10 block w-full cursor-pointer rounded px-4 py-2 text-center font-semibold text-white focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-80 focus:ring-offset-2'>
        Sign in
      </button>
    </form>
  );
}

export default LoginForm;
