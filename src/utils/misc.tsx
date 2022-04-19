export function classJoin(
  styles: {
    [key: string]: string;
  },
  names: string[]
) {
  if (styles == null) {
    throw new Error("null style object");
  }

  const classList = names
    .filter((name) => name !== null)
    .map((name: string) => styles[name] ?? name);

  return ` ${classList.join(" ")} `;
}
