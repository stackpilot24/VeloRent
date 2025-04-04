import React from 'react';
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const NavLinks = [
    { id: 1, name: "Vehicles", link: "/#vehicles" },
    { id: 2, name: "How it Works", link: "/#works" },
    { id: 3, name: "About", link: "/#about" },
    { id: 4, name: "Booking", link: "/#booking" },
    // { id: 5, name: "Login", link: "/#Login" },
    // { id: 6, name: "SignUp", link: "/#SignUp" }
];

const Navbar = ({ theme, setTheme }) => {
    return (
        <nav className={`shadow-md duration-300 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-[#F8F9FA] text-black"}`}>
            <div className="container md:py-0">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div>
                        <a href='/' className="text-3xl font-bold font-serif ml-3">RideRental</a>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-6">
                            {NavLinks.map((data) => (
                                <li key={data.id} className="py-5">
                                    <a
                                        href={data.link}
                                        className={`transition-colors duration-300 font-arial font-bold text-lg ${theme === "dark"
                                                ? "text-white hover:text-[#FF6060]"  // Custom hover color for dark mode
                                                : "text-black hover:text-[#FF5733]" // Custom hover color for light mode
                                            }`}
                                    >
                                        {data.name}
                                    </a>


                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Theme Toggle & Buttons */}
                    <div className="flex items-center gap-4">
                        {/* Theme Toggle */}
                        {theme === "dark" ? (
                            <BiSolidSun onClick={() => setTheme("light")} className="text-2xl cursor-pointer" />
                        ) : (
                            <BiSolidMoon onClick={() => setTheme("dark")} className="text-2xl cursor-pointer" />
                        )}

                        {/* Login & Sign Up Buttons */}
                        <a href='/login'
                            className={`px-4 py-2 border rounded-md transition-colors duration-300 ${theme === "dark"
                                    ? "border-white text-white hover:bg-white hover:text-black"
                                    : "border-black text-black hover:bg-black hover:text-white"
                                }`}
                        >Login
                        </a>

                        <a href='/signup'
                            className={`px-4 py-2 mr-1 border rounded-md transition-colors duration-300 ${theme === "dark"
                                    ? "border-white text-white hover:bg-white hover:text-black"
                                    : "border-black text-black hover:bg-black hover:text-white"
                                }`}
                        >
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
