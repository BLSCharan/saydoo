import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InfluencerLogin() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  const handleSignup = () => {
    navigate("/onboarding/influencer");
  };

  return (
    <section className="h-[calc(100vh-80px)] flex items-center justify-center px-4 text-white">
      <div className="w-full max-w-md">

        {/* TOGGLE LOGIN / SIGNUP */}
        <div className="flex mb-6 bg-white/5 rounded-full p-1">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 rounded-full text-sm transition ${
              isLogin ? "bg-green-400 text-black" : "text-gray-300"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 rounded-full text-sm transition ${
              !isLogin ? "bg-green-400 text-black" : "text-gray-300"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* CARD */}
        <div className="bg-white/5 backdrop-blur-xl border border-green-400/30 rounded-2xl p-6 shadow-[0_0_60px_rgba(34,197,94,0.25)] text-center">

          <h1 className="text-2xl font-bold mb-2">
            {isLogin ? "Welcome Back" : "Create Your Account"}
          </h1>

          <p className="text-gray-400 text-sm mb-6">
            {isLogin
              ? "Login to access your dashboard"
              : "Sign up to create your AI clone"}
          </p>

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 px-4 py-3 bg-black/40 border border-white/10 rounded-lg outline-none"
          />

          {/* PASSWORD */}
          <div className="relative mb-3">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg outline-none pr-10"
            />

            {/* 👁 Eye Icon */}
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-white"
            >
              {showPassword ? "🙈" : "👁"}
            </span>
          </div>

          {/* CONFIRM PASSWORD (Signup Only) */}
          {!isLogin && (
            <div className="relative mb-4">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg outline-none pr-10"
              />

              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-white"
              >
                {showConfirmPassword ? "🙈" : "👁"}
              </span>
            </div>
          )}

          {/* LOGIN / SIGNUP BUTTON */}
          <button
            onClick={isLogin ? handleLogin : handleSignup}
            className="w-full py-3 rounded-full bg-gradient-to-r from-green-500 to-lime-400 text-black font-medium hover:shadow-[0_0_30px_#9FE870] transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>

          {/* DIVIDER */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-gray-400 text-xs">OR</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* GOOGLE LOGIN */}
          <button
            onClick={() => (window.location.href = "http://localhost:5000/auth/google")}
            className="w-full py-3 rounded-full border border-white/20 hover:bg-white/10 transition"
          >
            Continue with Google
          </button>

        </div>
      </div>
    </section>
  );
}
