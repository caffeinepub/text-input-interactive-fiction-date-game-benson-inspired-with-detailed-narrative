import { ToneCategory } from './types';

export function classifyInput(input: string): ToneCategory {
  const lowerInput = input.toLowerCase().trim();
  
  // Positive/romantic keywords
  const positivePatterns = [
    /\b(yes|sure|please|love|wonderful|beautiful|nice|great|amazing|perfect|absolutely)\b/,
    /\b(smile|smiling|grin|laugh|happy|glad|excited|delighted)\b/,
    /\b(compliment|handsome|attractive|charming|impressive|admire)\b/,
    /\b(thank|thanks|appreciate|grateful|kind)\b/,
    /\b(enjoy|fun|pleasant|lovely|sweet|romantic)\b/,
    /\b(of course|definitely|certainly|gladly)\b/,
  ];
  
  // Negative/rude keywords
  const negativePatterns = [
    /\b(no|nope|nah|never|stupid|dumb|idiot|boring|lame|whatever)\b/,
    /\b(hate|awful|terrible|horrible|worst|suck|annoying)\b/,
    /\b(shut up|get lost|go away|leave|don't care)\b/,
    /\b(ugly|gross|weird|freak|loser)\b/,
    /\b(rules are stupid|screw the rules|who cares about rules)\b/,
    /\b(uptight|rigid|stick in the mud|no fun)\b/,
  ];
  
  // Check for negative first (stronger signal)
  for (const pattern of negativePatterns) {
    if (pattern.test(lowerInput)) {
      return 'negative';
    }
  }
  
  // Then check for positive
  for (const pattern of positivePatterns) {
    if (pattern.test(lowerInput)) {
      return 'positive';
    }
  }
  
  // Default to neutral
  return 'neutral';
}
