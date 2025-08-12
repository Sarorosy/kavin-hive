import React, { useState, useEffect, useRef } from "react";
import { Search, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import office from "../assets/office-png.png";

import {  Building, Wifi, Users, Camera, Store, Home } from 'lucide-react';

  const workspaceTypes = [
    { icon: <Building className="w-8 h-8" />, label: "Dedicated", sublabel: "Desks" },
    { icon: <Wifi className="w-8 h-8" />, label: "Hot", sublabel: "Desks" },
    { icon: <Home className="w-8 h-8" />, label: "Virtual", sublabel: "Office" },
    { icon: <Building className="w-8 h-8" />, label: "Private", sublabel: "Office" },
    { icon: <Users className="w-8 h-8" />, label: "Meeting", sublabel: "Room" },
    { icon: <Users className="w-8 h-8" />, label: "Conference", sublabel: "Room" },
    { icon: <Camera className="w-8 h-8" />, label: "Event", sublabel: "Space" },
    { icon: <Camera className="w-8 h-8" />, label: "Studio", sublabel: "Space" },
    { icon: <Store className="w-8 h-8" />, label: "Retail", sublabel: "space" },
    { icon: <Users className="w-8 h-8" />, label: "Co-living", sublabel: "Space" }
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
        className="flex items-center justify-between w-full border border-gray-200 rounded-xl px-4 py-4 cursor-pointer hover:border-black transition"
      >
        <div className="flex items-center gap-3">
          {icon && <span className="text-gray-400">{icon}</span>}
          <span className={selected ? "text-gray-900" : "text-gray-400"}>
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
              className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3"
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
  const [openDropdown, setOpenDropdown] = useState(null); // keeps track of which dropdown is open

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80')",
      }}
      id="curve"
    >
      <div className="absolute inset-0 bg-black/20" id="curve"></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Where Would
              <span className="block">
                You Like To Work
                <span className="text-yellow-500 ml-2">?</span>
              </span>
            </h1>
          </div>

          <div className="bg-white rounded-2xl p-8 w-lg max-w-lg ml-auto space-y-4">
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
            <div className="grid grid-cols-5 gap-3 mb-8">
              {workspaceTypes.map((type, index) => (
                <div key={index} className="flex flex-col items-center p-3 rounded-xl hover:bg-gray-900 hover:text-white  transition-colors cursor-pointer group">
                  <div className={`p-3 rounded-lg mb-2 transition-colors bg-gray-100 text-gray-600 group-hover:bg-gray-200`}>
                    {type.icon}
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-medium ">{type.label}</div>
                    <div className="text-xs ">{type.sublabel}</div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full bg-black text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
