import React, { useState } from 'react';
import { signUp } from './firebaseAuth'; // Adjust the path if needed

const SignUpComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Clear previous errors
    setLoading(true); // Set loading to true at the start

    if (!email || !password || !displayName) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      const user = await signUp(email, password, displayName);
      console.log('Signup successful!', user);
      // Handle successful signup (e.g., redirect, show success message)
      alert('Signup successful!'); //Basic alert.  Replace with better UI.
      // Example of redirecting using react router dom
      // if (user){
      //   navigate('/dashboard')
      // }

    } catch (error) {
      setError(error.message);
      console.error('Signup error:', error);
    } finally {
      setLoading(false); // Set loading to false whether success or error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="displayName">Display Name:</label>
        <input
          type="text"
          id="displayName"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" disabled={loading}>
        {loading ? 'Signing Up...' : 'Sign Up'}
      </button>
    </form>
  );
};

export default SignUpComponent;
