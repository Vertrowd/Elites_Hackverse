import { motion } from "framer-motion";
import featuresImg from "../assets/features-illustration.svg"; // Add your SVG or image

export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e3a8a] to-[#6d28d9] flex items-center justify-center px-4 py-12">
      <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden max-w-5xl w-full">
        <div className="md:w-1/2 p-10 hidden md:flex items-center justify-center bg-white/10">
          <img src={featuresImg} alt="Features Illustration" className="w-4/5 max-w-md" />
        </div>
        <motion.div
          className="w-full md:w-1/2 p-10 text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-extrabold mb-6 text-center">Features of FitTrack</h2>
          <p className="text-white/90 text-lg">
            FitTrack offers a comprehensive range of features to track and enhance your fitness journey:
            <ul className="list-disc pl-6 mt-4">
            <li>🚀 Real-time fitness and health progress tracking</li>
        <li>📊 Interactive charts and weekly reports</li>
        <li>🎯 Goal-based system tailored to your lifestyle</li>
        <li>🔔 Smart reminders for hydration, exercise, and breaks</li>
        <li>🔒 Secure user login and cloud sync with Firebase</li>
            </ul>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
