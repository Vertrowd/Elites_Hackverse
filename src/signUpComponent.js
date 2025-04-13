import React, { useState } from "react";
import { signUp } from "./firebaseAuth"; // Adjust the path if needed

const SignUpComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    console.log('Submit button clicked'); // Debug log
    event.preventDefault(); // Prevent form submission from reloading the page
    alert('Form submitted!'); // Debugging alert
    setError(null);
    setLoading(true);
  
    // Validate form fields
    if (!email || !password || !displayName) {
      console.log('Validation failed: Missing fields'); // Debug log
      setError('Please fill in all fields.');
      setLoading(false);
      return;
    }
  
    try {
      console.log('Calling signUp function with:', { email, password, displayName });
      const user = await signUp(email, password, displayName);
      console.log('Signup successful!', user);
      alert('Signup successful!');
    } catch (error) {
      console.error('Signup error:', error);
      alert('Signup failed! Please try again.');
      setError(error.message || 'An error occurred during signup.');
    } finally {
      console.log('Signup process completed'); // Debug log
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

      {/* Email Field */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter your email"
        />
      </div>

      {/* Password Field */}
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 font-medium mb-2"
        >
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter your password"
        />
      </div>

      {/* Display Name Field */}
      <div className="mb-4">
        <label
          htmlFor="displayName"
          className="block text-gray-700 font-medium mb-2"
        >
          Display Name:
        </label>
        <input
          type="text"
          id="displayName"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter your display name"
        />
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 rounded-lg text-white font-semibold ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
        }`}
      >
        {loading ? "Signing Up..." : "Sign Up"}
      </button>
    </form>
  );
};

export default SignUpComponent;
