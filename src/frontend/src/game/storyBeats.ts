import { GameState } from './types';

export interface StoryBeat {
  responses: {
    positive: string;
    neutral: string;
    negative: string;
  };
  affinityChanges: {
    positive: number;
    neutral: number;
    negative: number;
  };
}

export const storyBeats: StoryBeat[] = [
  // Beat 0: Initial response to greeting
  {
    responses: {
      positive: `His spherical head seems to brighten slightly, the orbs inside settling into a more relaxed pattern. "Thank you," he says, and you can hear the genuine relief in his voice. He sits down carefully, maintaining proper posture but allowing himself to relax just a fraction. "I must admit, I was... concerned about this evening. First dates can be rather unpredictable, and I do prefer things to go according to plan." He pauses, then adds with what might be the hint of a smile in his tone, "But so far, you're exceeding expectations."

He gestures toward the pond, where the last rays of sunlight are painting the water gold. "I chose this spot specifically. It's quiet, well-maintained, and the lighting at this hour is... well, it's quite pleasant, isn't it?" There's a vulnerability in the way he asks, as if your opinion genuinely matters to him.`,
      neutral: `He nods and takes a seat, maintaining a careful distance—polite but not cold. "Very well," he says, his tone professional but not unfriendly. The orbs in his head maintain a steady, measured rotation. "I appreciate your punctuality. It's a quality I value highly." He folds his hands in his lap, clearly trying to find the right balance between formal and casual.

"I thought we might start with a walk around the pond," he suggests, gesturing toward the path. "It's a well-maintained trail, exactly 0.8 miles in circumference. The park closes at nine, which gives us adequate time for conversation without feeling rushed." He seems to realize he's being overly specific and clears his throat. "Unless you'd prefer to simply sit here? I'm... flexible."`,
      negative: `The orbs in his head suddenly spin faster, taking on a reddish tinge. "I—excuse me?" His voice rises slightly, that formal composure cracking. "I take time out of my extremely busy schedule, I arrive precisely on time, I choose the perfect location, and this is the reception I receive?" 

He stands abruptly, his hands clenching and unclenching. "You know what? I don't need this. I have a park to manage, rules to enforce, employees who actually respect my time and effort. This was clearly a mistake." The orbs are practically vibrating now, a clear sign of his agitation. "I should have known better than to—" He stops himself, taking a sharp breath. "Good evening."

He turns to leave, his stride stiff with wounded pride and anger.`,
    },
    affinityChanges: {
      positive: 2,
      neutral: 0,
      negative: -5,
    },
  },
  // Beat 1: Conversation deepens
  {
    responses: {
      positive: `A warmth enters his voice that wasn't there before. "You know, I... I don't often get to just enjoy the park like this. Usually I'm checking for violations, making sure everything is in order, dealing with... well, let's just say some people have very creative interpretations of 'No Littering' signs." The orbs in his head take on a softer, warmer glow.

"But right now, with you, I'm actually noticing things I usually miss. Like how the string lights reflect off the water, or how peaceful it is when you're not worried about someone breaking rule forty-seven, subsection B." He turns to look at you directly. "Thank you for that. For helping me remember why I fell in love with this park in the first place—before it became all about regulations and responsibilities."

He shifts slightly closer on the bench. "Tell me something about yourself. Something real, not just the polite first-date small talk. What makes you... you?"`,
      neutral: `"The park has been my responsibility for several years now," he explains, his tone informative but guarded. "It requires constant vigilance. People don't realize how much work goes into maintaining a space like this—the scheduling, the rule enforcement, the endless paperwork." The orbs maintain their steady rotation.

"But I suppose that's not particularly interesting date conversation, is it?" He seems uncertain, as if he's not quite sure how to bridge the gap between his professional persona and something more personal. "What about you? What do you do? I imagine it's something more... exciting than park management."

There's a hint of self-deprecation in his voice, a suggestion that he's aware he might be coming across as too rigid, but he's not quite sure how to change it.`,
      negative: `His posture stiffens immediately. "I see," he says, his voice cooling several degrees. The orbs in his head slow their rotation, taking on a duller hue. "Well, if you're going to take that attitude, perhaps we should just cut this evening short. I have better things to do than sit here and be insulted."

He stands, brushing off his shirt with sharp, irritated movements. "I tried to be pleasant. I tried to make this work. But clearly, you're not interested in a genuine connection—you're just here to mock someone who actually cares about doing things properly." 

The hurt beneath his anger is palpable. "Goodbye. I hope you find whatever it is you're actually looking for, because it's clearly not here."`,
    },
    affinityChanges: {
      positive: 3,
      neutral: 0,
      negative: -4,
    },
  },
  // Beat 2: Deeper connection or growing distance
  {
    responses: {
      positive: `His entire demeanor transforms. The orbs in his head glow with warm, vibrant colors—amber, rose, soft gold. "I... wow," he says, and there's genuine emotion in his voice. "I don't think anyone's ever really understood that before. Most people just see the rules, the strictness, the guy who yells about parking violations. They don't see that I care because this place matters. Because creating order out of chaos, making something beautiful and functional—that's meaningful to me."

He reaches out, hesitates for just a moment, then gently takes your hand. His touch is warm, surprisingly gentle. "You're remarkable, you know that? Here I was, terrified I'd bore you with talk of park regulations and proper bench maintenance, and instead you're actually listening. Actually seeing me."

The sun has fully set now, and the string lights cast a magical glow over everything. "I know this might be forward, but... I'd really like to see you again. Maybe somewhere that's not my workplace, where I can just be myself without worrying about rule violations and incident reports. Would you... would you like that?"`,
      neutral: `"That's... nice," he says, though he sounds uncertain whether you're genuinely interested or just being polite. The orbs maintain their steady, neutral pattern. "I appreciate you taking the time to listen, at least. Not everyone does."

He glances at his watch—a gesture that seems more nervous habit than actual time-checking. "We've been here for about forty-five minutes. That's a respectable length for a first date, I suppose. Not too short to seem disinterested, not so long that it becomes awkward if things aren't working out."

There's a question in his voice, an uncertainty. "I'm not entirely sure how this is going. You're pleasant enough, and you haven't violated any park rules, which is more than I can say for most people. But I can't quite tell if you're enjoying yourself or just being polite." He looks at you directly. "So I'll ask plainly: would you be interested in doing this again sometime?"`,
      negative: `"That's it," he says, standing abruptly. The orbs in his head are practically vibrating with agitation, flashing between red and dark purple. "I've had enough. I put myself out there, I tried to be vulnerable, I shared things I don't share with anyone, and you respond with... with this?"

His voice cracks slightly, revealing the hurt beneath the anger. "Do you have any idea how hard this is for me? How much courage it took to even agree to this date? I'm not good at this—at being casual, at small talk, at pretending I'm someone I'm not. But I tried. I really tried."

He takes a step back, his whole body language screaming wounded pride and disappointment. "I hope you're proud of yourself. You've successfully made the uptight park manager feel even worse about himself than usual. Congratulations." 

Without waiting for a response, he turns and walks away quickly, his stride stiff and hurt.`,
    },
    affinityChanges: {
      positive: 4,
      neutral: -1,
      negative: -6,
    },
  },
];

export function getEndingNarration(state: GameState, characterName: string): string {
  if (state.affinity >= 7) {
    return `**A PERFECT EVENING**

As ${characterName} waits for your answer, the string lights seem to glow a little brighter, the evening air a little sweeter. The rigid, rule-focused park manager you met an hour ago has transformed before your eyes into someone warm, vulnerable, and genuinely wonderful.

"Yes," you say, and the joy that lights up his expression—the way the orbs in his head burst into brilliant, happy colors—makes your heart skip a beat.

"Yes?" he repeats, as if he can't quite believe it. Then, with more confidence: "Yes. That's... that's wonderful. That's better than wonderful, that's—" He laughs, a genuine, unguarded sound you suspect he doesn't make often. "I'm going to stop talking now before I ruin this with over-planning."

He stands, still holding your hand, and for a moment you just look at each other in the glow of the string lights. "Same time next week?" he asks. "Or is that too scheduled? I can be spontaneous. I can definitely be spontaneous. Just... maybe give me a day's notice for spontaneity?"

You laugh, and he grins, and somehow you know this is just the beginning of something special.

**THE END**

*You've discovered that beneath the rules and regulations beats the heart of someone truly worth knowing. Sometimes the most uptight people just need someone patient enough to help them relax.*`;
  } else if (state.affinity >= 3) {
    return `**A PROMISING START**

${characterName} looks at you hopefully, the orbs in his head swirling with cautious optimism. The evening hasn't been perfect—there were awkward moments, times when his rigid nature clashed with the casual atmosphere of a date—but there's been something real here too.

"I'd like that," you say carefully. "Maybe we could try again?"

Relief washes over his features. "Yes. Yes, I'd like that too. Perhaps somewhere less... park-related? I promise I can talk about things other than regulations. Probably. I'll work on it."

There's a self-awareness in his humor that's endearing. He's trying, genuinely trying, and that counts for something.

"I'll call you," he says, then immediately adds, "Is that too formal? Should I text? I'm not entirely sure about the protocol for these things." He catches himself and laughs, a bit embarrassed. "See? This is why I need practice."

You part ways with a tentative plan to meet again, and while it's not a fairy-tale ending, it's real and honest and full of potential.

**THE END**

*Sometimes connection takes time. You've planted the seeds of something that might grow into something wonderful—if you're both willing to nurture it.*`;
  } else if (state.affinity <= -5) {
    return `**AN EVENING CUT SHORT**

You watch ${characterName} walk away, his posture rigid with hurt and anger, the orbs in his head still flashing with agitation. The beautiful evening, the perfect setting, the potential for connection—all of it dissolving into the gathering darkness.

Part of you wants to call after him, to explain, to try again. But the moment has passed. Sometimes people are too different, their wavelengths too misaligned, for even the most romantic setting to bridge the gap.

As his figure disappears down the path, you're left alone on the bench, the string lights twinkling overhead in mockery of what might have been. The park is still beautiful, the evening still perfect—but the date is definitively over.

Perhaps he'll find someone who appreciates his dedication to order and rules. Perhaps you'll find someone whose personality meshes better with yours. But tonight, at least, wasn't meant to be.

**THE END**

*Not every connection is meant to work out. Sometimes the kindest thing you can do is recognize incompatibility early and let both people move on.*`;
  } else {
    return `**A POLITE CONCLUSION**

${characterName} nods slowly, processing your response. The orbs in his head maintain their neutral, steady rotation—neither particularly happy nor particularly upset. "I see," he says finally. "Well, thank you for your honesty."

He stands, brushing off his shirt in that precise way of his. "I appreciate you taking the time this evening. It was... educational, if nothing else." There's no bitterness in his voice, just a kind of resigned acceptance.

"I hope you find what you're looking for," he adds, and it sounds genuine. "And I hope whoever you find appreciates you more than I apparently did, or you appreciated me, or... well, you understand."

He offers a small, formal nod—very much the park manager again rather than the vulnerable person who briefly emerged during your conversation. "Good evening. Please remember that the park closes at nine, and all visitors should exit through the main gate."

With that, he turns and walks away, not angry, not hurt, just... done. The date ends not with drama but with a quiet fizzle, two people who simply weren't quite right for each other going their separate ways.

**THE END**

*Sometimes there's no spark, no chemistry, no magic—and that's okay. Not every date has to be a disaster or a fairy tale. Some just... are.*`;
  }
}
