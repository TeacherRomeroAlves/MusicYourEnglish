export type InstructionKind = "lyrics" | "listening" | "check" | "homework" | "vocabulary-practice" | "wrap-up" | "warm-up";

const FIXED_INSTRUCTIONS: Partial<Record<InstructionKind, string>> = {
  listening: "Listen to the song before starting the lyrics activities.",
  check: "When you finish the song activities, check all your answers at once.",
  homework: "Write or record your answer, then save your work.",
  "vocabulary-practice": "Discuss each question and try to use the new vocabulary. Click each circle when you finish.",
  "wrap-up": "Discuss each question after listening to the song. Click each circle when you finish.",
  "warm-up": "Discuss both questions before listening to the song. Click each circle when you finish.",
};

const REPLACEMENTS: Array<[RegExp, string]> = [
  [/Drag each (?:icon|emoji) into the correct (?:space|gap) while you listen\./i, "Click an emoji to place it in the next gap, or drag it to a specific gap while you listen."],
  [/Click or drag each emoji into the correct lyric gap while you listen\./i, "Click an emoji to place it in the next gap, or drag it to a specific gap while you listen."],
  [/Click or drag each emoji into the correct gap\./i, "Click an emoji to place it in the next gap, or drag it to a specific gap."],
  [/Place the correct emoji in each gap\. Click an emoji to use the next gap, or drag it to a specific gap\./i, "Click an emoji to place it in the next gap, or drag it to a specific gap while you listen."],
  [/Click an emoji to place it in the next space, or drag it into a space\./i, "Click an emoji to place it in the next gap, or drag it to a specific gap while you listen."],
  [/Click a (word|clause|day|expression) to use the next gap, or drag it to a specific gap/gi, "Click a $1 to place it in the next gap, or drag it to a specific gap"],
  [/Click a word to place it in the next gap, or drag it to a specific gap/gi, "Click a word to place it in the next gap, or drag it to a specific gap"],
  [/Listen carefully and click the correct option in each line\./i, "Click the option you hear in each lyric gap."],
  [/Click the correct option while you listen\./i, "Click the option you hear in each lyric gap."],
  [/Listen and choose the correct word according to the song\./i, "Click the option you hear in each lyric gap."],
  [/Drag the correct words into the lyrics while you listen\./i, "Click a word to place it in the next gap, or drag it to a specific gap while you listen."],
  [/Place each word in the correct gap\./i, "Click a word to place it in the next gap, or drag it to a specific gap."],
  [/\bspaces\b/gi, "gaps"],
  [/\bspace\b/gi, "gap"],
];

export function getActivityInstruction(description: string | undefined, kind: InstructionKind = "lyrics") {
  const fixedInstruction = FIXED_INSTRUCTIONS[kind];
  if (fixedInstruction) return fixedInstruction;
  if (!description) return "";

  return REPLACEMENTS.reduce(
    (instruction, [pattern, replacement]) => instruction.replace(pattern, replacement),
    description.trim(),
  );
}
