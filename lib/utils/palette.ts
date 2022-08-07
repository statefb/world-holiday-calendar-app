const codes = [
  "#42a5f5",
  "#ab47bc",
  "#d32f2f",
  "#f57c00",
  "#0288d1",
  "#388e3c",
];

export default function getColor(index: number) {
  const idx = index % codes.length;
  return (codes as unknown as any[])[idx];
}
