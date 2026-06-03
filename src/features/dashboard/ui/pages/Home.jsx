import React from "react";
import { Outlet } from "react-router";
import {
  Sparkles,
  LayoutDashboard,
  Activity,
  Settings,
} from "lucide-react";
import { useSelector } from "react-redux";

const Home = () => {
  const { mode } = useSelector((store) => store.theme);

return (
  <div className="min-h-screen bg-[var(--bg-primary)] p-6">
    {mode === "light" ? (
      <>
        {/* Light Theme UI */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-slate-800">
            Good Morning ☀️
          </h1>
          <p className="text-slate-500 mt-2">
            Welcome to your workspace dashboard.
          </p>
        </div>
      </>
    ) : (
      <>
        {/* Dark Theme UI */}
        <div className="rounded-3xl p-8 bg-gradient-to-r from-purple-900 via-slate-900 to-cyan-900 border border-cyan-500/20">
          <h1 className="text-4xl font-bold text-cyan-300">
            Welcome Back 🌙
          </h1>
          <p className="text-slate-300 mt-2">
            Your futuristic workspace is ready.
          </p>
        </div>
      </>
    )}
  </div>
);
};

export default Home;