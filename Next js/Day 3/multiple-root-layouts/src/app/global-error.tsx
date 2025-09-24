"use client";
import "./globals.css";

export default function GlobalError() {
  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Something went wrong</h1>
          <button 
            onClick={() => {
              window.location.reload();
            }} 
            className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 transition"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}