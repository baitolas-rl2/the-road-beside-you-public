
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Leaf {
  id: number;
  left: string;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
  color: string;
  rotation: number;
  type: number;
}

interface FallingLeavesProps {
  count?: number;
  isPlaying?: boolean;
}

export default function FallingLeaves({ count = 30, isPlaying = true }: FallingLeavesProps) {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    // Cores inspiradas em tons naturais que combinam com o tema ghibli
    const colors = [
      '#8cb369', // Verde médio
      '#a8c899', // Verde claro
      '#5b8c5a', // Verde escuro
      '#d1a05f', // Marrom claro/dourado
      '#f1b03c', // Amarelo/Dourado
      '#c7b897', // Bege/Areia
      '#ba9764', // Marrom/Bege
    ];
    
    const newLeaves = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 0.8 + 0.4, // 0.4 a 1.2
      delay: Math.random() * 15,
      duration: Math.random() * 20 + 25, // 25-45s (mais lenta)
      opacity: Math.random() * 0.7 + 0.2, // 0.2-0.9
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360, // Rotação inicial aleatória
      type: Math.floor(Math.random() * 4), // 4 tipos de folhas
    }));
    
    setLeaves(newLeaves);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {leaves.map((leaf) => {
        let leafShape;
        
        // Diferentes formas de folhas
        switch(leaf.type) {
          case 0:
            leafShape = "leaf-maple";
            break;
          case 1:
            leafShape = "leaf-oak";
            break;
          case 2:
            leafShape = "leaf-round";
            break;
          default:
            leafShape = "leaf-ellipse";
        }
        
        return (
          <div
            key={leaf.id}
            className={cn(
              "absolute top-0",
              leafShape
            )}
            style={{
              left: leaf.left,
              width: `${leaf.type === 2 ? 8 : 16}px`,
              height: `${leaf.type === 2 ? 8 : 20}px`,
              transform: `scale(${leaf.size}) rotate(${leaf.rotation}deg)`,
              opacity: leaf.opacity,
              backgroundColor: leaf.color,
              filter: 'blur(0.5px)',
              boxShadow: leaf.type !== 2 ? '0 0 2px rgba(0,0,0,0.1)' : 'none',
              animation: isPlaying 
                ? `leaf-fall ${leaf.duration}s linear infinite ${leaf.delay}s`
                : 'none',
            }}
          />
        );
      })}
    </div>
  );
}
