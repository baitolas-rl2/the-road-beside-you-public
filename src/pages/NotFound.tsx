
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center animate-fade-in">
        <h1 className="text-6xl md:text-7xl font-hand font-bold text-sakura-600 dark:text-sakura-400 mb-4">404</h1>
        <div className="h-1 w-20 bg-sakura-200 dark:bg-sakura-700 mx-auto rounded-full mb-6"></div>
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-sakura-800 dark:text-sakura-200 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          The page you're looking for seems to have wandered off into another anime world. Let's take you back home.
        </p>
        <Link to="/">
          <Button className="bg-sakura-600 hover:bg-sakura-700 text-white dark:bg-sakura-500 dark:hover:bg-sakura-600">
            <Home className="mr-2 h-4 w-4" /> Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
