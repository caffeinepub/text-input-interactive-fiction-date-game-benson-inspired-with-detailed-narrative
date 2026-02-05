# Specification

## Summary
**Goal:** Build a retro-themed, text-input interactive fiction “date” game with a grumpy, rule-focused gumball machine–headed park manager character, featuring detailed narration and deterministic offline branching responses.

**Planned changes:**
- Create a text-input game UI with a scrollable transcript that shows a detailed multi-paragraph opening scene, then alternates between player inputs and detailed narrative responses across multiple turns.
- Add a restart/new game control that resets transcript and game state.
- Implement deterministic, offline response generation (no external AI/LLM calls) with simple state (e.g., mood/affinity and scene/beat index) to preserve continuity and enable branching paths (positive/romantic, awkward/neutral, antagonistic/rude), including at least one “successful date” ending and one “early end” ending.
- Add an optional “Character & Setting” panel/modal with original descriptive text, plus a UI setting to configure the character name (defaulting to an original non-copyright name) and no claims of online lookup.
- Apply a cohesive retro interactive-fiction visual theme (typography, colors, layout) across header, transcript, input, and buttons (avoiding default blue/purple-heavy styling).
- Add and render static generated images from `frontend/public/assets/generated` (e.g., character portrait and a scene/header background) referenced directly by the frontend.

**User-visible outcome:** The user can read a detailed opening scene, type freeform replies to progress through a branching date story with consistent continuity and endings, view an optional character/setting description with configurable name, restart at any time, and see a cohesive retro-themed UI with embedded static visuals.
