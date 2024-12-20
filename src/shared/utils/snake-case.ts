export const snake_case = (plain_text: string) =>
  plain_text
    ?.split(/\.?(?=[A-Z])/)
    .join("_")
    .toLowerCase();
