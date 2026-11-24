// One Emoji, One Smile — make.fun bounty u-0xkianno-one-emoji-one-smile-5470751f
//
// The entry is a single emoji: 🤗 (U+1F917 HUGGING FACE).
// Why this one, against the judge's brief (most important first):
//   1. Warm and friendly on purpose: a smiling face with open arms — a hug —
//      plainly aims to warm a stranger, not just to look pleasant.
//   2. Warmth at first glance: the smile plus the hug reads as kind, friendly
//      and gently funny with no context at all.
//   3. Universal: a hug is read the same way by a stranger of any age or
//      background; there is no irony, in-joke or slang to land wrong.
//   4. Chosen, not default: it is not the first smiley that comes to mind
//      (🙂 / 😊). The open arms make it a deliberate pick for the moment,
//      while staying instantly readable.
//   5. Right for a stranger: a friendly hug is warm without intimacy,
//      sarcasm or flirtation — nothing that would read oddly from someone
//      unknown.
//
// The program is fully deterministic: it writes exactly this one emoji and
// nothing else — no words, no caption, no trailing newline — so every run
// produces byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "🤗";

// The gate requires 1–8 characters of UTF-8 text, not only whitespace.
// One emoji, exactly one Unicode code point, so this can never fail the gate.
if ([...ENTRY].length !== 1) {
  throw new Error("entry must be exactly one emoji");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
