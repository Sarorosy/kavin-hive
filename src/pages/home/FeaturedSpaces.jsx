import React, { useState } from "react";
import { Monitor, Wifi, Snowflake, ChevronRight } from "lucide-react";
import one from "../../assets/featured/1.jpg";
import two from "../../assets/featured/2.jpg";
import three from "../../assets/featured/3.jpg";
import four from "../../assets/featured/4.jpg";
import five from "../../assets/featured/5.jpg";
import six from "../../assets/featured/6.jpg";

const FeaturedSpaces = () => {
  const allSpaces = [
    {
      img: one,
      title: "Dedicated Desk - Type A",
      desc: "Ideal for personal, semi private.",
      desk: "1 Desk",
      price: "$25",
      unit: "/ Per Day",
      category: "Dedicated Desk",
    },
    {
      img: two,
      title: "Dedicated Desk - Type B",
      desc: "Ideal for personal, high privacy.",
      desk: "1 Desk",
      price: "$50",
      unit: "/ Per Day",
      category: "Dedicated Desk",
    },
    {
      img: three,
      title: "Open Spaces - Type A",
      desc: "Ideal for personal, open spaces.",
      desk: "1 Desk",
      price: "$15",
      unit: "/ Per Day",
      category: "Open Spaces",
    },
    {
      img: four,
      title: "Open Spaces - Type B",
      desc: "Ideal for team, open spaces.",
      desk: "4 Desk",
      price: "$35",
      unit: "/ Per Day",
      category: "Open Spaces",
    },
    {
      img: five,
      title: "Private Office - Type A",
      desc: "Ideal for small office, high privacy.",
      desk: "10 Desk",
      price: "$1,500",
      unit: "/ Per Month",
      category: "Private Office",
    },
    {
      img: six,
      title: "Meeting Room - Type A",
      desc: "Ideal for small team, high privacy.",
      desk: "6 Desk",
      price: "$100",
      unit: "/ Per Day",
      category: "Meeting Room",
    },
  ];

  const categories = [
    "All",
    "Dedicated Desk",
    "Open Spaces",
    "Private Office",
    "Meeting Room",
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSpaces =
    activeCategory === "All"
      ? allSpaces
      : allSpaces.filter((space) => space.category === activeCategory);

  return (
    <div className="bg-gray-50 py-10">
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-sm text-gray-500">/ Featured Workspaces /</p>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-2">
          <h2 className="text-4xl font-bold max-w-xl font-serif">
            Tailored Solutions for Your Unique Work Needs.
          </h2>
          <p className="text-gray-500 max-w-sm mt-4 md:mt-0">
            Integer tincidunt cras dapibus vivamus elementum semper nisi. Aenean
            vulputate eleifend tellus.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full cursor-pointer border transition ${
                activeCategory === cat
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
          <button className="ml-auto px-4 py-2 border rounded-lg hover:bg-gray-100 flex items-center">
            View All <ChevronRight size={15} className="ml-2" />
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {filteredSpaces.map((space, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden  border border-gray-200 p-1 "
            >
              <img
                src={space.img}
                alt={space.title}
                className="w-full h-48 object-cover rounded-xl"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{space.title}</h3>
                <p className="text-gray-500 text-sm">{space.desc}</p>

                {/* Icons */}
                <div className="flex gap-4 mt-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Monitor size={16} /> {space.desk}
                  </div>
                  <div className="flex items-center gap-1">
                    <Wifi size={16} /> Internet
                  </div>
                  <div className="flex items-center gap-1">
                    <Snowflake size={16} /> Full AC
                  </div>
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-end mt-5">
                
                  <button className="bg-white text-black border border-black px-4 py-2 rounded-lg hover:bg-black hover:text-white">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSpaces;
