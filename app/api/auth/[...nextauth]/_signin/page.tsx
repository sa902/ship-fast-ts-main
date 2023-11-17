"use client"
import React from 'react';

const SignIn = () => {
    const signIn = (e: React.FormEvent) => {
        e.preventDefault()

const { data, error } = await supabase.auth.signInWithPassword({
    email: 'example@email.com',
    password: 'example-password',
  })
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sign In</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
            />
          </div>
          <div className="mb-4">
            <button
            onClick={signIn}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
