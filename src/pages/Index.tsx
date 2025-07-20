import { useState } from "react";
import { Header } from "@/components/Header";
import { DatePickerInput } from "@/components/DatePickerInput";
import { FengShuiCalculatorModal } from "@/components/FengShuiCalculatorModal";
import { Button } from "@/components/ui/button";
import fengShuiCoinsImage from "@/assets/feng-shui-coins.jpg";

const Index = () => {
  const [birthDate, setBirthDate] = useState<Date | undefined>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCalculate = () => {
    if (birthDate) {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-secondary">
      <Header />
      
      {/* Hero Section */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img 
                src={fengShuiCoinsImage}
                alt="Feng Shui Background"
                className="w-full h-full object-cover opacity-10"
              />
              <div className="absolute inset-0 bg-gradient-secondary"></div>
            </div>
            
            <div className="relative z-10">
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent leading-tight">
                Discover Your Feng Shui
              </h1>
              
              {/* Subheading */}
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                Calculate your personal feng shui elements, find harmony in your space, 
                and unlock the secrets of ancient Chinese wisdom
              </p>
              
              {/* Input Section */}
              <div className="bg-card/80 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 shadow-elegant max-w-2xl mx-auto mb-16">
                <div className="flex flex-col sm:flex-row gap-4 items-stretch">
                  <DatePickerInput 
                    date={birthDate}
                    onDateChange={setBirthDate}
                    placeholder="Enter your birthdate to start"
                  />
                  <Button
                    variant="gold"
                    size="lg"
                    onClick={handleCalculate}
                    disabled={!birthDate}
                    className="px-8 h-14 text-lg font-semibold whitespace-nowrap"
                  >
                    Calculate Now
                  </Button>
                </div>
              </div>
              
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-card/60 backdrop-blur-sm border border-gold/10 rounded-xl p-6 hover:border-gold/30 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">🔮</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Personal Element Analysis</h3>
                  <p className="text-muted-foreground">Discover your unique feng shui profile based on your birth date</p>
                </div>
                
                <div className="bg-card/60 backdrop-blur-sm border border-gold/10 rounded-xl p-6 hover:border-gold/30 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Space Harmony Guide</h3>
                  <p className="text-muted-foreground">Learn how to arrange your environment for optimal energy flow</p>
                </div>
                
                <div className="bg-card/60 backdrop-blur-sm border border-gold/10 rounded-xl p-6 hover:border-gold/30 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">⚖️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Ancient Wisdom Modern Tools</h3>
                  <p className="text-muted-foreground">Traditional feng shui principles applied through cutting-edge technology</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-20 left-10 w-8 h-8 bg-gold/20 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute top-40 right-16 w-6 h-6 bg-red/20 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-20 left-20 w-10 h-10 bg-gold/10 rounded-full blur-sm animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Modal */}
      <FengShuiCalculatorModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        birthDate={birthDate || null}
      />
    </div>
  );
};

export default Index;
