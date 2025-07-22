import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroImage} 
          alt="Feng Shui Compass" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 gradient-secondary rounded-full opacity-20 floating"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 gradient-primary rounded-full opacity-20 floating" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Discover Your 
            <span className="glow-pulse"> FengShui</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Calculate your personal feng shui elements, find harmony in your space, and unlock the secrets of ancient Chinese wisdom
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your birth date to start..."
                className="w-full sm:w-96 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-secondary transition-smooth"
              />
            </div>
            <Button className="gradient-secondary text-secondary-foreground px-8 py-4 text-lg font-semibold shadow-gold hover:shadow-glow transition-bounce">
              Calculate Now
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 justify-center text-white/80">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>Personal Element Analysis</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>Space Harmony Guide</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>Ancient Wisdom Modern Tools</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
