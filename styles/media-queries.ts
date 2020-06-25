export const breakpoints = {
  4: 480,
  7: 768,
  9: 992,
  12: 1200,
}

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | string): string =>
    `@media (min-width: ${breakpoints[key]}px) { ${style} }`
}
