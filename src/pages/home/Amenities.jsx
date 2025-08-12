import React from 'react';
import { 
  Wifi, 
  Car, 
  Zap, 
  Printer, 
  Clock, 
  Sparkles, 
  Settings, 
  Gamepad2, 
  CheckCircle, 
  Users, 
  DollarSign,
  MapPin
} from 'lucide-react';

const Amenities = () => {
  const amenities = [
    { icon: Sparkles, label: "Daily Cleaning & Sanitisation" },
    { icon: Settings, label: "Easy customisation" },
    { icon: Gamepad2, label: "Game Zones" },
    { icon: CheckCircle, label: "Hassle Free Setup" },
    { icon: Wifi, label: "High Speed Wi-Fi" },
    { icon: Users, label: "Meeting room" },
    { icon: DollarSign, label: "No Hidden Costs" },
    { icon: MapPin, label: "Pan India Access" },
    { icon: Car, label: "Parking" },
    { icon: Zap, label: "Power backup" },
    { icon: Printer, label: "Printer & Scanner" },
    { icon: Clock, label: "Work 24x7" }
  ];

  // Duplicate the array for seamless loop
  const duplicatedAmenities = [...amenities, ...amenities, ...amenities];

  return (
    <div className="w-full overflow-hidden bg-gray-50 py-12">
      {/* <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Amenities</h2>
        <p className="text-gray-600">Everything you need for a productive workspace</p>
      </div> */}
      
      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-purple-50 to-transparent z-10 pointer-events-none"></div>
        
        {/* Marquee container */}
        <div className="flex animate-marquee hover:pause-marquee">
          {duplicatedAmenities.map((amenity, index) => {
            const IconComponent = amenity.icon;
            return (
              <div
                key={index}
                className="flex-shrink-0 mx-6 flex flex-col items-center justify-center p-3  transition-all duration-300 hover:scale-105 group min-w-[100px]"
              >
                <div className="mb-4 p-3 bg-black rounded-full group-hover:from-purple-500 group-hover:to-blue-600 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <p className="text-center text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  {amenity.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .pause-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Amenities;