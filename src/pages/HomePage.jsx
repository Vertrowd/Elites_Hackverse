// HomePage.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "../assets/login-illustration.svg"; // replace with your actual image
import trackerImg from "../assets/cycling.svg"; // example svg/image
import goalsImg from "../assets/girl.svg"; // example svg/image

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function HomePage() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#1e3a8a] to-[#6d28d9] text-white flex flex-col"
      initial="initial"
      animate="animate"
    >
      


      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-16 max-w-6xl mx-auto gap-10">
        <motion.div {...fadeInUp} className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Track Your Fitness Journey 💪</h2>
          <p className="text-white/80 text-lg mb-6">Stay motivated, monitor your progress, and crush your goals with FitTrack – your personal fitness companion.</p>
          <Link to="/signup" className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 px-6 py-3 rounded-md text-lg font-medium transition">
            Start Tracking
          </Link>

          {/* <Link to="/dashboard" className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 px-6 py-3 rounded-md text-lg font-medium transition">
    Start Tracking
        </Link> */}

        </motion.div>
        <motion.img {...fadeInUp} src={heroImg} alt="Fitness Illustration" className="w-full md:w-1/2" />
      </section>

      {/* Section 1: Progress Tracker */}
      <section className="py-20 px-6 bg-white/10 backdrop-blur-md border-y border-white/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.img {...fadeInUp} src={trackerImg} alt="Progress Tracker" className="w-full md:w-1/2" />
          <motion.div {...fadeInUp} className="md:w-1/2">
            <h3 className="text-3xl font-bold mb-4">Real-Time Progress Tracking</h3>
            <p className="text-white/80 text-lg">Get daily and weekly reports with charts, streaks, and personalized goals. Your performance, visualized beautifully.</p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Goal Setting */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          <motion.img {...fadeInUp} src={goalsImg} alt="Set Goals" className="w-full md:w-1/2" />
          <motion.div {...fadeInUp} className="md:w-1/2">
            <h3 className="text-3xl font-bold mb-4">Set Your Own Fitness Goals</h3>
            <p className="text-white/80 text-lg">Customize your fitness plan according to your lifestyle. Set daily steps, water intake, workout goals, and more.</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-white/60 py-8 border-t border-white/10">
        © 2025 FitTrack. All rights reserved.
      </footer>
    </motion.div>
  );
}
