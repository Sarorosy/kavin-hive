import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { allSpaces } from "../../data/productData";
import { DateRange } from "react-date-range";
import { addDays, isBefore, startOfDay } from "date-fns";
import RelatedProducts from "./RelatedProducts";

const ProductPage = () => {
    const { slug } = useParams();
    const product = allSpaces.find(
        (item) =>
            item.route &&
            item.route.toLowerCase() === `product/${slug}`.toLowerCase()
    );

    const today = startOfDay(new Date());

    const [range, setRange] = useState([
        {
            startDate: today,
            endDate: addDays(today, 29),
            key: "selection",
        },
    ]);

    if (!product) return <Navigate to="/" replace />;

    // Handle user selecting a day
    const handleSelect = (ranges) => {
        const start = ranges.selection.startDate;
        if (isBefore(start, today)) return; // prevent past
        setRange([
            {
                startDate: start,
                endDate: addDays(start, 29), // force 30-day window
                key: "selection",
            },
        ]);
    };

    // Prevent year change by custom navigator
    const handleShownDateChange = (date) => {
        const currentYear = today.getFullYear();
        if (date.getFullYear() !== currentYear) {
            return false; // block year navigation
        }
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-6xl mx-auto mt-12">
                {/* Left */}
                <div>
                    <img
                        src={product.img}
                        alt={product.title}
                        className="w-full h-80 object-cover rounded-2xl shadow"
                    />
                    <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
                    <p className="text-gray-500 mt-2">{product.desc}</p>
                    <p className="text-2xl font-bold text-green-600 mt-4">
                        {product.price} <span className="text-sm">{product.unit}</span>
                    </p>


                    {/* 🔹 Amenities */}
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold mb-3">Amenities</h2>
                        <div className="grid grid-cols-2 gap-3">
                            {product.amenities.map((a, idx) => {
                                const Icon = a.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg shadow-sm"
                                    >
                                        {Icon && <Icon className="w-5 h-5 text-blue-600" />}
                                        <span className="text-gray-700 text-sm">{a.caption}</span>
                                    </div>
                                );
                            })}

                            {/* ➕ More button */}
                            <div className="flex items-center justify-center bg-gray-100 p-2 rounded-lg shadow-sm transition">
                                <span className="text-blue-600 font-medium text-sm">and More ++</span>
                            </div>
                        </div>
                    </div>

                </div>


                {/* Right */}
                <div className="border rounded-2xl shadow p-4 w-full">
                    <DateRange
                        ranges={range}
                        onChange={handleSelect}
                        moveRangeOnFirstSelection={false}
                        minDate={today}
                        showDateDisplay={false}
                        months={2}
                        direction="vertical"
                        rangeColors={["#14b8a6"]}
                        onShownDateChange={handleShownDateChange}
                    />

                    <div className="mt-4 bg-teal-100 p-3 rounded-lg">
                        <p>
                            <strong>Booking:</strong>{" "}
                            {range[0].startDate.toLocaleDateString()} to{" "}
                            {range[0].endDate.toLocaleDateString()}
                        </p>
                        <p>
                            <strong>Booking cost:</strong> {product.price}
                        </p>
                    </div>

                    <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700">
                        Book Now
                    </button>
                </div>
            </div>
            <RelatedProducts location={product.location || "all"} currentRoute={product.route} />
        </>
    );
};

export default ProductPage;
