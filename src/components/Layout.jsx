import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"; // Create a Navbar component

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#1e3a8a] to-[#6d28d9] text-white">
      <Navbar />
      <main className="flex-1">
        <Outlet /> {/* This will render the current route's content */}
      </main>
    </div>
  );
}