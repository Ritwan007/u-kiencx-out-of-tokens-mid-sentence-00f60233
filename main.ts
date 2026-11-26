// Entry for make.fun competition "Out of Tokens, Mid-Sentence"
// (u-kiencx-out-of-tokens-mid-sentence-00f60233).
// Writes a single one-line error message (<=140 chars) to /output/entry.txt.
// Revised: fail loudly instead of writing an entry that would fail the gate.
// Revised again: name the output path once, so the gate check and the write
// cannot drift apart if the path ever changes.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Error: out of tokens. I was about to make an excellent point, but—";

const OUTPUT_FILE = "/output/entry.txt";

const length = [...LINE].length;
if (length < 1 || length > 140 || LINE.trim().length === 0) {
  throw new Error(`Line is ${length} characters; the gate requires 1-140 non-blank characters.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_FILE, LINE, "utf8");
console.log(`Wrote ${length} characters to ${OUTPUT_FILE}`);
