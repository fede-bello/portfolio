const KEY_TERMS = [
  "React",
  "TypeScript",
  "FastAPI",
  "Python",
  "GCP",
  "AWS",
  "LangChain",
  "LlamaIndex",
  "Postgres",
  "SQL",
  "C#",
  ".NET",
  "LLMs",
];

export function emphasize(text: string): Array<string | JSX.Element> {
  const parts: Array<string | JSX.Element> = [];

  // Bold numeric metrics like 10%, 25, 1.2x, 3x
  const metricRegex = /(\b\d+(?:[.,]\d+)?%?|\b\d+x)/g;

  let cursor = 0;
  const matches = [...text.matchAll(metricRegex)];
  if (matches.length === 0) {
    return emphasizeKeyTerms(text);
  }

  for (const match of matches) {
    const index = match.index ?? 0;
    if (index > cursor) {
      parts.push(...emphasizeKeyTerms(text.slice(cursor, index)));
    }
    parts.push(<strong key={`${index}-${match[0]}`}>{match[0]}</strong>);
    cursor = index + match[0].length;
  }
  if (cursor < text.length) {
    parts.push(...emphasizeKeyTerms(text.slice(cursor)));
  }
  return parts;
}

function emphasizeKeyTerms(text: string): Array<string | JSX.Element> {
  if (KEY_TERMS.length === 0) return [text];
  const regex = new RegExp(
    `\\b(${KEY_TERMS.map(escapeRegex).join("|")})\\b`,
    "g"
  );
  const result: Array<string | JSX.Element> = [];
  let lastIndex = 0;
  for (const m of text.matchAll(regex)) {
    const idx = m.index ?? 0;
    if (idx > lastIndex) result.push(text.slice(lastIndex, idx));
    result.push(<strong key={`${idx}-${m[1]}`}>{m[1]}</strong>);
    lastIndex = idx + (m[1]?.length ?? 0);
  }
  if (lastIndex < text.length) result.push(text.slice(lastIndex));
  return result.length > 0 ? result : [text];
}

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
