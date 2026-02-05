interface CharacterPortraitProps {
  className?: string;
}

export function CharacterPortrait({ className = '' }: CharacterPortraitProps) {
  return (
    <div className={`flex justify-center ${className}`}>
      <img
        src="/assets/generated/benson-inspired-portrait.dim_768x768.png"
        alt="Character portrait"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary shadow-lg object-cover"
      />
    </div>
  );
}
