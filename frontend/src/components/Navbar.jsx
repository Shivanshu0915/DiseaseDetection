import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import VerticalNavbar from './VerticalNav';

export function Navbar() {
    return (
        <>
            <nav className="sticky w-full flex justify-between items-center px-[3%] md:px-[6%] py-4 top-0 bg-white/80 backdrop-blur-sm z-50 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)]">
                <Link to="/">
                    <div className="flex items-center">
                        <div className="font-sans text-2xl font-bold text-[#23ACEB] px-2 cursor-pointer">
                            HealthWise
                        </div>
                    </div>
                </Link>

                <div className="hidden md:flex space-x-8 text-badami6 text-base font-medium px-2 ">
                    <a href="#home" className="hover:text-[#23ACEB]">
                        Home
                    </a>
                    <a href="#diseaseDetection" className="hover:text-[#23ACEB]">
                        Disease Detection
                    </a>
                    <Link to="/chat">
                    <div className="hover:text-[#23ACEB]">
                        Chat with Bot
                    </div>
                    </Link>
                    <a href="#about" className="hover:text-[#23ACEB]">
                        About
                    </a>
                    <a href="#members" className="hover:text-[#23ACEB]">
                        Members
                    </a>
                </div>
            </nav>
            <VerticalNavbar></VerticalNavbar>
        </>
    )
}
