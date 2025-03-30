
import { useState } from "react";
import PhotoCard from "@/components/PhotoCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Grid2X2, Grid3X3, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

const Gallery = () => {
  const [layout, setLayout] = useState<"grid" | "masonry">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample gallery data - in a real app, this might come from an API
  const galleryImages = [
    { id: 1, image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3", title: "Sunset Promise", category: "romance", aspectRatio: "square" as const },
    { id: 2, image: "https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3", title: "Summer Dreams", category: "friendship", aspectRatio: "portrait" as const },
    { id: 3, image: "https://images.unsplash.com/photo-1560972550-aba3456b5564?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3", title: "Cherry Blossom Lane", category: "nature", aspectRatio: "square" as const },
    { id: 4, image: "https://images.unsplash.com/photo-1564769625688-5308235e672d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3", title: "Distant Memories", category: "romance", aspectRatio: "video" as const },
    { id: 5, image: "https://images.unsplash.com/photo-1542272201-b1ca555f8505?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3", title: "Rainy Day", category: "nature", aspectRatio: "portrait" as const },
    { id: 6, image: "https://images.unsplash.com/photo-1515296569-9784bce6be3d?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3", title: "Evening Light", category: "romance", aspectRatio: "portrait" as const },
    { id: 7, image: "https://images.unsplash.com/photo-1580479929770-63473d350e68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3", title: "Whispered Secrets", category: "friendship", aspectRatio: "square" as const },
    { id: 8, image: "https://images.unsplash.com/photo-1519750783826-e2420f4d687f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3", title: "Café Afternoon", category: "romance", aspectRatio: "video" as const },
  ];

  const filteredImages = galleryImages.filter(image => 
    image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    image.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="page-container">
      <h1 className="page-title">Gallery</h1>
      <p className="page-subtitle">Explore our collection of nostalgic anime-inspired illustrations</p>
      
      {/* Filters and controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="relative w-full md:w-64">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search by title or category..."
            className="pl-10 bg-white dark:bg-gray-800"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-4">
          <Select
            value={layout}
            onValueChange={(value) => setLayout(value as "grid" | "masonry")}
          >
            <SelectTrigger className="w-[180px] bg-white dark:bg-gray-800">
              <SelectValue placeholder="Select view" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="grid">Grid View</SelectItem>
              <SelectItem value="masonry">Masonry View</SelectItem>
            </SelectContent>
          </Select>
          
          <div className="flex items-center border rounded-md overflow-hidden">
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-none ${layout === 'grid' ? 'bg-sakura-100 dark:bg-gray-700' : ''}`}
              onClick={() => setLayout('grid')}
              aria-label="Grid view"
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-none ${layout === 'masonry' ? 'bg-sakura-100 dark:bg-gray-700' : ''}`}
              onClick={() => setLayout('masonry')}
              aria-label="Masonry view"
            >
              <Grid2X2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Gallery */}
      <div className={
        layout === "grid"
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          : "columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
      }>
        {filteredImages.length > 0 ? (
          filteredImages.map((image, index) => (
            <div 
              key={image.id}
              className={layout === "masonry" ? "break-inside-avoid mb-6" : ""}
            >
              <PhotoCard
                image={image.image}
                title={image.title}
                description={`Category: ${image.category}`}
                aspectRatio={image.aspectRatio}
                className="animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              No images found matching your search. Try a different query.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
