import { useState, KeyboardEvent } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

interface PlayerInputProps {
  onSubmit: (text: string) => void;
  disabled: boolean;
  isProcessing: boolean;
}

export function PlayerInput({ onSubmit, disabled, isProcessing }: PlayerInputProps) {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.trim() && !disabled && !isProcessing) {
      onSubmit(input.trim());
      setInput('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="border-t bg-card p-4 md:p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex gap-2 md:gap-4">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={disabled ? "The story has ended..." : "Type your response..."}
            disabled={disabled || isProcessing}
            className="min-h-[80px] resize-none narrative-text"
            rows={3}
          />
          <Button
            onClick={handleSubmit}
            disabled={!input.trim() || disabled || isProcessing}
            size="lg"
            className="self-end"
          >
            {isProcessing ? (
              <span className="animate-pulse">...</span>
            ) : (
              <Send className="h-5 w-5" />
            )}
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Press Enter to send, Shift+Enter for new line
        </p>
      </div>
    </div>
  );
}
