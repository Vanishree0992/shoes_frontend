import React, { useState, useContext } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function LoginRegister() {
  const [activeTab, setActiveTab] = useState("login"); // "login" or "register"
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // ✅ use AuthContext

  // Handle login form submit
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post("/auth/token/", {
        username: loginData.username,
        password: loginData.password,
      });

      // ✅ update AuthContext instead of only localStorage
      login(res.data.access);

      // Optional: store refresh token
      localStorage.setItem("refresh_token", res.data.refresh);

      setSuccess("Login successful!");
      navigate("/"); // redirect to home
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  // Handle register form submit
  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (registerData.password !== registerData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await axios.post("/auth/register/", {
        username: registerData.username,
        email: registerData.email,
        password: registerData.password,
        password2: registerData.confirmPassword,
      });
      setSuccess("Registration successful! You can now login.");
      setActiveTab("login");
    } catch (err) {
      setError("Registration failed. Please check details and try again.");
    }
  };

  return (
    <div className="max-w-md p-8 mx-auto mt-12 mb-12 border-2 border-black rounded-xl shadow-lg overflow-hidden">
      {/* Tabs */}
      <div className="flex">
        <button
          onClick={() => {
            setActiveTab("login");
            setError("");
            setSuccess("");
          }}
          className={`flex-1 py-3 font-semibold ${activeTab === "login"
            ? "bg-[#2f4f4f] text-white"
            : "bg-gray-200 text-black"
            }`}
        >
          Log in
        </button>
        <button
          onClick={() => {
            setActiveTab("register");
            setError("");
            setSuccess("");
          }}
          className={`flex-1 py-3 font-semibold ${activeTab === "register"
            ? "bg-[#2f4f4f] text-white"
            : "bg-gray-200 text-black"
            }`}
        >
          Register
        </button>
      </div>

      <div className="p-6">
        {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}
        {success && <p className="text-green-500 mb-3 text-sm">{success}</p>}

        {activeTab === "login" ? (
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Username */}
            <div>
              <label className="block text-sm font-medium mb-1">Email id</label>
              <input
                type="text"
                placeholder="Enter your email"
                value={loginData.username}
                onChange={(e) =>
                  setLoginData({ ...loginData, username: e.target.value })
                }
                className="w-full p-2 border rounded text-sm"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter password"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                  className="w-full p-2 border rounded text-sm pr-10"
                  required
                />
                <span className="absolute right-3 top-2 text-gray-500 cursor-pointer">
                  👁️
                </span>
              </div>
              <p className="text-xs text-red-600 mt-1 text-right cursor-pointer">
                Forget Password?
              </p>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="bg-[#2f4f4f] text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 mx-auto block"
            >
              Log In
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegister} className="space-y-5">
            {/* Username */}
            <div>
              <label className="block text-sm font-bold mb-1">Username</label>
              <input
                type="text"
                placeholder="Enter username"
                value={registerData.username}
                onChange={(e) =>
                  setRegisterData({ ...registerData, username: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-bold mb-1">Email id</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={registerData.email}
                onChange={(e) =>
                  setRegisterData({ ...registerData, email: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-bold mb-1">Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter password"
                  value={registerData.password}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, password: e.target.value })
                  }
                  className="w-full p-2 border rounded pr-10"
                  required
                />
                <span className="absolute right-3 top-2 text-gray-500 cursor-pointer">
                  👁️
                </span>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-bold mb-1">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
                value={registerData.confirmPassword}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    confirmPassword: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start">
              <input
                type="checkbox"
                className="mt-1 mr-2"
                required
              />
              <p className="text-sm">
                I have read and agreed to the{" "}
                <span className="text-blue-600 cursor-pointer">
                  Terms and Conditions
                </span>{" "}
                and{" "}
                <span className="text-blue-600 cursor-pointer">
                  Privacy Policy
                </span>
              </p>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-32 mx-auto block bg-[#2f4f4f] text-white py-2 rounded-lg font-semibold hover:bg-gray-800"
            >
              Register
            </button>
          </form>
        )}

        {/* Divider */}
        {activeTab === "login" && (
          <>
            <div className="flex items-center my-5">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="px-2 text-sm text-gray-600">Or</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Google login */}
            <button className="w-full flex items-center justify-center border py-2 rounded text-sm">
              Continue with Google <span className="ml-2 text-lg">🌐</span>
            </button>

            {/* Footer */}
            <p className="mt-4 text-center text-sm">
              Don’t have an account?{" "}
              <span
                className="text-red-600 font-medium cursor-pointer"
                onClick={() => setActiveTab("register")}
              >
                Register
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
