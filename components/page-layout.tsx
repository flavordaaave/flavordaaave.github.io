import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'

import {
  AspectRatioBox,
  ContentContainer,
  GradientBackground,
  NavButton,
} from '../components'
import { mediaQueries } from '../styles/media-queries'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const Header = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 60px auto 60px auto;
  max-width: 600px;
  width: 100%;
`

const ButtonWrapper = styled(AspectRatioBox)`
  width: 50%;
  ${mediaQueries(4)`
    width: 25%;
  `};
`

interface PageLayoutProp {
  path: string
}

export const PageLayout: React.FunctionComponent<PageLayoutProp> = ({
  children,
  path,
}) => {
  const router = useRouter()
  return (
    <Container>
      <GradientBackground path={path}>
        <Header>
          {['/', '/skills', '/work', '/education'].map((p) => (
            <ButtonWrapper key={p} ratio={1}>
              <NavButton
                activeColor={getActiveColorForPath(p)}
                isActive={p === path}
                onClick={() => router.push(p)}
              >
                {p}
              </NavButton>
            </ButtonWrapper>
          ))}
        </Header>
      </GradientBackground>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  )

  function getActiveColorForPath(path: string): string {
    switch (path) {
      case '/':
        return '#0097FF'
      case '/skills':
        return '#70e1f5'
      case '/work':
        return '#F7D19A'
      case '/education':
        return '#EF8F78'
      default:
        return '#ffffff'
    }
  }
}
