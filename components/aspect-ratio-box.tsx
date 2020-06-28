import React from 'react'
import styled from 'styled-components'

interface AspectRatioBoxProps {
  ratio: number
}

const Middle = styled.div<{ ratio: number }>`
  width: 100%;
  height: 0;
  padding-bottom: ${({ ratio }) => ratio * 100}%;
  position: relative;
`

const Inner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const AspectRatioBox: React.FunctionComponent<AspectRatioBoxProps> = ({
  children,
  ratio,
  ...rest
}) => {
  return (
    <div {...rest}>
      <Middle ratio={ratio}>
        <Inner>{children}</Inner>
      </Middle>
    </div>
  )
}
