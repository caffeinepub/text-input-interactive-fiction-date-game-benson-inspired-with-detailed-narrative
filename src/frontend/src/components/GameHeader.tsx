import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GameHeaderProps {
  characterName: string;
  onSettingsClick: () => void;
}

export function GameHeader({ characterName, onSettingsClick }: GameHeaderProps) {
  return (
    <header className="relative w-full h-48 md:h-64 overflow-hidden border-b-4 border-primary">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(/assets/generated/park-date-scene-bg.dim_1600x900.png)',
          filter: 'brightness(0.7)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
      <div className="relative h-full container mx-auto px-4 flex items-end pb-6">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
            An Evening with {characterName}
          </h1>
          <p className="text-lg text-white/90 drop-shadow mt-1">
            An Interactive Romance
          </p>
        </div>
        <Button
          variant="secondary"
          size="icon"
          onClick={onSettingsClick}
          className="mb-2"
          title="Settings"
        >
          <Settings className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
