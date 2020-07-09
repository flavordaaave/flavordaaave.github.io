import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'

import {
  AnimatedAvatar,
  AspectRatioBox,
  ContentContainer,
  GradientBackground,
  GradientHeadline,
  NavButton,
} from '../components'
import CONFIG from '../CONFIG'
import { mediaQueries } from '../styles'

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
        <AnimatedAvatar path={path} />
        <Header>
          {Object.keys(CONFIG.pages).map((p) => (
            <ButtonWrapper key={p} ratio={1}>
              <NavButton isActive={p === path} onClick={() => router.push(p)}>
                {CONFIG.pages[p]?.title || path}
              </NavButton>
            </ButtonWrapper>
          ))}
        </Header>
      </GradientBackground>
      <ContentContainer>
        <GradientHeadline path={path}>
          {CONFIG.pages[path]?.title || path}
        </GradientHeadline>
        {children}
      </ContentContainer>
    </Container>
  )
}
