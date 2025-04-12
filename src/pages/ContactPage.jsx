import { motion } from "framer-motion";
import contactImg from "../assets/contact-illustration.svg"; // Add your SVG or image

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e3a8a] to-[#6d28d9] flex items-center justify-center px-4 py-12">
      <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden max-w-5xl w-full">
        <div className="md:w-1/2 p-10 hidden md:flex items-center justify-center bg-white/10">
          <img src={contactImg} alt="Contact Illustration" className="w-4/5 max-w-md" />
        </div>
        <motion.div
          className="w-full md:w-1/2 p-10 text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-extrabold mb-6 text-center">Contact Us</h2>
          <p className="text-white/90 text-lg">
            We'd love to hear from you! Whether you have questions, feedback, or just want to share your fitness journey with us, feel free to reach out.
            <br />
            <br />
            Email: support@fittrack.com
            <br />
            Phone: +1 (555) 123-4567
          </p>
        </motion.div>
      </div>
    </div>
  );
}
