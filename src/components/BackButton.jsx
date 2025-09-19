import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function BackButton() {
    const navigate = useNavigate();
    const location = useLocation();

    // Don't show on home page
    if (location.pathname === "/") return null;

    return (
        <button
            onClick={() => navigate("/")}
            className="flex items-center text-black font-bold text-xl absolute top-35 left-5 hover:text-pink-500 transition-colors"
        >
            {/* Backward arrow */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m7-7l-7 7 7 7" />
            </svg>
            Back
        </button>
    );
}
