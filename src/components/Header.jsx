import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, User, Phone, Menu, X } from "lucide-react";
import logoTransparent from '../assets/logo-transparent.png';

const Header = ({ onBookTourClick }) => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [centresOpen, setCentresOpen] = useState(false);
  const [workspacesOpen, setWorkspacesOpen] = useState(false);
  const [hoveredCity, setHoveredCity] = useState("");
  const [hoveredOffering, setHoveredOffering] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const infoRef = useRef(null);
  const centresRef = useRef(null);
  const workspacesRef = useRef(null);

  // City to branches mapping
  const cityBranches = {
    Chennai: [
      "The Hive at Anna Nagar, Chennai",
      "The Hive at OMR, Chennai",
      "The Hive at SKCL Guindy, Chennai",
    ],
    Bangalore: [
      "The Hive at Whitefield, Bangalore",
      "The Hive at PTP, Bengaluru",
    ],
    Hyderabad: ["The Hive at Gachibowli, Hyderabad"],
    Pune: ["The Hive at Mills, Pune"],
  };

  // Offerings data
  const offerings = [
    {
      icon: "/icons/office.svg",
      title: "Office Spaces",
      subtitle: "Ready-to-move-in or customisable private offices",
      items: ["Managed Offices", "Enterprise Solutions", "Private Cabins"],
    },
    {
      icon: "/icons/coworking.svg",
      title: "Coworking Spaces",
      subtitle: "Coworking spaces for the hour, day, or month",
      items: ["Dedicated Desks", "Hot Desks"],
    },
    {
      icon: "/icons/additional.svg",
      title: "Additional Solutions",
      subtitle: "Solutions that go beyond workspaces",
      items: ["Meetings & Event Spaces"],
    },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (infoRef.current && !infoRef.current.contains(event.target)) {
        setInfoOpen(false);
      }
      if (
        centresRef.current &&
        !centresRef.current.contains(event.target)
      ) {
        setCentresOpen(false);
        setHoveredCity("");
      }
      if (
        workspacesRef.current &&
        !workspacesRef.current.contains(event.target)
      ) {
        setWorkspacesOpen(false);
        setHoveredOffering("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
      ${!isScrolled
        ? 'bg-white text-[#092e46] shadow-md'
        : 'bg-white/10 backdrop-blur-md border-b border-white/20 text-[#092e46]'
      }
    `}>
      <div className="mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center justify-center space-x-2">
          {/* Left - Logo */}
          <button onClick={() => navigate("/")} className="text-2xl font-bold flex items-center cursor-pointer">
            <img
              src={isScrolled ? logoTransparent : logoTransparent}
              alt="Logo"
              className="h-10 w-auto transition-all duration-300"
            />
          </button>
          {/* Desktop Navigation */}
          <nav className={`
            hidden md:flex items-center space-x-8 text-sm font-medium ml-8 transition-colors duration-300
            ${isScrolled ? 'text-black' : 'text-black'}
          `}>


            {/* WorkSpaces Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setWorkspacesOpen(true)}
              onMouseLeave={() => {
                setWorkspacesOpen(false);
                setHoveredOffering("");
              }}
              ref={workspacesRef}
            >
              <span className="hover:underline cursor-pointer transition-all duration-200">WorkSpaces</span>
              {workspacesOpen && (
                <div className="absolute left-0 top-7 mt-2 w-96 bg-black text-white rounded-sm z-20 shadow-xl">
                  <div className="absolute top-0 left-1 -translate-y-full w-0 h-0 border-l-[10px] border-r-[10px] border-b-[20px] border-l-transparent border-r-transparent border-b-black"></div>
                  <div className="absolute top-0 left-5 -translate-y-full w-full h-0  border-b-[20px] opacity-0 bg-transparent z-19"></div>
                  <div className="flex">
                    {/* Left side - Offering Types */}
                    <div className="w-1/2 p-4 border-r border-gray-600">
                      <h3 className="text-xs uppercase tracking-wide text-gray-300 mb-3">
                        Workspace Types
                      </h3>
                      {offerings.map((offering) => (
                        <div
                          key={offering.title}
                          className={`py-2 px-2 cursor-pointer hover:bg-gray-800 rounded transition-colors ${hoveredOffering === offering.title
                              ? "bg-gray-800"
                              : ""
                            }`}
                          onMouseEnter={() =>
                            setHoveredOffering(offering.title)
                          }
                        >
                          <div className="font-medium">{offering.title}</div>
                          <div className="text-xs text-gray-400 mt-1">
                            {offering.subtitle}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Right side - Items */}
                    <div className="w-1/2 p-4">
                      <h3 className="text-xs uppercase tracking-wide text-gray-300 mb-3">
                        Options
                      </h3>
                      {hoveredOffering &&
                        offerings.find((o) => o.title === hoveredOffering) ? (
                        <div className="space-y-2">
                          {offerings
                            .find((o) => o.title === hoveredOffering)
                            ?.items.map((item, index) => (
                              <button
                                key={index}
                                onClick={() => navigate(`/workspaces/${item
                                    .toLowerCase()
                                    .replace(/&/g, "and")
                                    .replace(/[^a-z0-9]+/g, "-")
                                    .replace(/^-+|-+$/g, "")
                                  }`)}
                                className="block w-full text-left py-1 px-2 hover:bg-gray-800 rounded text-sm transition-colors bg-transparent border-none cursor-pointer text-white"
                              >
                                {item}
                              </button>
                            ))}
                        </div>
                      ) : (
                        <div className="text-gray-400 text-sm">
                          Hover over a workspace type to see options
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Centres Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCentresOpen(true)}
              onMouseLeave={() => {
                setCentresOpen(false);
                setHoveredCity("");
              }}
              ref={centresRef}
            >
              <span className="hover:underline cursor-pointer transition-all duration-200">Centres</span>
              {centresOpen && (
                <div className="absolute left-0 top-7 mt-2 w-96 bg-black text-white rounded-sm z-20 shadow-xl">
                  <div className="absolute top-0 left-1 -translate-y-full w-0 h-0 border-l-[10px] border-r-[10px] border-b-[20px] border-l-transparent border-r-transparent border-b-black"></div>
                  <div className="absolute top-0 left-5 -translate-y-full w-full h-0  border-b-[20px] opacity-0 bg-transparent z-19"></div>

                  <div className="flex">
                    {/* Left side - Cities */}
                    <div className="w-1/2 p-4 border-r border-gray-600">
                      <h3 className="text-xs uppercase tracking-wide text-gray-300 mb-3">
                        Cities
                      </h3>
                      {Object.keys(cityBranches).map((city) => (
                        <div
                          key={city}
                          className={`py-2 px-2 cursor-pointer hover:bg-gray-800 rounded transition-colors ${hoveredCity === city ? "bg-gray-800" : ""
                            }`}
                          onMouseEnter={() => setHoveredCity(city)}
                        >
                          {city}
                        </div>
                      ))}
                    </div>

                    {/* Right side - Branches */}
                    <div className="w-1/2 p-4">
                      <h3 className="text-xs uppercase tracking-wide text-gray-300 mb-3">
                        Branches
                      </h3>
                      {hoveredCity &&
                        cityBranches[hoveredCity] ? (
                        <div className="space-y-2">
                          {cityBranches[hoveredCity].map((branch, index) => (
                            <button
                              key={index}
                              onClick={() => navigate(`/centres/${branch
                                .toLowerCase()
                                .replace(/[^a-z0-9]/g, "-")}`)}
                              className="block w-full text-left py-1 px-2 hover:bg-gray-800 rounded text-sm transition-colors bg-transparent border-none cursor-pointer text-white"
                            >
                              {branch}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="text-gray-400 text-sm">
                          Hover over a city to see branches
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button onClick={() => navigate("/landlord_relationships")} className="hover:underline transition-all duration-200 bg-transparent border-none cursor-pointer">
              Enterprise Solutions
            </button>


            <button onClick={() => navigate("/landlord-relationships")} className="hover:underline transition-all duration-200 bg-transparent border-none cursor-pointer">
              Landlord Relationships
            </button>

            {/* Info Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setInfoOpen(true)}
              onMouseLeave={() => setInfoOpen(false)}
              ref={infoRef}
            >
              <span className="hover:underline cursor-pointer transition-all duration-200">Info</span>
              {infoOpen && (
                <div className="absolute left-0 top-7 mt-2 w-44 bg-black text-white rounded-sm z-20 shadow-xl">
                  <div className="absolute top-0 left-1 -translate-y-full w-0 h-0 border-l-[10px] border-r-[10px] border-b-[20px] border-l-transparent border-r-transparent border-b-black"></div>

                  <div className="grid grid-cols-2 px-4 py-3 space-y-1">
                    <button onClick={() => navigate("/news")} className="hover:underline transition-all duration-200 bg-transparent border-none cursor-pointer text-white">
                      News
                    </button>
                    <button onClick={() => navigate("/awards")} className="hover:underline transition-all duration-200 bg-transparent border-none cursor-pointer text-white">
                      Awards
                    </button>
                    <button onClick={() => navigate("/team")} className="hover:underline transition-all duration-200 bg-transparent border-none cursor-pointer text-white">
                      Team
                    </button>
                    <button onClick={() => navigate("/careers")} className="hover:underline transition-all duration-200 bg-transparent border-none cursor-pointer text-white">
                      Careers
                    </button>
                  </div>
                </div>
              )}
            </div>

          </nav>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className={`md:hidden transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-text-black'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Right-side Actions */}
        <div className={`
          hidden md:flex items-center space-x-6 text-sm font-medium transition-colors duration-300
          ${isScrolled ? 'text-black' : 'text-black'}
        `}>
          <button
            onClick={onBookTourClick}
            className="flex items-center gap-1 hover:underline transition-all duration-200 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            Book a Tour
          </button>
          <button
            onClick={() => navigate("/account")}
            className="flex items-center gap-1 hover:underline transition-all duration-200 bg-transparent border-none cursor-pointer"
          >
            <User className="w-4 h-4" />
            My Account
          </button>
          <a
            href="tel:+917022274000"
            className="flex items-center gap-1 hover:underline transition-all duration-200 cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            Call Us
          </a>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileOpen && (
        <div className={`
          md:hidden border-t px-4 py-4 space-y-4 transition-all duration-300
          ${isScrolled
            ? 'bg-white text-black border-gray-200'
            : 'bg-white/10 backdrop-blur-md text-white border-white/20'
          }
        `}>
          <button onClick={() => navigate("/offerings")} className="block hover:underline transition-all duration-200 bg-transparent border-none cursor-pointer w-full text-left">
            Offerings
          </button>

          {/* WorkSpaces in mobile - Click to toggle */}
          <div className="space-y-2">
            <button
              onClick={() => setWorkspacesOpen(!workspacesOpen)}
              className="block w-full text-left hover:underline transition-all duration-200"
            >
              WorkSpaces
            </button>
            {workspacesOpen && (
              <div className="pl-4 space-y-2 text-sm">
                {offerings.map((offering) => (
                  <div key={offering.title} className="space-y-1">
                    <div className={`font-medium ${isScrolled ? 'text-gray-700' : 'text-gray-200'}`}>
                      {offering.title}
                    </div>
                    <div className={`text-xs mb-1 ${isScrolled ? 'text-gray-500' : 'text-gray-300'}`}>
                      {offering.subtitle}
                    </div>
                    {offering.items.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => navigate(`/workspaces/${item
                            .toLowerCase()
                            .replace(/&/g, "and")
                            .replace(/[^a-z0-9]+/g, "-")
                            .replace(/^-+|-+$/g, "")
                          }`)}
                        className={`block w-full text-left pl-2 hover:underline transition-all duration-200 bg-transparent border-none cursor-pointer ${isScrolled ? 'text-gray-600' : 'text-gray-300'
                          }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Centres in mobile - Click to toggle */}
          <div className="space-y-2">
            <button
              onClick={() => setCentresOpen(!centresOpen)}
              className="block w-full text-left hover:underline transition-all duration-200"
            >
              Centres
            </button>
            {centresOpen && (
              <div className="pl-4 space-y-2 text-sm">
                {Object.entries(cityBranches).map(([city, branches]) => (
                  <div key={city} className="space-y-1">
                    <div className={`font-medium ${isScrolled ? 'text-gray-700' : 'text-gray-200'}`}>
                      {city}
                    </div>
                    {branches.map((branch, index) => (
                      <button
                        key={index}
                        onClick={() => navigate(`/centres/${branch
                          .toLowerCase()
                          .replace(/[^a-z0-9]/g, "-")}`)}
                        className={`block w-full text-left pl-2 hover:underline transition-all duration-200 bg-transparent border-none cursor-pointer ${isScrolled ? 'text-gray-600' : 'text-gray-300'
                          }`}
                      >
                        {branch}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Info Dropdown in mobile - Click to toggle */}
          <div className="space-y-2">
            <button
              onClick={() => setInfoOpen(!infoOpen)}
              className="block w-full text-left hover:underline transition-all duration-200"
            >
              Info
            </button>
            {infoOpen && (
              <div className="pl-4 space-y-1 text-sm">
                <button onClick={() => navigate("/news")} className="block hover:underline transition-all duration-200 bg-transparent border-none cursor-pointer w-full text-left">
                  News
                </button>
                <button onClick={() => navigate("/awards")} className="block hover:underline transition-all duration-200 bg-transparent border-none cursor-pointer w-full text-left">
                  Awards
                </button>
                <button onClick={() => navigate("/team")} className="block hover:underline transition-all duration-200 bg-transparent border-none cursor-pointer w-full text-left">
                  Team
                </button>
                <button onClick={() => navigate("/careers")} className="block hover:underline transition-all duration-200 bg-transparent border-none cursor-pointer w-full text-left">
                  Careers
                </button>
              </div>
            )}
          </div>

          <button onClick={() => navigate("/contact")} className="block hover:underline transition-all duration-200 bg-transparent border-none cursor-pointer w-full text-left">
            Contact
          </button>
          <button
            onClick={onBookTourClick}
            className="flex items-center gap-1 hover:underline transition-all duration-200"
          >
            <Calendar className="w-4 h-4" />
            Book a Tour
          </button>
          <button
            onClick={() => navigate("/account")}
            className="flex items-center gap-1 hover:underline transition-all duration-200 bg-transparent border-none cursor-pointer"
          >
            <User className="w-4 h-4" />
            My Account
          </button>
          <a
            href="tel:+917022274000"
            className="flex items-center gap-1 hover:underline transition-all duration-200"
          >
            <Phone className="w-4 h-4" />
            Call Us
          </a>
        </div>
      )}


    </header>
  );
};

export default Header;