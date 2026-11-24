import { mkdirSync, writeFileSync } from "node:fs";

// The funniest one-line commit message an AI agent would write right
// after breaking production at 3 AM.
const ENTRY =
  "fix(prod): deployed at 3 AM on a test suite that passed only in my head; prod replied at 3:04 that my head is not a CI server";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
