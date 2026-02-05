import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import roleImg from "../assets/login-f.jpg";
import bg from "../assets/bg-role.png";

export default function FounderLogin() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e?.preventDefault?.();
    console.log("founder login", loginData);
  };

  const handleSignup = (e) => {
    e?.preventDefault?.();
    console.log("founder signup", signupData);
    navigate("/onboarding/founder");
  };

  const handleLoginAndRedirect = (e) => {
    e?.preventDefault?.();
    console.log("founder login and redirect", loginData);
    navigate("/dashboard/founder");
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl grid md:grid-cols-2 overflow-hidden">
        {/* Left Column - Form */}
        <div className="p-8 flex flex-col justify-center">
        {/* Toggle Buttons */}
        <div className="flex mb-6 bg-gray-100 rounded-full p-1">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 rounded-full text-sm font-medium transition ${
              isLogin ? "bg-indigo-600 text-white" : "text-gray-600"
            }`}
          >
            Log In
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 rounded-full text-sm font-medium transition ${
              !isLogin ? "bg-indigo-600 text-white" : "text-gray-600"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          {isLogin ? "Welcome Back!" : "Create Account"}
        </h1>
        <p className="text-gray-600 mb-6 text-sm">
          {isLogin ? "Log in to your account" : "Sign up to get started"}
        </p>

        {/* Email Input */}
        <div className="mb-5">
          <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
            Email
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent">
            <svg className="w-5 h-5 text-indigo-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <input
              type="email"
              placeholder="your@email.com"
              value={isLogin ? loginData.email : signupData.email}
              onChange={(e) =>
                isLogin
                  ? setLoginData({ ...loginData, email: e.target.value })
                  : setSignupData({ ...signupData, email: e.target.value })
              }
              className="flex-1 bg-transparent outline-none text-black placeholder-gray-400 text-sm"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-5">
          <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
            Password
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent">
            <svg className="w-5 h-5 text-indigo-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
            </svg>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={isLogin ? loginData.password : signupData.password}
              onChange={(e) =>
                isLogin
                  ? setLoginData({ ...loginData, password: e.target.value })
                  : setSignupData({ ...signupData, password: e.target.value })
              }
              className="flex-1 bg-transparent outline-none text-black placeholder-gray-400 text-sm"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-indigo-600 hover:text-indigo-700 ml-2 flex-shrink-0"
            >
              {showPassword ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd"></path>
                  <path d="M15.171 13.576l1.414 1.414A2 2 0 0016.414 13.17l-1.243-1.243zM12.191 10.85a1 1 0 102.45 2.45c0-.179-.014-.357-.042-.53l-2.408-2.408c-.173.028-.35.042-.53.042z"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password Input (Signup only) */}
        {!isLogin && (
          <div className="mb-5">
            <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
              Confirm Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent">
              <svg className="w-5 h-5 text-indigo-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
              </svg>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                value={signupData.confirmPassword}
                onChange={(e) =>
                  setSignupData({ ...signupData, confirmPassword: e.target.value })
                }
                className="flex-1 bg-transparent outline-none text-black placeholder-gray-400 text-sm"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="text-indigo-600 hover:text-indigo-700 ml-2 flex-shrink-0"
              >
                {showConfirmPassword ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd"></path>
                    <path d="M15.171 13.576l1.414 1.414A2 2 0 0016.414 13.17l-1.243-1.243zM12.191 10.85a1 1 0 102.45 2.45c0-.179-.014-.357-.042-.53l-2.408-2.408c-.173.028-.35.042-.53.042z"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Forgot Password Link */}
        {isLogin && (
          <div className="mb-4 text-right">
            <a href="#" className="text-xs text-indigo-600 hover:text-indigo-700 font-medium">
              Forgot password?
            </a>
          </div>
        )}

        {/* Login/Signup Button */}
        <button
          onClick={isLogin ? handleLoginAndRedirect : handleSignup}
          className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition mb-4 text-sm"
        >
          {isLogin ? "Log In" : "Sign Up"}
        </button>

        {/* Divider */}
        <div className="flex items-center mb-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-3 text-gray-500 text-xs">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Google Button */}
        <button className="w-full py-3 rounded-lg border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium transition mb-4 flex items-center justify-center text-sm">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"></path>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path>
          </svg>
          Continue with Google
        </button>

        {/* Toggle Text */}
        <p className="text-center text-gray-600 text-xs">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-indigo-600 hover:text-indigo-700 font-semibold"
          >
            {isLogin ? "Sign Up" : "Log In"}
          </button>
        </p>
        </div>

        {/* Right Column - Image */}
        <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 overflow-hidden">
          <img src={roleImg} alt="Founder" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
