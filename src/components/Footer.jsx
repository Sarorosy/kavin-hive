import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logoblack from '../assets/logo-black.jpg'
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-16 px-6  ">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Logo */}
                <div>
                    <img
                        src={logoblack}
                        alt="Logo"
                        width={160}
                        height={40}
                        className="rounded-md"
                        unoptimized
                    />
                    <p className="text-sm text-gray-400 mt-4">
                        Inspiring Workspaces for Ambitious Professionals.
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Navigate</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        {["Home", "About Us", "Careers", "Blogs", "Terms & Conditions", "Refund Policy"].map(
                            (item) => (
                                <li
                                    key={item}
                                    className="hover:text-white hover:translate-x-1 transition duration-200 cursor-pointer"
                                >
                                    {item}
                                </li>
                            )
                        )}
                    </ul>
                </div>

                {/* Location Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Locations</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        {[
                            "The Hive at Whitefield, Bangalore",
                            "The Hive at Anna Nagar, Chennai",
                            "The Hive at OMR, Chennai",
                            "The Hive at Gachibowli, Hyderabad",
                            "The Hive at The Mills, Pune",
                            "The Hive at SKCL Guindy, Chennai",
                            "The Hive at Prestige Tech Platina, Bengaluru",
                        ].map((loc) => (
                            <li key={loc} className="hover:text-white transition duration-200">
                                {loc}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter + Socials */}
                <div className="md:col-span-1">
                    <h3 className="text-xl font-semibold mb-4 text-white">
                        Subscribe to Our Newsletter
                    </h3>
                    <form className="bg-white/10 backdrop-blur-lg px-4 py-2 rounded-xl shadow-md border border-white/10 flex flex-col sm:flex-row items-center gap-3">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="flex-1 px-4 py-1 rounded-lg text-black w-full focus:outline-none text-white"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-1 rounded-lg font-medium"
                        >
                            Subscribe
                        </button>
                    </form>

                    <div className="mt-6">
                        <h4 className="text-md font-semibold mb-3 text-white">Follow us</h4>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <Facebook />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <Instagram />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <Linkedin />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <Twitter />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Strip */}
            <div className="mt-16 border-t border-white/10 pt-6 text-sm text-center text-gray-500">
                <p>© 2025 The Hive. All rights reserved.</p>
                <p className="mt-1">
                    Developed by <span className="text-white font-semibold">Hive Team</span>
                </p>
            </div>
            <FloatingWhatsApp
        phoneNumber="918072075487"
        accountName="The Hive"
        avatar="/Hive-Favicon.png"
        statusMessage="Typically replies in minutes"
        chatMessage="Hi 👋! How can we help?"
        placeholder="Type your message here..."
        allowClickAway={false}
        notification
        notificationSound
        darkMode={false}
        allowEsc={false}
      />
        </footer>
    );
}
