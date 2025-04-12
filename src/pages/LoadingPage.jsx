import React from "react";
import { motion } from "framer-motion";
import loadingImg from "../assets/loading-running-man.svg"; // Path to your SVG

const LoadingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e3a8a] to-[#6d28d9] flex items-center justify-center px-4 py-12">
      <motion.div
        className="flex flex-col items-center justify-center space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Add the motion animation to the SVG */}
        <motion.img
          src={loadingImg}
          alt="Running Man"
          className="w-32 h-32"
          initial={{ x: "-100vw", rotate: 0 }}
          animate={{
            x: 0, // Moves the SVG to its final position
            // rotate: [0, 360, 720, 1080, 1440], // 5 full rotations (5 times a second)
          }}
          transition={{
            duration: 1, // The entire animation lasts for 1 second
            ease: "easeInOut",
          }}
        />
        <p className="text-white text-xl font-semibold">Loading... Please wait</p>
      </motion.div>
    </div>
  );
};

export default LoadingPage;
