"use client";
import "./globals.css";
import { useState } from "react";

interface WrapperProps {
    children: React.ReactNode;

}


const ErrorSimulator= ({
    message= "An error occurred",
}:{
    message?: string;
}) => {
    const [error, userError] = useState(false);

    if (error) throw new Error(message);
    return(
        <button 
        title="Simulate error"
        className="bg-red-950 text-red-500 rounded p-1 leading-none font-semibold text-sm hover:bg-red-500 hover:text-white transition"
        onClick={() => userError(true)}
        >
            Simulate error
        </button>
    )
}

export default function ErrorWrapper({ children }: WrapperProps) {
    return (
        <div className="relative flex flex-col rounded-lg border-2 border-gray-300 p-4 m-4">
            <div className="absolute top-0 left-4 -translate-y-1/2 bg-white px-2 text-gray-500">
                <ErrorSimulator message="Error loading products"/>
            </div> 
            {children}
        </div>
    )
}