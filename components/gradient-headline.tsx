import styled from 'styled-components'

import CONFIG from '../CONFIG'

interface GradientHeadlineProps {
  path: string
}

export const GradientHeadline = styled.h1<GradientHeadlineProps>`
  background: -webkit-linear-gradient(
    -45deg,
    ${({ path }) =>
      (CONFIG.pages[path] || CONFIG.pages['/'])?.gradient.join(',')}
  );
  display: inline;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
