import { mkdirSync, writeFileSync } from "node:fs";

// Six Words, One Story — u-deranalabs-six-words-one-story-f982e410
// One complete story in exactly six words: a couple drifting apart —
// he still dreams outward, she is already counting the ways out.
const STORY = "He counted stars. She counted exits.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
