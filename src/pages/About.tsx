
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">About Our Project</h1>
      <p className="page-subtitle">The story behind our nostalgic anime collection</p>

      <div className="max-w-3xl mx-auto bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-sm animate-fade-in">
        <div className="prose prose-sakura dark:prose-invert mx-auto">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            <span className="font-hand text-2xl text-sakura-700 dark:text-sakura-300">Nostalgic Memories</span> is a 
            digital tribute to the golden era of anime aesthetics, particularly focusing on the artistic style popularized 
            by Studio Ghibli and other iconic animation studios from the 1980s and 1990s.
          </p>
          
          <h2 className="text-2xl font-serif font-semibold text-sakura-800 dark:text-sakura-200 mt-8 mb-4">Our Inspiration</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            The collection draws inspiration from classics like "Whisper of the Heart," "Only Yesterday," and "Ocean Waves" 
            - films that captured everyday moments with extraordinary beauty and emotional depth. We're particularly drawn to 
            the way these works portrayed relationships, both romantic and platonic, with such nuance and authenticity.
          </p>
          
          <h2 className="text-2xl font-serif font-semibold text-sakura-800 dark:text-sakura-200 mt-8 mb-4">The Artistic Style</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Each illustration in our collection emphasizes the hallmarks of classic anime: the delicate line work, 
            soft color palettes, and attention to small details that create atmosphere. We're particularly focused on 
            capturing those fleeting, intimate moments between characters - a shared glance, hands almost touching, 
            or figures silhouetted against beautiful backgrounds.
          </p>
          
          <div className="my-10 bg-sakura-50 dark:bg-gray-700/50 p-6 rounded-lg border border-sakura-100 dark:border-gray-600 text-center">
            <blockquote className="font-hand text-xl text-sakura-700 dark:text-sakura-300 italic">
              "The creation of something new is not accomplished by the intellect, but by the play instinct acting from inner necessity."
            </blockquote>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">— Hayao Miyazaki</p>
          </div>
          
          <h2 className="text-2xl font-serif font-semibold text-sakura-800 dark:text-sakura-200 mt-8 mb-4">Our Collection</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Our gallery features a growing collection of illustrations that celebrate this distinctive art style. 
            Each piece is carefully selected to evoke the emotional resonance and visual poetry characteristic 
            of classic anime. We focus primarily on scenes of human connection set against evocative backdrops 
            like sunsets, cherry blossoms, rain-slicked streets, and cozy interiors.
          </p>
          
          <h2 className="text-2xl font-serif font-semibold text-sakura-800 dark:text-sakura-200 mt-8 mb-4">Join Us</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            We invite you to explore our gallery and immerse yourself in the nostalgic world of classic anime aesthetics. 
            Whether you're a longtime fan of the medium or new to its distinctive visual language, we hope these illustrations 
            will resonate with you and perhaps even rekindle fond memories of your own.
          </p>
          
          <div className="mt-10 text-center">
            <Link to="/contact">
              <Button 
                className="bg-sakura-600 hover:bg-sakura-700 text-white dark:bg-sakura-500 dark:hover:bg-sakura-600 rounded-full px-8 py-6"
              >
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
