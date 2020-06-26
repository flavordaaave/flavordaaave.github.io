import styled from 'styled-components'

interface GradientBackgroundProps {
  variation: 0 | 1 | 2 | 3
}

export const GradientBackground = styled.div<GradientBackgroundProps>`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    -45deg,
    #de6262,
    #ffb88c,
    #ffd194,
    #70e1f5,
    #00c6ff,
    #0072ff
  );
  background-size: 400% 400%;
  background-position: ${({ variation }) => {
    switch (variation) {
      case 0:
        return '0% 0%'
      case 1:
        return '33% 33%'
      case 2:
        return '66% 66%'
      case 3:
        return '100% 100%'
      default:
        return '0% 0%'
    }
  }};
  transition: background-position 0.75s ease-out;
`
