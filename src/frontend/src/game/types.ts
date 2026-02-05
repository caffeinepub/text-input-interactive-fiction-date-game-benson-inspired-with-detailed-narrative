export type ToneCategory = 'positive' | 'neutral' | 'negative';

export interface TranscriptEntry {
  speaker: 'player' | 'character';
  text: string;
  timestamp: number;
}

export interface GameState {
  affinity: number; // -10 to 10
  beat: number; // story progression index
  ended: boolean;
  endingType?: 'success' | 'failure' | 'neutral';
  flags: {
    mentionedRules: boolean;
    complimented: boolean;
    wasRude: boolean;
    askedAboutWork: boolean;
    sharedPersonal: boolean;
  };
}

export const initialGameState: GameState = {
  affinity: 0,
  beat: 0,
  ended: false,
  flags: {
    mentionedRules: false,
    complimented: false,
    wasRude: false,
    askedAboutWork: false,
    sharedPersonal: false,
  },
};
