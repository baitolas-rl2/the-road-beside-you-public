
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-sakura-100 dark:border-gray-800 mt-auto">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link 
              to="/" 
              className="font-hand text-2xl font-bold text-sakura-700 dark:text-sakura-300"
            >
              Nostalgic Memories
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Memórias especiais do nosso relacionamento
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">            
            <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
              Feito com <Heart className="h-4 w-4 text-sakura-500 mx-1" /> para nós dois
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
