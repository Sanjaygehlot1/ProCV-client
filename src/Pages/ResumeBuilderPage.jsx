import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function ResumeBuilder() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      <div className="md:hidden flex items-center justify-between bg-blue-900 text-white p-4">
        <h2 className="text-xl font-semibold">ProCV</h2>
        <button onClick={() => setSidebarOpen(true)} className="p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <aside
        className={`fixed inset-y-0 left-0 w-64 z-10 bg-blue-900 text-white p-6 flex flex-col gap-4 
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:relative md:translate-x-0`}
      >
        <div className="md:hidden flex justify-between items-center">
          <h2 className="text-xl font-semibold">ProCV</h2>
          <button onClick={() => setSidebarOpen(false)} className="p-2">
            <X className="w-6 h-6" />
          </button>
        </div>

        <ul className="space-y-2 mt-4">
          {[
            "Personal Details",
            "Education",
            "Professional Experience",
            "Skills",
            "Projects",
            "Summary",
            "Finalize",
          ].map((step, index) => (
            <NavLink
              to={`/create/${step.toLowerCase().replace(/ /g, "-")}`}
              key={index}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-xl ${
                  isActive ? "bg-orange-500 text-white" : "text-white"
                }`
              }
            >
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-blue-900 font-bold">
                {index + 1}
              </span>
              {step}
            </NavLink>
          ))}
        </ul>
      </aside>

      <main className="flex-1 p-2">
        <Outlet />
      </main>
    </div>
  );
}
