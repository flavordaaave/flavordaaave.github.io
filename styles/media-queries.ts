export const BREAKPOINTS = {
  4: 480,
  7: 768,
  9: 992,
  12: 1200,
}

export const mediaQueries = (key: keyof typeof BREAKPOINTS) => {
  return (style: TemplateStringsArray | string): string =>
    `@media (min-width: ${BREAKPOINTS[key]}px) { ${style} }`
}
