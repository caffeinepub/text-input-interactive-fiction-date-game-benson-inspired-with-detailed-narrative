import { GameState, ToneCategory, initialGameState } from './types';
import { classifyInput } from './inputClassifier';
import { storyBeats, getEndingNarration } from './storyBeats';

export interface ResponseResult {
  text: string;
  newState: GameState;
  isEnding: boolean;
}

export function generateResponse(
  input: string,
  currentState: GameState,
  characterName: string
): ResponseResult {
  // Classify the input
  const tone = classifyInput(input);
  
  // Get the current beat
  const beat = storyBeats[currentState.beat];
  
  if (!beat) {
    // We've run out of beats, trigger ending
    const endingText = getEndingNarration(currentState, characterName);
    return {
      text: endingText,
      newState: {
        ...currentState,
        ended: true,
        endingType: currentState.affinity >= 7 ? 'success' : 
                    currentState.affinity >= 3 ? 'neutral' : 'failure',
      },
      isEnding: true,
    };
  }
  
  // Get response based on tone
  const responseText = beat.responses[tone];
  const affinityChange = beat.affinityChanges[tone];
  
  // Update state
  const newAffinity = Math.max(-10, Math.min(10, currentState.affinity + affinityChange));
  
  // Update flags based on input content
  const lowerInput = input.toLowerCase();
  const newFlags = { ...currentState.flags };
  
  if (lowerInput.includes('rule') || lowerInput.includes('regulation')) {
    newFlags.mentionedRules = true;
  }
  if (tone === 'positive' && (lowerInput.includes('look') || lowerInput.includes('handsome') || lowerInput.includes('nice'))) {
    newFlags.complimented = true;
  }
  if (tone === 'negative') {
    newFlags.wasRude = true;
  }
  if (lowerInput.includes('work') || lowerInput.includes('job') || lowerInput.includes('park')) {
    newFlags.askedAboutWork = true;
  }
  
  // Check if this response ends the date early (very negative)
  const endsEarly = tone === 'negative' && newAffinity <= -5;
  
  const newState: GameState = {
    affinity: newAffinity,
    beat: endsEarly ? currentState.beat : currentState.beat + 1,
    ended: endsEarly,
    endingType: endsEarly ? 'failure' : undefined,
    flags: newFlags,
  };
  
  // If we've completed all beats or ended early, add ending narration
  if (endsEarly || currentState.beat + 1 >= storyBeats.length) {
    const endingText = getEndingNarration(newState, characterName);
    return {
      text: responseText + '\n\n' + endingText,
      newState: {
        ...newState,
        ended: true,
        endingType: newState.affinity >= 7 ? 'success' : 
                    newState.affinity >= 3 ? 'neutral' : 'failure',
      },
      isEnding: true,
    };
  }
  
  return {
    text: responseText,
    newState,
    isEnding: false,
  };
}
