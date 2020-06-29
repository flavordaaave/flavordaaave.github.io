import React from 'react'
import styled from 'styled-components'

const Outer = styled.div`
  box-sizing: border-box;
  margin: -40px auto 0 auto;
  max-width: 800px;
  width: calc(100% - 28px);
  z-index: 1;
`

const Inner = styled.div`
  background-color: #ffffff;
  border-radius: 6px 6px 0 0;
  min-height: 410px;
  padding: 14px;
  position: relative;

  ::after {
    border-radius: 0 0 300px 300px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    content: '';
    display: block;
    height: 400px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
`

export const ContentContainer: React.FunctionComponent = ({ children }) => {
  return (
    <Outer>
      <Inner>{children}</Inner>
    </Outer>
  )
}
