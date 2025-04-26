import React from "react";

const LoginPage: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Log in
        </h2>

        {/* Email Input */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full rounded-md bg-blue-500 py-3 text-white font-semibold hover:bg-blue-600 transition"
        >
          Log in
        </button>

        {/* Divider */}
        <div className="mt-6 text-center text-sm text-gray-500">
          or,{" "}
          <a href="#" className="font-medium text-blue-500 hover:underline">
            sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
