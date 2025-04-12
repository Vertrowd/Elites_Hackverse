// src/components/ui/Button.jsx

import React from "react";

export function Button({ children, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 shadow-md ${className}`}
    >
      {children}
    </button>
  );
}
