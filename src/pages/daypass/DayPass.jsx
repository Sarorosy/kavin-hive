// src/pages/DayPass.jsx
import React, { useState } from "react";
import { ChevronDown, CalendarDays, Building2, MapPin } from "lucide-react";
import { centersData } from "../../data/centersData";

const DayPass = () => {
  const [selectedCity, setSelectedCity] = useState("chennai");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [date, setDate] = useState("");

  const cities = Object.entries(centersData);
  const branches = selectedCity
    ? Object.entries(centersData[selectedCity].branches)
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side - Filters */}
        <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-gray-100">
          <h2 className="text-3xl font-extrabold font-serif text-gray-900 mb-6">
            Book a <span className="text-blue-600">Day Pass</span>
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Choose your preferred center, branch, and date to explore our
            workspaces with a hassle-free day pass.
          </p>

          <div className="space-y-6">
            {/* City Select */}
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Select Center
              </label>
              <div className="relative">
                <select
                  value={selectedCity}
                  onChange={(e) => {
                    setSelectedCity(e.target.value);
                    setSelectedBranch("");
                  }}
                  className="w-full px-4 py-3 pl-10 border rounded-xl appearance-none cursor-pointer focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                >
                  {cities.map(([cityKey, city]) => (
                    <option key={cityKey} value={cityKey}>
                      {city.name}
                    </option>
                  ))}
                </select>
                <Building2
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <ChevronDown
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                  size={18}
                />
              </div>
            </div>

            {/* Branch Select */}
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Select Branch
              </label>
              <div className="relative">
                <select
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  disabled={!selectedCity}
                  className="w-full px-4 py-3 pl-10 border rounded-xl appearance-none cursor-pointer focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  <option value="">Choose a Branch</option>
                  {branches.map(([branchKey, branch]) => (
                    <option key={branchKey} value={branchKey}>
                      {branch.name}
                    </option>
                  ))}
                </select>
                <MapPin
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <ChevronDown
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                  size={18}
                />
              </div>
            </div>

            {/* Date Picker */}
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Select Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 pl-10 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
                <CalendarDays
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Placeholder */}
        <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-500 italic text-lg">
              Your booking details will appear here ✨
            </p>
            <div className="mt-6">
              {selectedCity && (
                <p className="text-gray-700">
                  <span className="font-semibold">Center:</span>{" "}
                  {centersData[selectedCity].name}
                </p>
              )}
              {selectedBranch && (
                <p className="text-gray-700">
                  <span className="font-semibold">Branch:</span>{" "}
                  {centersData[selectedCity].branches[selectedBranch].name}
                </p>
              )}
              {date && (
                <p className="text-gray-700">
                  <span className="font-semibold">Date:</span> {date}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayPass;
