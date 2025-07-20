import { useState } from "react";
import { format } from "date-fns";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface FengShuiCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  birthDate: Date | null;
}

const animals = [
  "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake",
  "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"
];

function calculateZodiac(birthYear: number): string {
  const baseYear = 2020; // 2020 was the year of the Rat
  let index = (birthYear - baseYear) % 12;
  if (index < 0) index += 12;
  return animals[index];
}

function calculateKuaNumber(birthYear: number, gender: string, bornBeforeChineseNewYear = false): number {
  if (bornBeforeChineseNewYear) {
    birthYear -= 1;
  }

  const sumDigits = (year: number): number => {
    return year.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  };

  let sum = sumDigits(birthYear);
  while (sum >= 10) {
    sum = sumDigits(sum);
  }

  let kua: number;
  const isAfter2000 = birthYear >= 2000;

  if (gender.toLowerCase() === "male") {
    kua = (isAfter2000 ? 9 : 10) - sum;
    if (kua === 5) kua = 2;
  } else if (gender.toLowerCase() === "female") {
    kua = (isAfter2000 ? 6 : 5) + sum;
    while (kua >= 10) {
      kua = sumDigits(kua);
    }
    if (kua === 5) kua = 8;
  } else {
    throw new Error("Invalid gender provided. Use 'male' or 'female'.");
  }

  return kua;
}

export function FengShuiCalculatorModal({ isOpen, onClose, birthDate }: FengShuiCalculatorModalProps) {
  const [step, setStep] = useState<'gender' | 'results'>('gender');
  const [gender, setGender] = useState<string>('');

  const handleProceed = () => {
    if (gender) {
      setStep('results');
    }
  };

  const handleClose = () => {
    setStep('gender');
    setGender('');
    onClose();
  };

  const renderGenderSelection = () => (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
        What is your gender?
      </h2>
      
      <RadioGroup value={gender} onValueChange={setGender} className="space-y-4 mb-8">
        <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
          <RadioGroupItem value="male" id="male" />
          <Label htmlFor="male" className="text-lg cursor-pointer flex-1">Male</Label>
        </div>
        <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
          <RadioGroupItem value="female" id="female" />
          <Label htmlFor="female" className="text-lg cursor-pointer flex-1">Female</Label>
        </div>
      </RadioGroup>

      <Button 
        onClick={handleProceed} 
        disabled={!gender}
        className="w-full bg-gradient-gold text-gold-foreground hover:opacity-90 text-lg py-6 shadow-gold"
      >
        Proceed
      </Button>
    </div>
  );

  const renderResults = () => {
    if (!birthDate) return null;

    const birthYear = birthDate.getFullYear();
    const zodiac = calculateZodiac(birthYear);
    const kuaNumber = calculateKuaNumber(birthYear, gender);

    return (
      <div className="animate-fade-in">
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
          Your Feng Shui Profile
        </h2>
        
        <div className="space-y-6">
          <div className="bg-muted/30 p-6 rounded-lg border border-gold/20">
            <h3 className="text-lg font-semibold text-gold mb-2">Birth Date</h3>
            <p className="text-foreground text-xl">{format(birthDate, 'MMMM dd, yyyy')}</p>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg border border-gold/20">
            <h3 className="text-lg font-semibold text-gold mb-2">Chinese Zodiac</h3>
            <p className="text-foreground text-xl font-bold">{zodiac}</p>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg border border-gold/20">
            <h3 className="text-lg font-semibold text-gold mb-2">Kua Number</h3>
            <p className="text-foreground text-xl font-bold">{kuaNumber}</p>
          </div>
        </div>

        <Button 
          onClick={handleClose}
          className="w-full mt-8 bg-gradient-gold text-gold-foreground hover:opacity-90 text-lg py-6 shadow-gold"
        >
          Calculate Again
        </Button>
      </div>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-card border-gold/20 shadow-elegant">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        
        <div className="p-6">
          {step === 'gender' ? renderGenderSelection() : renderResults()}
        </div>
      </DialogContent>
    </Dialog>
  );
}