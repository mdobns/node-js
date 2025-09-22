"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import "../global.css";
const navLinks = [
  { name: "Login", path: "/login" },
  { name: "Register", path: "/register" },
  { name: "Forgot Password", path: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div>
      {navLinks.map((link)  => {
        const isActive = pathname === link.path ||
        (pathname.startsWith(link.path) && link.path !== ('/'))
        return (
            <div key={link.name} className="inline-block  p-4">
            
                <Link 
                href={link.path} 
                className={isActive?"bg-blue-700 text-white p-2": "text-blue-500 p-4 hover:text-blue-700 " }  >
                    {link.name}
                </Link>
            </div>
        );
      })}

      {children}
    </div>
  );
}
