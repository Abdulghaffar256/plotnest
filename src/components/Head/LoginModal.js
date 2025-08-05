"use client";

import { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";
import Image from "next/image";

export default function LoginModal({ onClose }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gray-50 p-8 text-center space-y-6">
          <Image
            src="/images/real-estate-illustration.png"
            alt="Illustration"
            width={200}
            height={200}
          />
          <h2 className="text-lg font-semibold text-gray-800">
  Your Trusted Partner in Real Estate Success
</h2>
<p className="text-sm text-gray-600 mt-1">
  Explore verified listings, connect with reliable agents, and unlock investment opportunities — all in one place on PlotNest.com
</p>

        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-6 relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
            <X />
          </button>

          <h2 className="text-xl font-semibold text-gray-800 mb-6">Login</h2>

          {/* Social Logins */}
          <div className="flex gap-4 mb-6">
            <button className="w-full flex items-center justify-center gap-2 border border-gray-950 py-2 rounded hover:bg-blue-950">
              <Image src="/icons/facebook.png" alt="Facebook" width={20} height={20} />
              Facebook
            </button>
           <button className="w-full flex items-center justify-center gap-2 border border-gray-950 py-2 rounded text-white transition-all duration-500 hover:bg-gradient-to-r hover:from-red-500 hover:via-blue-500 hover:to-yellow-500">
              <Image src="/icons/google.png" alt="Google" width={20} height={20} />
              Google
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center mb-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-sm text-gray-400">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Email Field */}
          <label className="block mb-1 text-sm text-black">Email Address</label>
          <input
            type="email"
            placeholder="abc@example.com"
            className="w-full mb-6 border-b border-gray-300 focus:border-zameen-green focus:outline-none placeholder-gray-400 text-black bg-transparent py-2"
          />

          {/* Password Field with Toggle */}
          <label className="block mb-1 text-sm text-black">Password</label>
          <div className="relative mb-2">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full border-b border-gray-300 focus:border-zameen-green focus:outline-none placeholder-gray-400 text-black bg-transparent py-2 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-2 text-gray-500"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between mb-4 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" />
              <span className="text-black">Remember me</span>
            </label>
            <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
          </div>

<button className="w-full bg-zameen-green text-black py-2 rounded hover:bg-[#008f46] transition-colors duration-300">
  Login
</button>


          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account?{" "}
            <a href="#" className="text-zameen-green hover:underline">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
