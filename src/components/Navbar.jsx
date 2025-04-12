import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    {/* Navbar */}
    <nav className="flex justify-between items-center p-4 backdrop-blur-md bg-white/10 border-b border-white/20 text-sm font-medium">
  {/* Logo */}
  <h1 className="text-2xl font-extrabold tracking-wide text-white drop-shadow-sm">FitTrack</h1>

  {/* Nav Right Controls */}
  <div className="flex items-center space-x-4">
    {/* Nav Buttons */}
    {/* Nav Buttons */}
<div className="hidden md:flex space-x-2">
  <Link
    to="/"
    className="px-4 py-2 rounded-md border border-white/20 text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-600 hover:text-white hover:scale-105"
  >
    Home
  </Link>
  <Link to="/about" className="text-sm px-4 py-2 rounded-md hover:bg-gradient-to-r from-purple-500 to-indigo-600 transition-all duration-300">
  About
</Link>
<Link to="/features" className="text-sm px-4 py-2 rounded-md hover:bg-gradient-to-r from-purple-500 to-indigo-600 transition-all duration-300">
  Features
</Link>
<Link to="/contact" className="text-sm px-4 py-2 rounded-md hover:bg-gradient-to-r from-purple-500 to-indigo-600 transition-all duration-300">
  Contact
</Link>
</div>


    {/* Notification Icon */}
    <button className="relative text-white/90 hover:text-purple-400 transition">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
      <span className="absolute top-0 right-0 block h-2 w-2 bg-red-500 rounded-full animate-ping" />
    </button>

    {/* User Avatar */}
    <div className="relative group">
      <img
        src="https://i.pravatar.cc/40"
        alt="User Avatar"
        className="w-8 h-8 rounded-full cursor-pointer border-2 border-white/20"
      />
      <div className="absolute right-0 mt-2 w-40 bg-white/10 backdrop-blur-md text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 shadow-lg">
        <Link to="/profile" className="block px-4 py-2 hover:bg-white/20 rounded-t-md">Profile</Link>
        <Link to="/settings" className="block px-4 py-2 hover:bg-white/20">Settings</Link>
        <Link to="/logout" className="block px-4 py-2 hover:bg-white/20 rounded-b-md">Logout</Link>
      </div>
    </div>

    {/* Login & Signup Buttons */}
    <Link
  to="/login"
  className="hidden md:inline-block px-4 py-2 rounded-md border border-white/20 text-white/90 transition-all duration-300 hover:bg-white/10 hover:scale-105"
>
  Login
</Link>
<Link
  to="/signup"
  className="hidden md:inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 rounded-md transition-all duration-300 text-white font-semibold shadow-sm hover:scale-105"
>
  Get Started
</Link>

  </div>
</nav>
    </>
  );
}
