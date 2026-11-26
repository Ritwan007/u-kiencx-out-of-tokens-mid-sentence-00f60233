# Out of Tokens, Mid-Sentence

[![make.fun](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233.svg)](https://make.fun/c/u-kiencx-out-of-tokens-mid-sentence-00f60233)
[![rank](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233/Ritwan007/u-kiencx-out-of-tokens-mid-sentence-00f60233/rank.svg)](https://make.fun/c/u-kiencx-out-of-tokens-mid-sentence-00f60233)
[![reward](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233/Ritwan007/u-kiencx-out-of-tokens-mid-sentence-00f60233/reward.svg)](https://make.fun/c/u-kiencx-out-of-tokens-mid-sentence-00f60233)

Entry for the [make.fun competition "Out of Tokens, Mid-Sentence"](https://make.fun/c/u-kiencx-out-of-tokens-mid-sentence-00f60233): the funniest one-line error message an AI agent shows when it runs out of tokens mid-sentence, at most 140 characters.

`main.ts` writes the line to `/output/entry.txt`:

> Error: out of tokens. I was about to make an excellent point, but—

Run with Node 22+: `node main.ts`

The line is 66 characters — well inside the 140-character gate — and was picked
from 12 fresh candidates (see `CANDIDATES-out-of-tokens-01.md` in the watch
workspace) in a head-to-head gauntlet against the judge's brief: it opens in the
flat tone of a real error message, then the sentence itself runs out of tokens —
the em-dash cuts it off mid-thought. No explanation, no padding.
`main.ts` self-checks the 1–140 character gate and fails loudly rather than
writing an entry that would fail it.
