import { useState } from "react";
import PhotoCard from "@/components/PhotoCard";
import FallingLeaves from "@/components/FallingPetals";
import BackgroundMusic from "@/components/BackgroundMusic";
import { Button } from "@/components/ui/button";
import { Play, Pause, Music, Leaf } from "lucide-react";

// Definindo a variável base de caminho de forma dinâmica
const basePath = import.meta.env.DEV ? "/" : import.meta.env.BASE_URL;

const Index = () => {
  const [isLeavesPlaying, setIsLeavesPlaying] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const ourPhotos = [
    { 
      id: 1, 
      image: `${basePath}lovable-uploads/gl_1c.png`, 
      title: "Primeira foto em casal",
      aspectRatio: "portrait" as const,
    },
    { 
      id: 2, 
      image: `${basePath}lovable-uploads/gl_2c.png`, 
      title: "❤️", 
      aspectRatio: "portrait" as const,
    },
    { 
      id: 3, 
      image: `${basePath}lovable-uploads/gl_3c.png`, 
      title: "Depois de uma noite de sorvete",
      aspectRatio: "portrait" as const,
    },
    { 
      id: 4, 
      image: `${basePath}lovable-uploads/gl_4c.png`, 
      title: "No Único - Com uma mulher única",
      aspectRatio: "portrait" as const,
    },
    { 
      id: 5, 
      image: `${basePath}lovable-uploads/gl_5i.png`, 
      title: "Amigo do Dodgers",
      aspectRatio: "portrait" as const,
    },
    { 
      id: 6, 
      image: `${basePath}lovable-uploads/gl_6c.png`, 
      title: "Um dos dias mais felizes de 2024 para mim (Ramon)",
      aspectRatio: "portrait" as const,
    },
    { 
      id: 7, 
      image: `${basePath}lovable-uploads/gl_7c.png`, 
      title: "Black Sushi Rooftop", 
      aspectRatio: "portrait" as const,
    },
    { 
      id: 8, 
      image: `${basePath}lovable-uploads/cb_8c.png`, 
      title: "Nossa primeira festa à fantasia juntos",
      aspectRatio: "portrait" as const,
    },
    { 
      id: 9, 
      image: `${basePath}lovable-uploads/gl_9c.png`, 
      title: "Rolêzinho à tarde",
      aspectRatio: "portrait" as const,
    },
    { 
      id: 10, 
      image: `${basePath}lovable-uploads/gl_10c.png`, 
      title: "Oscar Niemeyer Natal 2024",
      aspectRatio: "portrait" as const,
    },
    { 
      id: 11, 
      image: `${basePath}lovable-uploads/gl_11i.png`, 
      title: "ÁÁÁÁÁÁrvore",
      aspectRatio: "portrait" as const,
    },
    { 
      id: 12, 
      image: `${basePath}lovable-uploads/gl_12c.png`, 
      title: "Primeiro Natal juntos", 
      aspectRatio: "portrait" as const,
    },
    { 
      id: 13, 
      image: `${basePath}lovable-uploads/gl_13c.png`, 
      title: "Boishoi Pub e muito rock",
      aspectRatio: "portrait" as const,
    },
    { 
      id: 14, 
      image: `${basePath}lovable-uploads/gl_14i.png`, 
      title: "Uma moça linda dessas 'solteira'?",
      aspectRatio: "portrait" as const,
    },
    { 
      id: 15, 
      image: `${basePath}lovable-uploads/cb_15i.png`, 
      title: "Tive que vir falar com ela",
      aspectRatio: "portrait" as const,
    },
    { 
      id: 16, 
      image: `${basePath}lovable-uploads/gl_16i.png`, 
      title: "Sua alegria me contagia",
      aspectRatio: "portrait" as const,
    },
  ];

  const toggleLeaves = () => {
    setIsLeavesPlaying(!isLeavesPlaying);
  };

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  return (
    <div className="flex flex-col min-h-screen bg-ghibli-nature py-10 px-4">
      <FallingLeaves isPlaying={isLeavesPlaying} />
      <BackgroundMusic isPlaying={isMusicPlaying} />
      
      {/* Hero section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="container px-4 mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="ghibli-title mb-4 animate-fade-in">
              Caminho ao Seu Lado
            </h1>
            <p className="ghibli-subtitle animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Um álbum que celebra o amor nas pequenas jornadas da vida.
            </p>
            
            <div className="flex justify-center gap-3 mt-4">
              <Button 
                onClick={toggleLeaves} 
                variant="outline" 
                size="sm"
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-700/70 border-nature-200 dark:border-nature-700"
              >
                <Leaf size={16} className="mr-1" />
                {isLeavesPlaying ? "Pausar Folhas" : "Reproduzir Folhas"}
              </Button>
              
              <Button 
                onClick={toggleMusic} 
                variant="outline" 
                size="sm"
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-700/70 border-nature-200 dark:border-nature-700"
              >
                <Music size={16} className="mr-1" />
                {isMusicPlaying ? "Pausar Música" : "Reproduzir Música"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Photo album */}
      <section className="py-8 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="photo-album">
            {ourPhotos.map((photo, index) => (
              <PhotoCard
                key={photo.id}
                image={photo.image}
                title={photo.title}
                aspectRatio={photo.aspectRatio}
                className="animate-fade-in relative z-10"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
