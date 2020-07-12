import React from 'react'

interface NoseProps {
  top?: number
  left?: number
  state?: 'normal' | 'raised'
}

export const Nose: React.FunctionComponent<NoseProps> = ({
  left = 0,
  state,
  top = 0,
}) => {
  const normal = React.useRef(null)
  const raised = React.useRef(null)

  React.useEffect(() => {
    switch (state) {
      case 'raised':
        return raised.current?.beginElement()
      case 'normal':
      default:
        return normal.current?.beginElement()
    }
  }, [state])

  return (
    <path
      d="M0 0c0 4.418 5.82 8 13 8s13-3.582 13-8"
      fill="#000000"
      fillOpacity="0.15"
      id="Nose"
      transform={`translate(${left}, ${top})`}
    >
      <animateTransform
        additive="sum"
        attributeName="transform"
        begin="indefinite"
        dur="100ms"
        fill="freeze"
        ref={normal}
        to={`${left}, ${top}`}
        type="translate"
      />

      <animateTransform
        additive="sum"
        attributeName="transform"
        begin="indefinite"
        dur="100ms"
        fill="freeze"
        ref={raised}
        to={`${left}, ${top - 3}`}
        type="translate"
      />
    </path>
  )
}
