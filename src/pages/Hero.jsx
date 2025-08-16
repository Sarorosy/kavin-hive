import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  Search,
  MapPin,
  ChevronDown,
  ChevronUp,
  Building,
  Wifi,
  Users,
  Camera,
  Store,
  Home,
  ChevronLeft,
  ChevronRight,
  ChevronLeftIcon,
  MoveLeft,
  MoveRight
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import office from "../assets/office-png.png";

// Background images
const heroImages = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1532916123995-50bad0fc528e?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1606836576983-8b458e75221d?auto=format&fit=crop&w=1920&q=80"
];

// Workspace types
const workspaceTypes = [
  { icon: <Building className="w-6 h-6" />, label: "Dedicated", sublabel: "Desks" },
  { icon: <Wifi className="w-6 h-6" />, label: "Hot", sublabel: "Desks" },
  { icon: <Home className="w-6 h-6" />, label: "Virtual", sublabel: "Office" },
  { icon: <Building className="w-6 h-6" />, label: "Private", sublabel: "Office" },
  { icon: <Users className="w-6 h-6" />, label: "Meeting", sublabel: "Room" },
  { icon: <Users className="w-6 h-6" />, label: "Conference", sublabel: "Room" },
  { icon: <Camera className="w-6 h-6" />, label: "Event", sublabel: "Space" },
  { icon: <Camera className="w-6 h-6" />, label: "Studio", sublabel: "Space" },
  { icon: <Store className="w-6 h-6" />, label: "Retail", sublabel: "Space" },
  { icon: <Users className="w-6 h-6" />, label: "Co-living", sublabel: "Space" }
];

// Data
const cityBranches = {
  Chennai: [
    "The Hive at Anna Nagar, Chennai",
    "The Hive at OMR, Chennai",
    "The Hive at SKCL Guindy, Chennai"
  ],
  Bangalore: ["The Hive at Whitefield, Bangalore", "The Hive at PTP, Bengaluru"],
  Hyderabad: ["The Hive at Gachibowli, Hyderabad"],
  Pune: ["The Hive at Mills, Pune"]
};

const offerings = [
  {
    icon: "/icons/office.svg",
    title: "Office Spaces",
    subtitle: "Ready-to-move-in or customisable private offices"
  },
  {
    icon: "/icons/coworking.svg",
    title: "Coworking Spaces",
    subtitle: "Coworking spaces for the hour, day, or month"
  },
  {
    icon: "/icons/additional.svg",
    title: "Additional Solutions",
    subtitle: "Solutions that go beyond workspaces"
  }
];

// Dropdown
const Dropdown = ({ label, items, selected, setSelected, icon, open, setOpen, id }) => {
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpen]);

  return (
    <div className="relative" ref={ref}>
      <div
        onClick={() => setOpen(open === id ? null : id)}
        className="flex items-center justify-between w-full border border-gray-200 rounded-xl px-4 py-3 cursor-pointer hover:border-black transition"
      >
        <div className="flex items-center gap-2">
          {icon && <span className="text-gray-400">{icon}</span>}
          <span className={`text-sm ${selected ? "text-gray-900" : "text-gray-400"}`}>
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
        <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-20 max-h-64 overflow-y-auto">
          {items.map((item, idx) => (
            <div
              key={idx}
              onClick={() => {
                setSelected(item.title || item);
                setOpen(null);
              }}
              className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3"
            >
              {item.icon && <img src={office} alt="" className="w-6 h-6" />}
              <div>
                <div className="text-sm font-medium text-gray-900">
                  {item.title || item}
                </div>
                {item.subtitle && <div className="text-xs text-gray-500">{item.subtitle}</div>}
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
    <div className="relative h-screen w-full overflow-hidden">
      {/* Swiper Background */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet custom-bullet',
          bulletActiveClass: 'custom-bullet-active',
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="absolute inset-0 h-full w-full"
      >
        {heroImages.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-full w-full">
              <img src={img} alt={`Hero ${idx}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="custom-prev cursor-pointer z-99 absolute left-4 sm:right-24 bottom-2 sm:bottom-4 z-10 w-8 h-8 sm:w-12 sm:h-12 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 hover:scale-110">
        <MoveLeft />
      </button>
      <button className="custom-next cursor-pointer z-99 absolute left-20 sm:right-6 bottom-2 sm:bottom-4 z-10 w-8 h-8 sm:w-12 sm:h-12 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 hover:scale-110">
        <MoveRight />
      </button>

      {/* Foreground Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side Text */}
          <div className="text-white space-y-4">
            <h1 className="text-4xl xl:text-5xl font-bold leading-tight">
              Where Would
              <span className="block">
                You Like To Work
                <span className="text-orange-400 ml-2">?</span>
              </span>
            </h1>
          </div>

          {/* Right Side Form */}
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg ml-auto space-y-6">
            <div className="space-y-4">
              <Dropdown
                id="city"
                label="Choose a City"
                items={Object.keys(cityBranches)}
                selected={selectedCity}
                setSelected={setSelectedCity}
                icon={<MapPin className="w-4 h-4" />}
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

            {/* Workspace Types */}
            <div className="grid grid-cols-5 gap-3">
              {workspaceTypes.map((type, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center p-2 rounded-xl hover:bg-gray-900 hover:text-white cursor-pointer"
                >
                  <div className="p-3 bg-gray-100 rounded-lg mb-1">{type.icon}</div>
                  <div className="text-xs font-medium">{type.label}</div>
                  <div className="text-xs">{type.sublabel}</div>
                </div>
              ))}
            </div>

            {/* Search Button */}
            <button className="w-full bg-black text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800">
              <Search className="w-4 h-4" /> Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
