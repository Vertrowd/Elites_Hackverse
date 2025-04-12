// src/components/ui/Card.jsx

import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl bg-white shadow-lg p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return (
    <div className={`text-gray-700 text-sm mt-2 ${className}`}>
      {children}
    </div>
  );
}
