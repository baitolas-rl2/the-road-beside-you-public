
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);
  
  const navItems = [
    { label: "Home", path: "/" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-sakura-100 dark:border-gray-800 shadow-sm">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="font-hand text-2xl font-bold text-sakura-700 dark:text-sakura-300 hover:text-sakura-800 dark:hover:text-sakura-200 transition-colors"
            onClick={closeMenu}
          >
            Nostalgic Memories
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-3 py-2 font-medium text-sm rounded-md transition-colors",
                    isActive(item.path)
                      ? "text-sakura-700 dark:text-sakura-300 bg-sakura-50 dark:bg-gray-800"
                      : "text-gray-600 dark:text-gray-300 hover:text-sakura-600 dark:hover:text-sakura-300 hover:bg-sakura-50 dark:hover:bg-gray-800"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-sakura-600 dark:hover:text-sakura-300 hover:bg-sakura-50 dark:hover:bg-gray-800 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-b border-sakura-100 dark:border-gray-800">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                isActive(item.path)
                  ? "text-sakura-700 dark:text-sakura-300 bg-sakura-50 dark:bg-gray-800"
                  : "text-gray-600 dark:text-gray-300 hover:text-sakura-600 dark:hover:text-sakura-300 hover:bg-sakura-50 dark:hover:bg-gray-800"
              )}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
