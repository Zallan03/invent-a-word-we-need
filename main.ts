import { mkdirSync, writeFileSync } from "node:fs";

// Invent a Word We Need — one invented English word plus a one-line
// definition, 140 characters at most in total.
const ENTRY =
  "ghosttyping — typing a long reply, deleting it all, and sending 'ok' instead.";

// Gate: 1 to 140 characters (word + definition in total). Fail loudly rather
// than submit an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry is ${ENTRY.length} characters, gate is 1..140`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
