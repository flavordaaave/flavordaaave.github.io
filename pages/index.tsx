import { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(255, 156, 137);
  background: linear-gradient(
    176deg,
    rgba(255, 156, 137, 1) 0%,
    rgba(255, 120, 132, 1) 84%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`

const Headline = styled.h1`
  color: rgba(255, 255, 255);
  font-size: 2em;
`

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Headline>Coming soon...</Headline>
    </Wrapper>
  )
}

export default Home
