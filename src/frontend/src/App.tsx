import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GameHeader } from './components/GameHeader';
import { GameTranscript } from './components/GameTranscript';
import { PlayerInput } from './components/PlayerInput';
import { CharacterSettingDialog } from './components/CharacterSettingDialog';
import { useGameSettings } from './hooks/useGameSettings';
import { TranscriptEntry, GameState, initialGameState } from './game/types';
import { initialNarration, initialPrompt } from './game/initialNarration';
import { generateResponse } from './game/responseEngine';

function App() {
  const { characterName, setCharacterName } = useGameSettings();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const [transcript, setTranscript] = useState<TranscriptEntry[]>([
    {
      speaker: 'character',
      text: initialNarration + '\n\n' + initialPrompt,
      timestamp: Date.now(),
    },
  ]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePlayerInput = (text: string) => {
    if (gameState.ended) return;

    setIsProcessing(true);

    // Add player's message to transcript
    const playerEntry: TranscriptEntry = {
      speaker: 'player',
      text,
      timestamp: Date.now(),
    };

    setTranscript((prev) => [...prev, playerEntry]);

    // Generate response (with slight delay for better UX)
    setTimeout(() => {
      const response = generateResponse(text, gameState, characterName);

      // Add character's response to transcript
      const characterEntry: TranscriptEntry = {
        speaker: 'character',
        text: response.text,
        timestamp: Date.now(),
      };

      setTranscript((prev) => [...prev, characterEntry]);
      setGameState(response.newState);
      setIsProcessing(false);
    }, 800);
  };

  const handleRestart = () => {
    setGameState(initialGameState);
    setTranscript([
      {
        speaker: 'character',
        text: initialNarration + '\n\n' + initialPrompt,
        timestamp: Date.now(),
      },
    ]);
    setIsProcessing(false);
  };

  return (
    <div className="game-container">
      <GameHeader characterName={characterName} onSettingsClick={() => setSettingsOpen(true)} />

      <main className="flex-1 flex flex-col overflow-hidden">
        <GameTranscript entries={transcript} characterName={characterName} />
        <PlayerInput
          onSubmit={handlePlayerInput}
          disabled={gameState.ended}
          isProcessing={isProcessing}
        />
      </main>

      {gameState.ended && (
        <div className="fixed bottom-24 right-4 md:bottom-32 md:right-8">
          <Button onClick={handleRestart} size="lg" className="shadow-lg">
            <RotateCcw className="mr-2 h-5 w-5" />
            New Game
          </Button>
        </div>
      )}

      <footer className="border-t bg-card py-4 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          © 2026. Built with love using{' '}
          <a
            href="https://caffeine.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            caffeine.ai
          </a>
        </div>
      </footer>

      <CharacterSettingDialog
        open={settingsOpen}
        onOpenChange={setSettingsOpen}
        characterName={characterName}
        onCharacterNameChange={setCharacterName}
      />
    </div>
  );
}

export default App;
