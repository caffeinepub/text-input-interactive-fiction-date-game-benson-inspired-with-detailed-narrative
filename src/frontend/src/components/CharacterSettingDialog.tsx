import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CharacterPortrait } from './CharacterPortrait';
import { characterDescription, settingDescription, defaultCharacterName } from '../game/characterCopy';

interface CharacterSettingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  characterName: string;
  onCharacterNameChange: (name: string) => void;
}

export function CharacterSettingDialog({
  open,
  onOpenChange,
  characterName,
  onCharacterNameChange,
}: CharacterSettingDialogProps) {
  const [tempName, setTempName] = useState(characterName);

  const handleSave = () => {
    onCharacterNameChange(tempName);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Character & Setting</DialogTitle>
          <DialogDescription>
            Learn about your date and customize your experience
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <CharacterPortrait />

          <div className="space-y-3">
            <h3 className="font-semibold text-lg">About Your Date</h3>
            <p className="narrative-text text-muted-foreground leading-relaxed">
              {characterDescription}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg">The Setting</h3>
            <p className="narrative-text text-muted-foreground leading-relaxed">
              {settingDescription}
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t">
            <Label htmlFor="character-name" className="text-base font-semibold">
              Character Name
            </Label>
            <p className="text-sm text-muted-foreground">
              Customize the character's name for your playthrough
            </p>
            <Input
              id="character-name"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              placeholder={defaultCharacterName}
              className="max-w-xs"
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
