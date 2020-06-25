import { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'

interface WrapperProps {
  activePage: number
}

const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  min-height: 100vh;
  min-height: fill-available;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  background-position: ${({ activePage }) => {
    switch (activePage) {
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

const Headline = styled.h1`
  color: rgba(255, 255, 255);
  font-size: 2em;
`

const Button = styled.button`
  margin: 0 4px;
`

const Home: NextPage = () => {
  const [activePage, setActivePage] = React.useState<number>(1)

  return (
    <Wrapper activePage={activePage}>
      <Headline>Coming soon...</Headline>
      <div>
        {[...Array(4).keys()].map((n) => (
          <Button key={n} onClick={() => setActivePage(n)}>{`Page ${
            n + 1
          }`}</Button>
        ))}
      </div>
    </Wrapper>
  )
}

export default Home
