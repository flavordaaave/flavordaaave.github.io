import styled from 'styled-components'

import CONFIG from '../CONFIG'

interface GradientBackgroundProps {
  path: string
}

const GRADIENT_COLORS = [
  ...new Set(
    ([] as string[]).concat(
      ...Object.values(CONFIG.pages).reduce((acc, curr) => {
        if (curr?.gradient) acc.push(curr.gradient)
        return acc
      }, [] as string[][])
    )
  ),
].join(',')

const BACKGROUND_SIZE = (function () {
  const size = Object.keys(CONFIG.pages).length * 100
  return `${size}% ${size}%`
})()

export const GradientBackground = styled.div<GradientBackgroundProps>`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, ${() => GRADIENT_COLORS});
  background-position: ${({ path }) => getBackgroundPositionForPath(path)};
  background-size: ${() => BACKGROUND_SIZE};
  transition: background-position 0.75s ease-out;
`

function getBackgroundPositionForPath(
  path: GradientBackgroundProps['path']
): string {
  const keys = Object.keys(CONFIG.pages)
  const index = keys.indexOf(path)

  if (!index) return '0% 0%'

  const offset = (index * 100) / (keys.length - 1)
  return `${offset}% ${offset}%`
}
