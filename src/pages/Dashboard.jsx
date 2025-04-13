import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ water: "", calories: "", exercise: "" });
  const [dayCount, setDayCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [error, setError] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const water = parseFloat(formData.water);
    const calories = parseInt(formData.calories);
    const exercise = parseInt(formData.exercise);

    if (water < 0 || calories < 0 || exercise < 0) {
      setError("Values cannot be negative.");
      return;
    }

    if (calories < 1000) {
      setError("Calories intake cannot be less than 1000.");
      return;
    }

    setError("");
    const today = `Day ${dayCount + 1}`;
    const newData = {
      date: today,
      water,
      calories,
      exercise
    };

    const updatedData = [...data, newData];
    setData(updatedData);
    setDayCount(dayCount + 1);
    setFormData({ water: "", calories: "", exercise: "" });

    if (updatedData.length === 7) {
      // Give feedback
      const avgWater = updatedData.reduce((acc, d) => acc + d.water, 0) / 7;
      const avgCalories = updatedData.reduce((acc, d) => acc + d.calories, 0) / 7;
      const avgExercise = updatedData.reduce((acc, d) => acc + d.exercise, 0) / 7;

      let msg = "Here's your 7-day health summary: ";
      msg += avgWater < 2 ? "💧 Try drinking more water. " : "💧 Great water intake! ";
      msg += avgCalories > 3000 ? "🔥 Try reducing calorie intake. " : "🔥 Calories look good! ";
      msg += avgExercise < 30 ? "🏃 Increase your activity level." : "🏃 Well done staying active!";
      setFeedback(msg);
    }
  };

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen p-6 transition-colors duration-300 font-sans flex items-center justify-center ${darkMode ? "bg-black text-white" : "bg-gradient-to-br from-[#1e3a8a] to-[#6d28d9] text-white"}`}>
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl w-full max-w-7xl p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text">
            💪 FitTrack Dashboard
          </h1>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-800" />}
          </button>
        </div>

        {error && <p className="mb-4 text-red-500 font-semibold">⚠️ {error}</p>}

        {dayCount < 7 ? (
          <>
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
            >
              {[
                { name: "water", label: "💧 Water Intake (L)" },
                { name: "calories", label: "🔥 Calories Intake" },
                { name: "exercise", label: "🏃 Exercise Time (min)" },
              ].map(({ name, label }) => (
                <input
  name={name}
  type="number"
  value={formData[name]}
  onChange={handleChange}
  placeholder={label}
  required
  className="px-4 py-2 border-2 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 text-black"
/>

              ))}
              <button
                type="submit"
                className="md:col-span-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-transform hover:scale-105"
              >
                🚀 Submit
              </button>
            </motion.form>
            <p className="text-center text-lg font-medium mb-6">
              🗓 {7 - dayCount} day(s) remaining — keep going strong!
            </p>
          </>
        ) : (
          <p className="text-center text-lg font-medium mb-6">✅ You've submitted 7 days of data!</p>
        )}

        {feedback && (
          <motion.div
            className="bg-green-100 text-green-800 rounded-xl p-4 text-center font-medium mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {feedback}
          </motion.div>
        )}

        {data.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-10"
          >
            {["water", "calories", "exercise"].map((type) => (
              <div key={type} className="bg-white/10 dark:bg-gray-800 p-6 rounded-2xl shadow-2xl">
                <h2 className="text-2xl font-bold mb-4 text-center capitalize bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
                  📈 {type.charAt(0).toUpperCase() + type.slice(1)} Trend
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#444" : "#ccc"} />
                    <XAxis dataKey="date" stroke={darkMode ? "#ccc" : "#fff"} />
                    <YAxis stroke={darkMode ? "#ccc" : "#fff"} />
                    <Tooltip
                      contentStyle={{ backgroundColor: darkMode ? "#1f2937" : "white", borderRadius: "8px" }}
                      labelStyle={{ color: darkMode ? "#f9fafb" : "#1f2937" }}
                    />
                    <Line
                      type="monotone"
                      dataKey={type}
                      stroke={
                        type === "water" ? "#06b6d4" :
                        type === "calories" ? "#ef4444" :
                        "#8b5cf6"
                      }
                      strokeWidth={3}
                      dot={{ r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            ))}
          </motion.div>
        )}

        <div className="mt-10 text-center text-xl italic opacity-70">
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
