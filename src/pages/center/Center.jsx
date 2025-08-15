// src/pages/Center.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { centersData } from "../../data/centersData";
import Breadcrumb from "../../components/BreadCrumb";
import { ChevronLeftIcon, ChevronRight, TriangleAlert } from "lucide-react";

function Center() {
    const { city, branch } = useParams();
    const navigate = useNavigate();

    const cityData = centersData[city];
    const branchData = cityData?.branches[branch];

    if (!cityData || !branchData) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white text-black">
                <div className="text-center p-12 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl">
                    <div className="w-20 h-20 mx-auto mb-6 bg-red-500 rounded-full flex items-center justify-center">
                        <TriangleAlert />
                    </div>
                    <h1 className="text-3xl font-bold mb-4 ">Center Not Found</h1>
                    <p className="/80 mb-8">The center you're looking for doesn't exist or has been moved.</p>
                    <button
                        onClick={() => navigate("/")}
                        className="group relative px-8 py-4 bg-black text-white rounded-full font-semibold transition-all duration-300 transform "
                    >
                        <span className="relative z-10">Return Home</span>

                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
            {/* Hero Section with Floating Text */}
            <div className="relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-900"></div>
                    <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                                <path
                                    d="M 8 0 L 0 0 0 8"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="0.3"
                                />
                            </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#grid)" />
                    </svg>
                </div>

                <div className="relative pt-16 pb-8 px-4 md:px-8 mx-auto max-w-[1600px]">
                    {/* Breadcrumb */}
                    <div className="mb-6 md:mb-8 relative z-20">
                        <Breadcrumb items={branchData.breadcrumb} />
                    </div>

                    {/* Slider */}
                    <div className="relative w-full md:w-[90%] mx-auto rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
                        {/* Floating Text Card */}
                        <div className="mb-6 md:mb-10 lg:absolute lg:top-1/2 lg:left-8 lg:transform lg:-translate-y-1/2 lg:w-[40%] rounded-xl p-4 sm:p-6 z-20 bg-white text-[#092e46] shadow-md">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 via-black font-serif to-purple-900 bg-clip-text text-transparent leading-tight">
                                {branchData.name}
                            </h1>
                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                                {branchData.details}
                            </p>
                        </div>


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
                            className="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] rounded-xl overflow-hidden"
                        >
                            {branchData.images.map((img, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="relative h-full group/slide">
                                        <img
                                            src={img}
                                            alt={`${branchData.name} ${idx + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 right-4 px-2 py-1 bg-black/50 backdrop-blur-lg rounded-full text-white text-xs sm:text-sm font-medium">
                                            {idx + 1} / {branchData.images.length}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Navigation Arrows */}
                        <button className="custom-prev absolute right-20 sm:right-24 bottom-2 sm:bottom-4 z-10 w-8 h-8 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-lg rounded-full shadow-2xl flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110">
                            <ChevronLeftIcon />
                        </button>
                        <button className="custom-next absolute right-4 sm:right-6 bottom-2 sm:bottom-4 z-10 w-8 h-8 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-lg rounded-full shadow-2xl flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110">
                            <ChevronRight />
                        </button>
                    </div>


                </div>
            </div>






        </div>
    );
}

export default Center;