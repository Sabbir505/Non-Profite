import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundImage = 'https://images.pexels.com/photos/6647837/pexels-photo-6647837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
}) => {
  return (
    <div className="relative">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              {buttonText && buttonLink && (
                <Button 
                  href={buttonLink} 
                  size="lg" 
                  className="animate-pulse"
                >
                  {buttonText}
                </Button>
              )}
              {secondaryButtonText && secondaryButtonLink && (
                <Button 
                  href={secondaryButtonLink} 
                  variant="outline" 
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
                  icon={<ArrowRight className="h-5 w-5" />}
                >
                  {secondaryButtonText}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;