import React from 'react'

interface NoseProps {
  top?: number
  left?: number
}

export const Nose: React.FunctionComponent<NoseProps> = ({
  left = 0,
  top = 0,
}) => (
  <path
    d="M0 0c0 4.418 5.82 8 13 8s13-3.582 13-8"
    fill="#000000"
    fillOpacity="0.15"
    id="Nose"
    transform={`translate(${left}, ${top})`}
  />
)
