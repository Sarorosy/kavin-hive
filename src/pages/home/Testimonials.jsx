import React from "react";


const testimonials = [
  {
    quote:
      "The flexibility here is unmatched! I can book a desk when I need it, collaborate with other professionals, and still have my quiet space when I need to focus. It’s the perfect balance.",
    name: "Juliana Doe",
    role: "Marketing Manager",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "Fast internet, ergonomic chairs, and great coffee — what else could a developer ask for? This coworking space has seriously boosted my productivity.",
    name: "Bastian Doe",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    quote:
      "I’ve met so many amazing entrepreneurs here. The networking opportunities and events have helped me grow my client base more than I expected.",
    name: "Sarah Doe",
    role: "Freelance Consultant",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    quote:
      "As a startup founder, having a cost-effective yet professional environment for my team has been game-changing. The meeting rooms are modern and fully equipped.",
    name: "Albert Doe",
    role: "Startup Founder",
    image: "https://randomuser.me/api/portraits/men/48.jpg",
  },
];


export default function Testimonials() {
  return (
    <section className="bg-white py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div>
            <p className="text-gray-500 text-sm mb-2 ">/ Testimonials /</p>
            <h2 className="text-4xl font-bold leading-snug mb-4 font-serif">
              What Our Customers <br /> Say About Us.
            </h2>
          </div>
          <p className="text-gray-500 max-w-md">
            Integer tincidunt cras dapibus vivamus elementum semper nisi. Aenean
            vulputate eleifend tellus.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 flex flex-col justify-between shadow-sm"
            >
              <p className="text-black text-3xl mb-4">❝</p>
              <p className="text-gray-600 mb-6">{t.quote}</p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        {/* Footer */}
<div className="mt-10 flex justify-center">
  <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl shadow-sm">
    <div className="flex -space-x-3">
      <img
        src="https://randomuser.me/api/portraits/men/30.jpg"
        alt="customer1"
        className="w-8 h-8 rounded-full border-2 border-white"
      />
      <img
        src="https://randomuser.me/api/portraits/women/31.jpg"
        alt="customer2"
        className="w-8 h-8 rounded-full border-2 border-white"
      />
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="customer3"
        className="w-8 h-8 rounded-full border-2 border-white"
      />
    </div>
    <div>
      <p className="font-semibold">60k+</p>
      <p className="text-sm text-gray-500">Happy customers</p>
    </div>
    <button className="ml-auto text-lg">→</button>
  </div>
</div>

      </div>
    </section>
  );
}
