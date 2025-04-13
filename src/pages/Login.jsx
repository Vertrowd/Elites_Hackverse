import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../../firebaseSetup'; // Correct import of initialized Firebase app

import loginImg from '../assets/login-illustration.svg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const auth = getAuth(app);  // Correctly passing the initialized Firebase app
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Logged in!', user);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e3a8a] to-[#6d28d9] flex items-center justify-center px-4 py-12">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden max-w-5xl w-full">

        {/* Left Image Section */}
        <div className="md:w-1/2 p-10 hidden md:flex items-center justify-center bg-white/5">
          <img src={loginImg} alt="Login Illustration" className="w-4/5 max-w-md" />
        </div>

        {/* Right Form Section */}
        <motion.div
          className="w-full md:w-1/2 p-10 text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-extrabold mb-6 text-center">Login to FitTrack</h2>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-violet-300"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-violet-300"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 transition text-white font-semibold"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-white/80">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-violet-300 hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}