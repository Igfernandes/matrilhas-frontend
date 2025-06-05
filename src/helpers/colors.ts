export function getRandomColor(): string {
  const h = Math.floor(Math.random() * 360); // matiz
  const s = 70; // saturação fixa
  const l = 50; // luminosidade fixa
  return `hsl(${h}, ${s}%, ${l}%)`;
}
