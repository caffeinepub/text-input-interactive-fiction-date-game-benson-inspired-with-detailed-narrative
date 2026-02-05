import { useState, useEffect } from 'react';
import { defaultCharacterName } from '../game/characterCopy';

const STORAGE_KEY = 'game-character-name';

export function useGameSettings() {
  const [characterName, setCharacterNameState] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored || defaultCharacterName;
    }
    return defaultCharacterName;
  });

  const setCharacterName = (name: string) => {
    const trimmedName = name.trim() || defaultCharacterName;
    setCharacterNameState(trimmedName);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, trimmedName);
    }
  };

  return {
    characterName,
    setCharacterName,
  };
}
