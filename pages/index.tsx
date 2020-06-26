import { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'

import { GradientBackground, NavButton, Page } from '../components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 150px auto 50px auto;
  width: 100%;
  max-width: 900px;
  align-items: center;
`

const Home: NextPage = () => {
  const [activePage, setActivePage] = React.useState<0 | 1 | 2 | 3>(0)

  return (
    <Page>
      <GradientBackground variation={activePage}>
        <Wrapper>
          {[...Array(4).keys()].map((n) => (
            <NavButton
              isActive={n === activePage}
              key={n}
              onClick={() => setActivePage(n as 0 | 1 | 2 | 3)}
            />
          ))}
        </Wrapper>
      </GradientBackground>
    </Page>
  )
}

export default Home
