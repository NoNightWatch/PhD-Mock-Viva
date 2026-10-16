# Asset provenance

## Current assets

- `../en/hero.png`: original AI-assisted integrated cover, created with the built-in image-generation tool. The VIVA QUEST title, supporting text, and illustrated viva chamber form one image.
- `../zh/hero.png`: Chinese localization of the English cover, also made with the built-in image-generation tool. The brand title is retained, while both supporting lines are localized.
- `../zh/*.svg` and `../en/*.svg`: original pixel panels created by `build-panels.mjs`. Each language has seven section markers, three feature cards, two action buttons, and one closing invitation.
- The original separated illustration and title panels were retired. Their earlier versions remain recoverable through Git history.
- All characters and scenery were generated for this project. No existing game asset, character, logo, or font binary is distributed.
- SVG labels use system font fallbacks. No third-party icon library is included.
- The visual direction uses navy, gold, mint, stepped pixel ornament, and a scholarly RPG setting. Layout inspiration comes from the owner's [reference repository](https://github.com/NoNightWatch/Obsidian-Codex-CC-for-academy). Its artwork was inspected as a visual reference, not copied into this repository.
- Original project assets use the repository's MIT License to the extent rights apply. External documents and third-party trademarks retain their respective rights. There is no affiliation with any game publisher or AI platform.

## Rebuild the panels

For maintainers only, run from the repository root with Node.js 18 or later:

```sh
node assets/source/build-panels.mjs
```

This rebuilds 26 localized SVG files. Node.js is not required to use the skill. The two integrated cover PNGs remain unchanged.

Inspect revised covers for spelling, text hierarchy, contrast, subject consistency, and readability at narrow widths. Keep matching information in README text and image alt text, since a wide image becomes small on phones.

## English cover prompt

Built-in image-generation mode, opaque background, no input image.

```text
Use case: ads-marketing.
Asset type: a finished integrated GitHub repository cover for VIVA QUEST, an AI skill for PhD mock viva practice. Create a single cohesive illustrated banner WITH the typography already embedded into the scene, never separate artwork and title cards.
Canvas: wide landscape approximately 2048 by 800, ratio 2.56:1. Production-ready pixel RPG key art.
Art direction: meticulously crafted retro 16-bit pixel art with clearly stepped edges, rich but disciplined navy blue, antique warm gold, mint green and parchment ivory. Sophisticated storybook pixel typography. Original characters and architecture. No reused game assets, logos or marks.
Composition: the left 58 percent is a deep midnight blue open sky and quiet stone arch framing large type. The right 42 percent shows an intimate scholar's viva chamber on a high tower, with warm lantern light, stacks of books, a carved wooden round table, an open thesis on a lectern and three original chibi scholars engaged in a thoughtful discussion. One candidate holding a scroll, two listeners at the table. One wears a mint scarf. Above the open thesis, a restrained small constellation of three linked mint square lights suggests questions connected to sources. Low distant academy rooftops and arched bridges along the bottom unify left and right. No sharp split or vertical divider. A fine ornamental gold stepped frame encloses the whole cover. Keep top left very uncluttered so the title dominates. Interesting edge detail but avoid excessive decorations.
Typography: the brand is the main focal point, huge custom gold pixel serif display letters, title in one line occupying almost the whole left region, around 1000 pixels wide. Crisp text with restrained dark pixel shadow and warm gold texture, beautiful editorial hierarchy. Put an elegant thin gold divider below the title; text remains in the same illustration with no title box.
Text verbatim, exactly these three lines, no other text:
"VIVA QUEST"
"AI MOCK VIVA"
"Your thesis. Your next question."
Line1 very large gold, line2 medium large ivory with generous tracking, line3 mint, smaller but readable. Make all three lines balanced and left-aligned within the quiet region, centered vertically as a group. Preserve safe margin of at least 70 pixels. No letters anywhere else, no gibberish in books.
Constraints: original composition and characters; no existing game characters or symbols, no weapons, no graduation celebration, no victory trophy, no claims of guaranteed results, no watermarks. Pixel style throughout, no smooth 3D, no blurry painterly rendering. Image must feel like a finished campaign cover, not a screenshot of a game interface.
```

## Chinese localization prompt

Built-in image-generation edit mode, opaque background. Input image: the English cover above.

```text
Use case: text-localization.
Image 1 is the finished English VIVA QUEST cover, the edit target. Create its Chinese-language companion.
Change ONLY the two lines of supporting typography on the left. Preserve the huge gold "VIVA QUEST" brand title exactly, all characters, their faces/poses/clothes, the academy architecture, moon, stars, books, constellation, lanterns, palette, pixel texture, border, canvas dimensions and composition unchanged.
Replace "AI MOCK VIVA" with exactly "AI 博士答辩练习".
Replace "Your thesis. Your next question." with exactly "你的论文，你的下一次追问。".
Render Chinese characters accurately with crisp, substantial, elegant square serif lettering appropriate to the gold pixel title. Line2 ivory, line3 mint. Maintain the same left alignment, vertical positions and hierarchy. Ensure the full Chinese tagline is legible and not touching the scene. Keep Chinese lettering large; do not shrink below the English original. No added text, new labels or other changes.
```
