import customTheme from "@/style/custom_theme";

const font = customTheme.component.styles.font;

export function getFont(weight: keyof typeof font = "normal") {
  return `${font.default} ${font[weight]}`;
}
