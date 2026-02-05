import { useEffect, useRef } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';
import { TranscriptEntry } from '../game/types';

interface GameTranscriptProps {
  entries: TranscriptEntry[];
  characterName: string;
}

export function GameTranscript({ entries, characterName }: GameTranscriptProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [entries]);

  return (
    <ScrollArea className="flex-1 w-full" ref={scrollRef}>
      <div className="space-y-4 p-4 md:p-6">
        {entries.map((entry, index) => (
          <Card
            key={index}
            className={`p-4 md:p-6 ${
              entry.speaker === 'player'
                ? 'bg-accent/30 ml-4 md:ml-12'
                : 'bg-card mr-4 md:mr-12'
            }`}
          >
            <div className="space-y-2">
              <div className="font-semibold text-sm text-muted-foreground">
                {entry.speaker === 'player' ? 'You' : characterName}
              </div>
              <div
                className={`narrative-text whitespace-pre-wrap ${
                  entry.speaker === 'player' ? 'player-text' : ''
                }`}
              >
                {entry.text}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
}
