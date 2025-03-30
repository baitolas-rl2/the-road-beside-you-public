
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("animate-fade-in");

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransistionStage("animate-fade-out");
      setTimeout(() => {
        setDisplayLocation(location);
        setTransistionStage("animate-fade-in");
      }, 300); // This should match the duration of your fade-out animation
    }
  }, [location, displayLocation]);

  return (
    <div className={cn("min-h-screen", transitionStage)}>
      {children}
    </div>
  );
}
