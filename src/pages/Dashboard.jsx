import React, { useState } from "react";
import { FaShoePrints, FaSignOutAlt, FaHome, FaPhone, FaInfoCircle, FaUser, FaTint, FaFire, FaUtensils, FaCalendarAlt, FaChartBar, FaCog } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  PieChart,
  Pie,
  Cell
} from "recharts";

const data = [
  { name: "Jan", steps: 4000 },
  { name: "Feb", steps: 3000 },
  { name: "Mar", steps: 5000 },
  { name: "Apr", steps: 9178 },
  { name: "May", steps: 6000 },
  { name: "Jun", steps: 7000 },
  { name: "Jul", steps: 8000 },
];

const waterData = [
  { name: "Sun", actual: 5, benchmark: 6 },
  { name: "Mon", actual: 5.5, benchmark: 6 },
  { name: "Tue", actual: 4.8, benchmark: 6 },
  { name: "Wed", actual: 6, benchmark: 6 },
  { name: "Thu", actual: 5.2, benchmark: 6 },
  { name: "Fri", actual: 6, benchmark: 6 },
  { name: "Sat", actual: 5.9, benchmark: 6 },
];

const calorieData = [
  { name: "Sun", actual: 2000, benchmark: 2200 },
  { name: "Mon", actual: 1800, benchmark: 2200 },
  { name: "Tue", actual: 2100, benchmark: 2200 },
  { name: "Wed", actual: 2300, benchmark: 2200 },
  { name: "Thu", actual: 2200, benchmark: 2200 },
  { name: "Fri", actual: 2500, benchmark: 2200 },
  { name: "Sat", actual: 2400, benchmark: 2200 },
];

const burnedData = [
  { name: "Sun", actual: 2500, benchmark: 3000 },
  { name: "Mon", actual: 2800, benchmark: 3000 },
  { name: "Tue", actual: 2900, benchmark: 3000 },
  { name: "Wed", actual: 3100, benchmark: 3000 },
  { name: "Thu", actual: 3300, benchmark: 3000 },
  { name: "Fri", actual: 3200, benchmark: 3000 },
  { name: "Sat", actual: 3000, benchmark: 3000 },
];

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const footstepsData = [
    { name: "Steps Taken", value: 12000 },
    { name: "Remaining Steps", value: 10000 }
  ];

  return (
    <div className={`min-h-screen flex bg-gradient-to-br ${darkMode ? "from-gray-900 to-black" : "from-[#2D0C6D] to-[#6528F7]"} text-white font-sans`}>
      
      {/* Sidebar */}
      <aside className="w-20 md:w-24 bg-white bg-opacity-10 p-4 flex flex-col items-center justify-between rounded-r-3xl shadow-lg">
        <div className="space-y-6">
          <FaHome className="text-2xl cursor-pointer" />
          <FaCalendarAlt className="text-2xl cursor-pointer" />
          <FaChartBar className="text-2xl cursor-pointer" />
          <FaInfoCircle className="text-2xl cursor-pointer" />
        </div>
        <div className="mb-4">
          <button className="text-2xl text-white hover:text-red-500">
            <FaSignOutAlt />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-white text-4xl font-bold">Fit Tracker</h1>
          <div className="flex items-center">
            <button onClick={() => setDarkMode(!darkMode)} className="px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm">
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
            <img src="/images/177660.png" alt="User" className="w-10 h-10 rounded-full ml-4 border-2 border-white" />
          </div>
        </div>

        {/* Overview Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white bg-opacity-10 rounded-2xl p-4 shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Overview</h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <XAxis dataKey="name" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Line type="monotone" dataKey="steps" stroke="#FF66C4" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
            <div className="flex justify-between text-sm mt-2">
              <span>Total Time: 748 Hr</span>
              <span>Target: 9200 St</span>
            </div>
          </div>

          {/* Footsteps Tracker */}
          <div className="bg-white bg-opacity-10 rounded-2xl p-4 shadow-lg flex flex-col items-center justify-center">
            <div className="relative w-32 h-32">
              <PieChart width={128} height={128}>
                <Pie
                  data={footstepsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={60}
                  startAngle={90}
                  endAngle={-270}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {footstepsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? "#34D399" : "#9CA3AF"} />
                  ))}
                </Pie>
              </PieChart>
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="/images/4357645.png" alt="Footsteps" className="w-12 h-12 object-contain" />
              </div>
            </div>
            <p className="text-lg font-semibold mt-2">Footsteps</p>
            <p className="text-sm">Steps Taken: 12,000 / Goal: 20,000</p>
          </div>

          {/* Checklist Section */}
          <div className="bg-white bg-opacity-10 rounded-2xl p-4 shadow-lg mt-6 md:mt-0">
            <h2 className="text-lg font-semibold mb-4">Checklist</h2>
            <ul className="space-y-2 text-sm">
              {tasks.map((task, index) => (
                <li key={index} className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(index)}
                      className="form-checkbox h-4 w-4 text-green-400 bg-transparent border-white"
                    />
                    <span className={task.completed ? "line-through text-gray-400" : ""}>
                      {task.text}
                    </span>
                  </label>
                  <button onClick={() => removeTask(index)} className="text-red-400 hover:text-red-600">
                    &times;
                  </button>
                </li>
              ))}
            </ul>
            <form onSubmit={addTask} className="mt-4 flex space-x-2">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="flex-1 px-2 py-1 bg-white bg-opacity-20 rounded text-white placeholder-gray-300"
                placeholder="New task..."
              />
              <button type="submit" className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600">
                Add
              </button>
            </form>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Water Intake */}
          <div className="bg-white bg-opacity-10 rounded-2xl p-4 shadow-lg">
            <div className="flex items-center space-x-2 mb-2">
              <FaTint className="text-blue-300" />
              <h2 className="text-lg font-semibold">Water Intake</h2>
            </div>
            <p className="text-sm mb-1">Goal: 6L</p>
            <p className="text-sm mb-2">Week: 25L</p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={waterData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Bar dataKey="actual" fill="url(#gradient)" radius={[10, 10, 0, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
            <svg width="0" height="0">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9B4DFF" />
                  <stop offset="100%" stopColor="#F5A9B8" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Calorie Intake */}
          <div className="bg-white bg-opacity-10 rounded-2xl p-4 shadow-lg">
            <div className="flex items-center space-x-2 mb-2">
              <FaUtensils className="text-yellow-300" />
              <h2 className="text-lg font-semibold">Calorie Intake</h2>
            </div>
            <p className="text-sm mb-1">Goal: 2200 kcal/day</p>
            <p className="text-sm mb-2">Week: 15,000 kcal</p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={calorieData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Bar dataKey="actual" fill="#FFC107" barSize={30} radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Calories Burned */}
          <div className="bg-white bg-opacity-10 rounded-2xl p-4 shadow-lg">
            <div className="flex items-center space-x-2 mb-2">
              <FaFire className="text-red-300" />
              <h2 className="text-lg font-semibold">Calories Burned</h2>
            </div>
            <p className="text-sm mb-1">Goal: 3000 kcal/day</p>
            <p className="text-sm mb-2">Week: 20,800 kcal</p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={burnedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Bar dataKey="actual" fill="url(#burnGradient)" radius={[10, 10, 0, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
            <svg width="0" height="0">
              <defs>
                <linearGradient id="burnGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF6A6A" />
                  <stop offset="100%" stopColor="#9B4DFF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
