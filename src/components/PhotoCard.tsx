
import { useState } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface PhotoCardProps {
  image: string;
  title: string;
  description?: string;
  className?: string;
  aspectRatio?: "portrait" | "square" | "video";
  style?: React.CSSProperties;
}

export default function PhotoCard({ 
  image, 
  title, 
  description,
  className,
  aspectRatio = "square",
  style
}: PhotoCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <div
        className={cn(
          "group anime-card hand-drawn-border cursor-pointer",
          className
        )}
        style={style}
        onClick={() => setIsOpen(true)}
      >
        <div className="relative overflow-hidden">
          <div className={cn(
            "overflow-hidden",
            aspectRatio === "portrait" ? "aspect-[3/4]" : 
            aspectRatio === "video" ? "aspect-video" : 
            "aspect-square"
          )}>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white font-medium text-lg mb-1">{title}</h3>
              {description && (
                <p className="text-white/80 text-sm">{description}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl bg-white/95 dark:bg-gray-900/95 p-1 border-none">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-2 top-2 z-50 p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-colors"
            aria-label="Fechar imagem"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-contain max-h-[80vh]"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
