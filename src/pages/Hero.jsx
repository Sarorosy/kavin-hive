import React, { useState, useEffect, useRef } from "react";
import { Search, MapPin, ChevronDown, ChevronUp, Building, Wifi, Users, Camera, Store, Home } from "lucide-react";
import office from "../assets/office-png.png";

const workspaceTypes = [
  { icon: <Building className="w-4 h-4 sm:w-6 md:w-8 sm:h-6 md:h-8" />, label: "Dedicated", sublabel: "Desks" },
  { icon: <Wifi className="w-4 h-4 sm:w-6 md:w-8 sm:h-6 md:h-8" />, label: "Hot", sublabel: "Desks" },
  { icon: <Home className="w-4 h-4 sm:w-6 md:w-8 sm:h-6 md:h-8" />, label: "Virtual", sublabel: "Office" },
  { icon: <Building className="w-4 h-4 sm:w-6 md:w-8 sm:h-6 md:h-8" />, label: "Private", sublabel: "Office" },
  { icon: <Users className="w-4 h-4 sm:w-6 md:w-8 sm:h-6 md:h-8" />, label: "Meeting", sublabel: "Room" },
  { icon: <Users className="w-4 h-4 sm:w-6 md:w-8 sm:h-6 md:h-8" />, label: "Conference", sublabel: "Room" },
  { icon: <Camera className="w-4 h-4 sm:w-6 md:w-8 sm:h-6 md:h-8" />, label: "Event", sublabel: "Space" },
  { icon: <Camera className="w-4 h-4 sm:w-6 md:w-8 sm:h-6 md:h-8" />, label: "Studio", sublabel: "Space" },
  { icon: <Store className="w-4 h-4 sm:w-6 md:w-8 sm:h-6 md:h-8" />, label: "Retail", sublabel: "space" },
  { icon: <Users className="w-4 h-4 sm:w-6 md:w-8 sm:h-6 md:h-8" />, label: "Co-living", sublabel: "Space" }
];

// City to branches mapping
const cityBranches = {
  Chennai: [
    "The Hive at Anna Nagar, Chennai",
    "The Hive at OMR, Chennai",
    "The Hive at SKCL Guindy, Chennai",
  ],
  Bangalore: ["The Hive at Whitefield, Bangalore", "The Hive at PTP, Bengaluru"],
  Hyderabad: ["The Hive at Gachibowli, Hyderabad"],
  Pune: ["The Hive at Mills, Pune"],
};

// Offerings data
const offerings = [
  {
    icon: "/icons/office.svg",
    title: "Office Spaces",
    subtitle: "Ready-to-move-in or customisable private offices",
  },
  {
    icon: "/icons/coworking.svg",
    title: "Coworking Spaces",
    subtitle: "Coworking spaces for the hour, day, or month",
  },
  {
    icon: "/icons/additional.svg",
    title: "Additional Solutions",
    subtitle: "Solutions that go beyond workspaces",
  },
];

// Custom dropdown component
const Dropdown = ({ label, items, selected, setSelected, icon, open, setOpen, id }) => {
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(null); // close all dropdowns
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpen]);

  return (
    <div className="relative" ref={ref}>
      <div
        onClick={() => setOpen(open === id ? null : id)}
        className="flex items-center justify-between w-full border border-gray-200 rounded-xl px-3 sm:px-4 py-3 sm:py-4 cursor-pointer hover:border-black transition"
      >
        <div className="flex items-center gap-2 sm:gap-3">
          {icon && <span className="text-gray-400">{icon}</span>}
          <span className={`text-sm sm:text-base ${selected ? "text-gray-900" : "text-gray-400"}`}>
            {selected || label}
          </span>
        </div>
        {open === id ? (
          <ChevronUp className="w-4 h-4 text-gray-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-400" />
        )}
      </div>

      {open === id && (
        <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-10 max-h-64 overflow-y-auto">
          {items.map((item, idx) => (
            <div
              key={idx}
              onClick={() => {
                setSelected(item.title || item);
                setOpen(null);
              }}
              className="px-3 sm:px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-2 sm:gap-3"
            >
              {item.icon && (
                <img src={office} alt="" className="w-6 h-6 flex-shrink-0" />
              )}
              <div>
                <div className="text-sm font-medium text-gray-900">
                  {item.title || item}
                </div>
                {item.subtitle && (
                  <div className="text-xs text-gray-500">{item.subtitle}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Hero = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedOffering, setSelectedOffering] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat pt-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80')",
      }}
      id="curve"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" id="curve"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full">
          {/* Mobile Layout */}
          <div className="block lg:hidden text-center space-y-8 py-8">
            {/* Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Where Would
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                You Like To Work
                <span className="text-orange-400">?</span>
              </h1>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 mx-auto max-w-md space-y-4 sm:space-y-6">
              {/* Dropdowns */}
              <div className="space-y-3 sm:space-y-4">
                <Dropdown
                  id="city"
                  label="Choose a City"
                  items={Object.keys(cityBranches)}
                  selected={selectedCity}
                  setSelected={setSelectedCity}
                  icon={<MapPin className="w-4 h-4 sm:w-5 sm:h-5" />}
                  open={openDropdown}
                  setOpen={setOpenDropdown}
                />
                <Dropdown
                  id="offering"
                  label="Choose a Solution"
                  items={offerings}
                  selected={selectedOffering}
                  setSelected={setSelectedOffering}
                  open={openDropdown}
                  setOpen={setOpenDropdown}
                />
              </div>

              {/* Workspace Types Grid */}
              <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 ">
                {workspaceTypes.map((type, index) => (
                  <div key={index} className="flex flex-col items-center p-2 sm:p-3 rounded-xl hover:bg-gray-900 hover:text-white transition-colors cursor-pointer group">
                    <div className="p-2 sm:p-3 rounded-lg mb-1 sm:mb-2 transition-colors bg-gray-100 text-gray-600 group-hover:bg-gray-200">
                      {type.icon}
                    </div>
                    <div className="text-center">
                      <div className="text-xs sm:text-sm font-medium">{type.label}</div>
                      <div className="text-xs">{type.sublabel}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Search Button */}
              <button className="w-full bg-black text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Search</span>
              </button>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 xl:gap-12 items-center">
            {/* Left Column - Title */}
            <div className="space-y-4">
              <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white leading-tight">
                Where Would
                <span className="block">
                  You Like To Work
                  <span className="text-orange-400 ml-2">?</span>
                </span>
              </h1>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-2xl p-4 xl:p-4 px-6 w-full max-w-lg ml-auto space-y-6">
              {/* Dropdowns */}
              <div className="space-y-4">
                <Dropdown
                  id="city"
                  label="Choose a City"
                  items={Object.keys(cityBranches)}
                  selected={selectedCity}
                  setSelected={setSelectedCity}
                  icon={<MapPin className="w-5 h-5" />}
                  open={openDropdown}
                  setOpen={setOpenDropdown}
                />
                <Dropdown
                  id="offering"
                  label="Choose a Solution"
                  items={offerings}
                  selected={selectedOffering}
                  setSelected={setSelectedOffering}
                  open={openDropdown}
                  setOpen={setOpenDropdown}
                />
              </div>

              {/* Workspace Types Grid */}
              <div className="grid grid-cols-5 gap-3">
                {workspaceTypes.map((type, index) => (
                  <div key={index} className="flex flex-col items-center p-2 rounded-xl hover:bg-gray-900 hover:text-white transition-colors cursor-pointer group">
                    <div className="p-3 rounded-lg mb-2 transition-colors bg-gray-100 text-gray-600 group-hover:bg-gray-200">
                      {type.icon}
                    </div>
                    <div className="text-center">
                      <div className="text-xs font-medium">{type.label}</div>
                      <div className="text-xs">{type.sublabel}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Search Button */}
              <button className="w-full bg-black text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;